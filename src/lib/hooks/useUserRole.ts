import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const ADMIN_EMAILS = ["abdulrahmanhabibh@gmail.com"];

type UserRole = "admin" | "user" | null;

export const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
    if (!user) {
      setRole(null);
      return;
    }

    if (user.email && ADMIN_EMAILS.includes(user.email)) {
      setRole("admin");
    } else {
      setRole("user");
    }
  }, [user]);

  const isAdmin = () => role === "admin";

  return { role, isAdmin };
};