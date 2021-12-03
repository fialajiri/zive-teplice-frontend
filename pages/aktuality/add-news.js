import { Fragment } from "react";
import Head from "next/head";
import AddNews from "../../components/news/news-add";

const AddNewsPage = (props) => {
  return (
    <Fragment>
       <Head>
        <title>Přidej aktualitu</title>
        <meta charSet="utf-8"/>        
      </Head>
      <AddNews />
    </Fragment>
  );
};

export default AddNewsPage;

AddNewsPage.requireAuth = true;
AddNewsPage.requireAdmin = true;
