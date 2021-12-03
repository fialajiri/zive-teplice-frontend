import { Fragment } from "react";
import Head from "next/head";
import CreateNewEvent from "../../components/pages/event/create-new-event";

const CreateNewEventPage = () => {
  return (
    <Fragment>
       <Head>
        <title>Vytvoř událost</title>
        <meta charSet="utf-8"/>        
      </Head>
      <CreateNewEvent />;
    </Fragment>
  );
};

export default CreateNewEventPage;

CreateNewEventPage.requireAuth = true;
CreateNewEventPage.requireAdmin = true;
