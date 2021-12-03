import { Fragment } from "react";
import Head from "next/head";
import Register from "../../components/pages/register/register";

const RegisterPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Registrace</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Živé Teplice, Zažít město jinak, registrace, zúčastnit se"
        />
        <meta
          name="description"
          content="Živé Teplice - registrace prodejců a umělců"
        />
      </Head>
      <Register />
    </Fragment>
  );
};

export default RegisterPage;
