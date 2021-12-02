import Head from "next/head";
import { Component, useCallback, useEffect } from "react";
import Layout from "../components/layout/layout";

import { AuthContext } from "../context/auth-context";
import { NotificationContextProvider } from "../context/notification-context";
import { useAuth } from "../hooks/auth-hook";
import AuthGuard from "../components/pages/auth/auth-guard";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { token, user, login, logout } = useAuth();

  // const verifyUser = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/auth/refreshToken`,
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       login(responseData.token, responseData.user);
  //       console.log("Token refreshed");
  //     } else {
  //       login(null);
  //     }

  //     setTimeout(verifyUser, 5 * 60 * 1000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [login]);

  // useEffect(() => {
  //   verifyUser();
  // }, [verifyUser]);

  // syncLogout across tabs

  const syncLogout = useCallback((event) => {
    if (event.key === "logout") {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);

    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [syncLogout]);

  return (
    <NotificationContextProvider>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          user: user,
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
          {Component.requireAuth ? (
            Component.requireAdmin ? (
              <AuthGuard admin={true}>
                <Component {...pageProps} />
              </AuthGuard>
            ) : (
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            )
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </AuthContext.Provider>
    </NotificationContextProvider>
  );
}

export default MyApp;
