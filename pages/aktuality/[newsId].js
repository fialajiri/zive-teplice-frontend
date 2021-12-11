import { Fragment } from "react";
import Head from "next/head";

import NewsItemPage from "../../components/news/news-item-page";
import LoadingSpinner from "../../components/ui-elements/loading-spinner";
import { getAllNews, getNewsById } from "../../lib/api-util";

const NewsPage = ({ loadedNewsItem }) => {
  if (!loadedNewsItem) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <Fragment>
       <Head>
        <title>Aktualita</title>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Živé Teplice, aktuality, novinky"/>
        <meta name="description" content={loadedNewsItem.title}/>
      </Head>
      <NewsItemPage newsItem={loadedNewsItem} />;
    </Fragment>
  );
};

export default NewsPage;

export const getStaticProps = async (context) => {
  const { params } = context;

  const NewsItemId = params.newsId;

  const NewsItem = await getNewsById(NewsItemId);

  return {
    props: {
      loadedNewsItem: NewsItem,
    },
    revalidate: 60,
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
