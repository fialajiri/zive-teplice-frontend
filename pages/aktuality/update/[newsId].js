import { useContext, useEffect, useState } from "react";
import router from "next/router";

import UpdateNews from "../../../components/news/news-update";
import { getNewsById, getAllNews } from "../../../lib/api-util";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { AuthContext } from "../../../context/auth-context";

const EditNewsItem = ({ loadedNewsItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);

  const isAuth = auth.token && auth.userRole === "admin";

  useEffect(() => {
    if (!isAuth) {
      router.replace("/aktuality");
    } else {
      setIsLoading(false);
    }
  }, [isAuth]);

  if (isLoading || !loadedNewsItem) {
    return <LoadingSpinner asOverlay />;
  }

  return <UpdateNews newsItem={loadedNewsItem} />;
};

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
