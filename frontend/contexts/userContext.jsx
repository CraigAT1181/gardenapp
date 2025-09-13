import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import * as Linking from "expo-linking";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    let alive = true;

    async function handleUrl(url) {
      try {
        console.log("URL:", url);

        if (!url) return;

        const [, hash] = url.split("#");
        if (!hash) return;

        const params = Object.fromEntries(new URLSearchParams(hash).entries());
        console.log("handleUrl -> params:", params);

        const { access_token, refresh_token } = params;

        if (!access_token || !refresh_token) {
          console.log("handleUrl -> tokens missing");
          return;
        }

        const { error, data } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) {
          console.error("handleUrl -> setSession error:", error);
        } else {
          console.log("handleUrl -> setSession ok, data:", data);

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
          console.log("Email confirmed and session set!");
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
        setUser(session?.user ?? null);
        setAuthChecked(true);
      } catch (err) {
        console.error("getSession error:", err);
      }
    })();

    const {
      data: { authListener },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("onAuthStateChange -> event, session:", _event, session);
      setUser(session?.user ?? null);
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

  async function register(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: "exp://10.100.75.43:8081/emailconfirmation",
      },
    });

    if (error) throw error;

    return data;
  }

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) throw error;

    console.log("Signed in (data):", data);

    return data;
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
