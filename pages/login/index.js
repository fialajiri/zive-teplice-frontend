import { Fragment } from "react";
import Head from "next/head";
import Auth from "../../components/pages/auth/auth";

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Přihlásit se</title>
        <meta charSet="utf-8" />
      </Head>
      <Auth />
    </Fragment>
  );
};

export default LoginPage;
