import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface AuthContextData {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<string | null>("user", null);
  const login = (name: string) => setUser(name);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); // useContext
