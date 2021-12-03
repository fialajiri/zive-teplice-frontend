import { Fragment, } from "react";
import Head from "next/head";

import UpdateNews from "../../../components/news/news-update";
import { getNewsById, getAllNews } from "../../../lib/api-util";

const EditNewsItem = ({ loadedNewsItem }) => {
  return (
    <Fragment>
      <Head>
        <title>Editace aktuality</title>
        <meta charSet="utf-8"/>        
      </Head>
      <UpdateNews newsItem={loadedNewsItem} />;
    </Fragment>
  );
};

EditNewsItem.requireAuth = true;
EditNewsItem.requireAdmin = true;

export default EditNewsItem;

export const getStaticProps = async (context) => {
  const { params } = context;

  const newsItemId = params.newsId;

  const newsItem = await getNewsById(newsItemId);

  return {
    props: {
      loadedNewsItem: newsItem,
    },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths = async () => {
  const news = await getAllNews();
  const ids = news.map((newsItem) => newsItem.id);

  const pathsWithParams = ids.map((id) => ({ params: { newsId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
