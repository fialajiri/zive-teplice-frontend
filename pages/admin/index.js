import { useContext, useState } from "react";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";
import LoadingSpinner from "../../components/ui-elements/loading-spinner";

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
    setLoadedUsers((prevUser) =>
      prevUser.filter((user) => user.id !== deletedUserId)
    );
  };

  const userUpdateHandler = (userIndex, user) => {
    setLoadedUsers((prevUsers) =>
      prevUsers.map((userItem, index) => {
        if (index === userIndex) {
          return user;
        } else {
          return userItem;
        }
      })
    );
  };

  if (auth.user && auth.user.role === "admin") {
    return (
      <GeneralAdmin
        news={loadedNews}
        users={loadedUsers}
        onDeleteNews={newsDeleteHandler}
        onDeleteUser={userDeleteHandler}
        onUpdateUser={userUpdateHandler}
      />
    );
  } else if (auth.user && auth.user.role === "user") {
    return <PerformerAdmin />;
  }

  return <LoadingSpinner asOverlay />;
};

export default AdminPage;

export const getStaticProps = async () => {
  const news = await getAllNews();
  const users = await getAllUsers();

  return { props: { news: news, users: users }, revalidate: 60 * 60 };
};

// export const getServerSideProps = async() => {
//   const news = await getAllNews();
//   const users = await  getAllUsers();

//   return {
//      props: { news: news, users: users }
//   }
// }
