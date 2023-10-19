import { Fragment, useContext, useState } from "react";
import Head from "next/head";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

import { AuthContext } from "../../context/auth-context";

import { getAllNews, getAllUsers, getCurrentEvent } from "../../lib/api-util";

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
      <Fragment>
        <Head>
          <title>Admin</title>
          <meta charSet="utf-8" />
        </Head>
        <GeneralAdmin
          news={loadedNews}
          users={loadedUsers}
          currentEvent={props.currentEvent}
          onDeleteNews={newsDeleteHandler}
          onDeleteUser={userDeleteHandler}
          onUpdateUser={userUpdateHandler}
        />
      </Fragment>
    );
  } else if (auth.user && auth.user.role === "user") {
    return (
      <Fragment>
        <Head>
          <title>Administrace</title>
          <meta charSet="utf-8" />
        </Head>
        <PerformerAdmin currentEvent={props.currentEvent} />;
      </Fragment>
    );
  }

  return null;
};

AdminPage.requireAuth = true;

export default AdminPage;

export const getStaticProps = async () => {
  const news = await getAllNews();
  const users = await getAllUsers();
  const currentEvent = await getCurrentEvent();

  return {
    props: { news: news, users: users, currentEvent: currentEvent },
    revalidate: 5,
  };
};
