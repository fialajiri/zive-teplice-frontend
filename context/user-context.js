import { createContext } from "react";

export const UserContext = createContext({
  userName: null,
  email: null,
  role: null,
  setUser: () => {},
  clearUser: () => {},
});
