import { createContext } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
