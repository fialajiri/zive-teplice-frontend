import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  adminId: null,
  userRole:null,
  login: () => {},
  logout: () => {},
});