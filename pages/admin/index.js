import { useContext, useState } from "react";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

import { AuthContext } from "../../context/auth-context";

const AdminPage = (props) => {
  const auth = useContext(AuthContext);
  const [loadedNews, setLoadedNews] = useState(props.news);
  const [loadedUsers, setLoadedUsers] = useState(props.users);

  console.log(props.news);
  console.log(loadedNews)

  if (auth.userRole === "admin") {
    return <GeneralAdmin news={props.news} users={props.users} />;
  } else if (auth.userRole === "user") {
    return <PerformerAdmin />;
  }

  return <div>Hello</div>;
};

export default AdminPage;

export const getStaticProps = async () => {
  const responsedata = await fetch('http://127.0.0.1:8081/news');
  const news = await responsedata.json();
  console.log(news);

  const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/users");
  const users = await response.json();

  return { props: { news: news}, revalidate: 60 * 60 };
};
