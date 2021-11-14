import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  adminId: null,
  role:null,
  login: () => {},
  logout: () => {},
});