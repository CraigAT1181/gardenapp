import { useEffect } from "react";
import { useRouter } from "expo-router";

import { useUser } from "../../hooks/useUser";

export default function EmailConfirmation() {
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    if (user) router.replace("/home");
  }, [user]);

  return null;
}
