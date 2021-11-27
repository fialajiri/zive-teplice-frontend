import { Fragment, useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";
import NotificationContext from "../../../context/notification-context";

import Button from "../../ui-elements/button";
import ErrorModal from "../../ui-elements/error-modal";
import Modal from "../../ui-elements/modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";

const ProgramTab = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const getCurrentEvent = async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/events/current`,
        "GET",
        JSON.stringify(),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData.event.program.message);
      setCurrentEvent(responseData.event);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentEvent();
  }, []);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/news/${id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setShowConfirmModal(false);
      props.onDelete(id);
    } catch (err) {}
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

 

  if (!currentEvent) {
    return <LoadingSpinner asOverlay />;
  } else if (currentEvent.length === 0) {
    return (
      <div>
        <Button>Vytvořit novou událost</Button>
      </div>
    );
  } else {
    return (
      <Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Opravdu chcete vytvořit novou událost?"
          footer={
            <Fragment>
              <Button pulsating onClick={cancelDeleteHandler}>
                Zrušit
              </Button>
              <Button danger shake onClick={confirmDeleteHandler}>
                Vytvořit
              </Button>
            </Fragment>
          }
        />
        <div className="program-tab__container">
          <div className="program-tab__head">
            <div className="program-tab__head__heading heading-tertiary">
              Aktuální Událost: <span>{currentEvent.title}</span>
            </div>
          </div>
          <div className="program-tab__body">
            <div className="program-tab__body__title">
              {currentEvent.program.title}
            </div>
            <div className="program-tab__body__container">
              <figure className="program-tab__body__image">
                <Image
                  src={currentEvent.program.image.imageUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
              <div
                className="program-tab__body__message"
                dangerouslySetInnerHTML={createMarkup(
                  currentEvent.program.message
                )}
              ></div>
            </div>
            <div className="program-tab__body__actions">
              {currentEvent.program && (
                <Button link="program/edit">Editovat Program</Button>
              )}
              {currentEvent.program && (
                <Button link="program/insert">
                  Vyvořit program pro tuto událost
                </Button>
              )}
            </div>
          </div>
          <div className="program-tab__tail">
            <Button danger onClick={showDeleteWarningHandler}>
              Vytvořit novou událost
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ProgramTab;
