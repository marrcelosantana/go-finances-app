import { createContext, ReactNode, useState } from "react";

export interface AuthDataProps {
  user: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthDataProps>({} as AuthDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState("Marcelo Santana");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
