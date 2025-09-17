import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import * as Linking from "expo-linking";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function fetchProfileByAuthUser(authUser) {
    if (!authUser.id) return null;

    try {
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      if (profileError) {
        console.warn("No profile found.");

        const fallBack = { id: authUser.id, email: authUser.email };
        setUser(fallBack);
        return fallBack;
      }

      setUser(profile);
      return profile;
    } catch (error) {
      console.error("fetchProfileByAuthUser Error:", error);
      return null;
    }
  }

  useEffect(() => {
    let alive = true;

    async function handleUrl(url) {
      try {
        // console.log("URL:", url);

        if (!url) return;

        const [, hash] = url.split("#");
        if (!hash) return;

        const params = Object.fromEntries(new URLSearchParams(hash).entries());
        // console.log("handleUrl -> params:", params);

        const { access_token, refresh_token } = params;

        if (!access_token || !refresh_token) {
          // console.log("handleUrl -> tokens missing");
          return;
        }

        const { error, data } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) {
          console.error("handleUrl -> setSession error:", error);
        } else {
          // console.log("handleUrl -> setSession ok, data:", data);

          const {
            data: { session },
          } = await supabase.auth.getSession();
          if (!alive) return;
          setUser(session?.user ?? null);
        }
      } catch (err) {
        console.error("handleUrl -> exception:", err);
      }

      if (access_token && refresh_token) {
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (!error) {
          // console.log("Email confirmed and session set!");
        }
      }
    }
    // Cold-start: app opened by a link
    Linking.getInitialURL()
      .then((url) => {
        if (url) handleUrl(url);
      })
      .catch((err) => console.error("Linking.getInitialURL error:", err));

    // Hot-start: app already open and receives a link
    const linkSub = Linking.addEventListener("url", (event) => {
      try {
        handleUrl(event.url);
      } catch (e) {
        console.error("Link event handler error:", e);
      }
    });

    (async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!alive) return;

        if (session?.user) {
          await fetchProfileByAuthUser(session.user);
        } else {
          setUser(null);
        }

        setAuthChecked(true);
      } catch (err) {
        console.error("getSession error:", err);
        setAuthChecked(true);
      }
    })();

    const {
      data: { authListener },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // console.log("onAuthStateChange -> event, session:", _event, session);
      if (session?.user) {
        fetchProfileByAuthUser(session.user).catch((e) =>
          console.error("OnAuthStateChangeError", e)
        );
      } else {
        setUser(null);
      }
    });

    return () => {
      alive = false;

      try {
        if (linkSub && typeof linkSub.remove === "function") linkSub.remove();
        else if (linkSub && typeof linkSub === "function") linkSub();
      } catch (e) {
        console.warn("Error removing link listener:", e);
      }

      try {
        if (authListener?.subscription?.unsubscribe)
          authListener.subscription.unsubscribe();
      } catch (e) {
        console.warn("Error unsubscribing auth listener:", e);
      }
    };
  }, []);

  async function register(email, password, username) {
    const { data: authUser, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: "exp://10.100.75.43:8081/emailconfirmation",
      },
    });

    if (error) throw error;

    if (authUser?.user) {
      await supabase.from("users").upsert([
        {
          user_id: authUser.user.id,
          email: authUser.user.email,
          username,
          profile_pic: null,
        },
      ]);
    }
  }

  async function login(email, password) {
    try {
      // Sign in using Supabase auth //
      const { data: signInData, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (signInError) throw signInError;

      const authUser = signInData?.user;

      if (!authUser) throw new Error("No authenticated user returned.");

      // Use user_id to obtain full user profile from Users table //
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      if (!profile) throw profileError;

      // Request user's profile picture from Supabase bucket //
      let avatar = null;

      if (profile?.profile_pic) {
        const { publicUrl } = await supabase.storage
          .from("profile-pictures")
          .getPublicUrl(profile.profile_pic);
        avatar = publicUrl;
      }

      // Build complete User object for context
      const fullUser = {
        ...profile,
        avatar,
      };

      setUser(fullUser);

      return fullUser;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ user, authChecked, register, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
