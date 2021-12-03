import { Fragment } from "react";
import Head from "next/head";
import ChangePassword from "../../../../components/pages/admin/password/change";

const ChangePasswordPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Změna hesla</title>
        <meta charSet="utf-8" />
      </Head>
      <ChangePassword />;
    </Fragment>
  );
};

export default ChangePasswordPage;

ChangePasswordPage.requireAuth = true;
