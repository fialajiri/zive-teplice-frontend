import { useContext, useState } from "react";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

import { AuthContext } from "../../context/auth-context";

import { getAllNews, getAllUsers } from "../../lib/api-util";

const AdminPage = (props) => {
  const auth = useContext(AuthContext);
  const [loadedNews, setLoadedNews] = useState(props.news);
  const [loadedUsers, setLoadedUsers] = useState(props.users);

  const newsDeleteHandler = (deletedNewsId) => {
    setLoadedNews((prevNews) =>
      prevNews.filter((newsItem) => newsItem.id !== deletedNewsId)
    );
  };

  const userDeleteHandler = (deletedUserId) => {
    setLoadedUsers((prevUser) => {
      prevUser.filter((user) => user.id !== deletedUserId);
    });
  };

  

  // if (auth.userRole === "admin") {
  //   return (
  //     <GeneralAdmin
  //       news={loadedNews}
  //       users={loadedUsers}
  //       onDeleteNews={newsDeleteHandler}
  //       onDeleteUser={userDeleteHandler}
  //     />
  //   );
  // } else if (auth.userRole === "user") {
  //   return <PerformerAdmin />;
  // }

  return <div>Hello</div>;
};

export default AdminPage;

// export const getStaticProps = async () => {
//   const news = await getAllNews();
//   const users = await getAllUsers();

//   return { props: { news: news, users: users }, revalidate: 60 * 60 };
// };
