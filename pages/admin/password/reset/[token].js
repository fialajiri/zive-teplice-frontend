import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ResetPasswordStepTwo from "../../../../components/pages/admin/password/reset/reset-step-two";

const ConfirmResetPasswordPage = () => {
  const router = useRouter();
  const token = router.query.token;

  return (
    <Fragment>
      <Head>
        <title>Reset hesla</title>
        <meta charSet="utf-8" />
      </Head>
      <ResetPasswordStepTwo token={token} />
    </Fragment>
  );
};

export default ConfirmResetPasswordPage;
