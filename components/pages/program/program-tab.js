import { Fragment, useEffect, useState, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";
import NotificationContext from "../../../context/notification-context";

import Button from "../../ui-elements/button";
import ErrorModal from "../../ui-elements/error-modal";
import Modal from "../../ui-elements/modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ShowProgram from "./program-show";

const ProgramTab = (props) => {
  const router = useRouter();

  const [currentEvent, setCurrentEvent] = useState(props.currentEvent);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showNewEventWarningHandler = () => setShowConfirmModal(true);
  const cancelNewEventHandler = () => setShowConfirmModal(false);
  const confirmNewEventHandler = () => {
    router.push("/event/create");
  };

  const createNewEventModalElement = (
    <Modal
      show={showConfirmModal}
      onCancel={cancelNewEventHandler}
      header="Opravdu chcete vytvořit novou událost?"
      footer={
        <Fragment>
          <Button pulsating onClick={cancelNewEventHandler}>
            Zrušit
          </Button>
          <Button danger shake onClick={confirmNewEventHandler}>
            Vytvořit
          </Button>
        </Fragment>
      }
    />
  );

  if (!currentEvent) {
    return <LoadingSpinner asOverlay />;
  } else if (currentEvent.length === 0) {
    return (
      <Fragment>
        {createNewEventModalElement}
        <Button onClick={showNewEventWarningHandler}>
          Vytvořit novou událost
        </Button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>       
        {createNewEventModalElement}
        <div className="program-tab__container">
          <div className="program-tab__head">
            <div className="program-tab__head__heading heading-tertiary">
              Aktuální událost: <span>{currentEvent.title}</span>
            </div>
          </div>

          {currentEvent.program && <ShowProgram />}

          <div className="program-tab__tail">
            {!currentEvent.program && (
              <Button link="program/insert">
                Vyvořit program pro tuto událost
              </Button>
            )}

            <Button dangerInverse onClick={showNewEventWarningHandler}>
              Vytvořit novou událost
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ProgramTab;
