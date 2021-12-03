import { Fragment } from "react";
import Head from "next/head";
import ResetPasswordStepOne from "../../../../components/pages/admin/password/reset/reset-step-one";

const ResetPasswordPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Reset hesla</title>
        <meta charSet="utf-8" />
      </Head>
      <ResetPasswordStepOne />;
    </Fragment>
  );
};

export default ResetPasswordPage;
