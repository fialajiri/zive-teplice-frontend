import { Fragment } from "react";
import Head from "next/head";
import EditProgram from "../../components/pages/program/program-edit";

const EditProgramPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Editovat Program</title>
      </Head>
      <EditProgram />;
    </Fragment>
  );
};

export default EditProgramPage;

EditProgramPage.requireAuth = true;
EditProgramPage.requireAdmin = true;
