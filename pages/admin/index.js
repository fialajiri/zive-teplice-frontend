import { useContext, useState } from "react";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

import { AuthContext } from "../../context/auth-context";

const AdminPage = (props) => {
  const auth = useContext(AuthContext);
  const [loadedNews, setLoadedNews] = useState(props.news.news);  

  const newsDeleteHandler = (deletedNewsId) => {    
    setLoadedNews((prevNews) =>
      prevNews.filter((newsItem) => newsItem.id !== deletedNewsId)
    );
  };

  if (auth.userRole === "admin") {
    return <GeneralAdmin news={loadedNews} onDeleteNews={newsDeleteHandler}/>;
  } else if (auth.userRole === "user") {
    return <PerformerAdmin />;
  }

  return <div>Hello</div>;
};

export default AdminPage;

export const getStaticProps = async () => {
  const responseData = await fetch(process.env.REACT_APP_BACKEND_URL + "/news");
  const newsData = await responseData.json();

  return { props: { news: newsData }, revalidate: 60 * 60 };
};
