import { Fragment } from "react";
import Head from "next/head";
import InsertProgram from "../../components/pages/program/program-insert";

const InsertProgramPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Vložit Program</title>
      </Head>
      <InsertProgram />;
    </Fragment>
  );
};

export default InsertProgramPage;

InsertProgramPage.requireAuth = true;
InsertProgramPage.requireAdmin = true;
