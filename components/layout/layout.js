import { Fragment, useContext } from "react";

import Header from "./header/header";
import Footer from "./footer/footer";
import NotificationContext from "../../context/notification-context";
import Notification from "../ui-elements/notification";

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <div className="page-container">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
