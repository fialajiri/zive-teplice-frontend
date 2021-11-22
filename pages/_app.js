import Head from "next/head";
import { useCallback, useEffect } from "react";
import Layout from "../components/layout/layout";

import { AuthContext } from "../context/auth-context";
import { NotificationContextProvider } from "../context/notification-context";
import { useAuth } from "../hooks/auth-hook";
import { useHttpClient } from "../hooks/http-hook";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { token, login, logout, adminId, userRole } = useAuth();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const verifyUser = useCallback(async () => {
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
        console.log(responseData)
        login(responseData.token, responseData.role);
        console.log("Token refreshed");
      } else {
        login(null);
      }

      setTimeout(verifyUser, 5 * 1000);
    } catch (err) {
      throw err;
    }
  }, [login]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <NotificationContextProvider>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userRole: userRole,
          adminId: adminId,
          login: login,
          logout: logout,
        }}
      >
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AuthContext.Provider>
    </NotificationContextProvider>
  );
}

export default MyApp;
