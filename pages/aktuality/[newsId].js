import NewsItemPage from "../../components/news/news-item-page";
import LoadingSpinner from "../../components/ui-elements/loading-spinner";
import { getAllNews, getNewsById } from "../../lib/api-util";

const NewsPage = ({ loadedNewsItem }) => {
  if (!loadedNewsItem) {
    return <LoadingSpinner asOverlay />;
  }

  return <NewsItemPage newsItem={loadedNewsItem} />;
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
