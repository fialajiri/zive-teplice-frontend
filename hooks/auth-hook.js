import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "./http-hook";

export const useAuth = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(false);
  const router = useRouter();

  const login = useCallback((token, user) => {
    setToken(token);
    setUser((prevUser) => {
      return { ...prevUser, ...user };
    });
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
      router.push("/");
      window.localStorage.setItem("logout", Date.now());
    }
  }, []);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/auth/refreshToken`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          setUser((prevUser) => {
            return { ...prevUser, ...responseData.user };
          });
          setToken(responseData.token);
          console.log("token refreshed");
        } else {
          login(null);
        }

        setTimeout(verifyUser, 10 * 60 * 1000);
      } catch (err) {}
    };

    verifyUser();
  }, []);

  return {
    token,
    user,
    login,
    logout,
  };
};
