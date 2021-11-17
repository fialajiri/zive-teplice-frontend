import Head from "next/head";
import Layout from "../components/layout/layout";

import { AuthContext } from "../context/auth-context";
import { NotificationContextProvider } from "../context/notification-context";
import { useAuth } from "../hooks/auth-hook";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { token, login, logout, adminId } = useAuth();
  return (
  <NotificationContextProvider>
    <AuthContext.Provider value={{
          isLoggedIn: !!token,
          token: token,
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
  )
}

export default MyApp;
