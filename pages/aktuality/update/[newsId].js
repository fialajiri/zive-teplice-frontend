import UpdateNews from "../../../components/news/news-update";
import { getNewsById, getAllNews } from "../../../lib/api-util";

const EditNewsItem = ({ loadedNewsItem }) => {

  if (!loadedNewsItem) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return <UpdateNews newsItem={loadedNewsItem} />;
};

export default EditNewsItem;

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
