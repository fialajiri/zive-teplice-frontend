import { useState, useCallback } from "react";
import { useHttpClient } from "./http-hook";

export const useAuth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [token, setToken] = useState(false);
  const [adminId, setAdminId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState("");

  const login = useCallback((token, role) => {
    setToken(token);
    setUserRole(role);
  }, []);

  const logout = useCallback(async (token) => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
        "GET",
        JSON.stringify(),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      );
    } catch (err) {
    } finally {
      console.log("infinnaly");
      setToken(null);
      setAdminId(null);
      setUserName(null);
      setUserRole(null);
      setUserEmail(null);
      window.localStorage.setItem("logout", Date.now());
    }
  }, []);

  const setUser = useCallback((username, email, role) => {
    setUserName(username);
    setUserRole(role);
    setUserEmail(email);
  }, []);

  return {
    token,
    adminId,
    userRole,
    userName,
    userEmail,
    login,
    logout,
    setUser,
  };
};
