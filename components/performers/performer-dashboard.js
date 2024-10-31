import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "../../context/auth-context";
import Button from "../ui-elements/button";

import { useHttpClient } from "../../hooks/http-hook";
import NotificationContext from "../../context/notification-context";
import ErrorModal from "../ui-elements/error-modal";
import Modal from "../ui-elements/modal";
import router from "next/router";

const DashboardHead = (props) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const user = auth.user;
  const notificationCtx = useContext(NotificationContext);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${user._id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setShowConfirmModal(false);
      auth.logout();
      router.push("/");
    } catch (err) {}
  };

  const registerToEventHandler = async () => {
    console.log(auth.user);
    notificationCtx.showNotification({
      title: "Přihlašuji...",
      message: "Přihlašuji vás na aktuální Živé Teplice.",
      status: "pending",
    });
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/request/${user.id}`,
        "POST",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Přihlášení proběhlo úspěšně.",
        status: "success",
      });
      auth.login(auth.token, responseData.user);
    } catch (err) {
      console.log(err);
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  let requestStatusElement;

  if (props.currentEvent.length ===0){
    requestStatusElement = (
      <div className="dashboard__body__request--noevent dashboard__body__request">
        Zatím není vytvořena žádná událost na kterou byste se mohli přihlásit.
      </div>
    );
  } else {

  

  switch (user.request) {
    // case "notsend":
    //   requestStatusElement = (
    //     <Button onClick={registerToEventHandler} size="big" pulsating shake>
    //       Přihlásit na Živé Teplice
    //     </Button>
    //   );
    //   break;
    case "pending":
      requestStatusElement = (
        <div className="dashboard__body__request--pending dashboard__body__request">
          Vaše přihláška se vyhodnocuje.
        </div>
      );
      break;
    case "rejected":
      requestStatusElement = (
        <div className="dashboard__body__request--rejected dashboard__body__request">
          Vaše přihláška byla zamítnuta. Pro více informací kontaktujte
          organizátory.
        </div>
      );
      break;
    case "confirmed":
      requestStatusElement = (
        <div className="dashboard__body__request--confirmed dashboard__body__request">
          Gratulujeme Vaše přihláška byla schválena.
        </div>
      );
      break;
    default:
      requestStatusElement = <div></div>;
  }
}

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Opravdu chcete aktualitu smazat?"
        footer={
          <Fragment>
            <Button pulsating onClick={cancelDeleteHandler}>
              Zrušit
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Smazat
            </Button>
          </Fragment>
        }
      />
      <div className="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__info">
            <h4 className="heading-tertiary dashboard__info__heading ">
              Dobrý den, <span> {user.username}.</span>
            </h4>

            <p className="dashboard__info__text">
              Zde se můžete příhlásit na další Živé Teplice nebo editovat svoje
              údaje.
            </p>
          </div>
          <div className="dashboard__body">{requestStatusElement}</div>
          <div className="dashboard__actions">
            <Button link={`performers/edit/${user._id}`}>Editovat</Button>
            <a
              className="dashboard__actions__send-mail"
              href="mailto:seifrtova.nikola@gmail.com"
            >
              Napište nám
            </a>
            <Button onClick={showDeleteWarningHandler} dangerInverse>
              Smazat Profil
            </Button>
          </div>
        </div>
        <figure className="dashboard__image">
          <Image
            src={user.image.imageUrl}
            layout="fill"
            objectFit="cover"
            priority
            alt={user.username}
          />
        </figure>
      </div>
    </Fragment>
  );
};

export default DashboardHead;
