import { Fragment } from "react";
import Head from "next/head";
import HomePage from "../components/pages/home/home-page";
import { getAllNews } from "../lib/api-util";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Živé Teplice</title>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Živé Teplice, Zažít město jinak, sousedská slavnost, kultura, Teplice, trhy, jídlo a pití"/>
        <meta name="description" content="Živé Teplice - největší sousedská slavnost v Teplicích"/>
      </Head>
      <HomePage news={props.news} />;
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const news = await getAllNews();

  return { props: { news: news }, revalidate: 60 * 60 };
};
