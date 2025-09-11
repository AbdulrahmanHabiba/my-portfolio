import { createContext, useContext, type ReactNode } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { useUserRole } from "@/lib/hooks/useUserRole";
import { type User } from "firebase/auth";

type UserContextType = {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const { isAdmin } = useUserRole();

  return (
    <UserContext.Provider value={{ user, loading, isAdmin: isAdmin() }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}