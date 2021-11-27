import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { useHttpClient } from "./http-hook";

export const useAuth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(false);
  const router = useRouter()

  const login = useCallback((token, user) => {
    setToken(token);
    setUser(user);
    
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
      setToken(null);
      setUser(null);
      router.push('/')

      window.localStorage.setItem("logout", Date.now());
    }
  }, []);

  return {
    token,
    user,
    login,
    logout,
  };
};
