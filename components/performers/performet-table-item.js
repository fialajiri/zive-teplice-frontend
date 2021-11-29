import React, { Fragment, useContext, useState } from "react";
import Image from "next/image";

import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import Modal from "../ui-elements/modal";
import ErrorModal from "../ui-elements/error-modal";
import LoadingSpinner from "../ui-elements/loading-spinner";
import Button from "../ui-elements/button";

import {
  Trash,
  Pencil,
  Circle,
  CalendarCheck,
  Envelope,
  Hourglass,
  HandPalm,
  Prohibit,
} from "phosphor-react";
import foodTruck from "../../public/icons/food-truck.svg";
import artist from "../../public/icons/artist.svg";

const PerformerTableItem = (props) => {
  const { performer } = props;
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmRegisterModal, setShowConfirmRegisterModal] =
    useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const isActiveTrue = performer.verified.status === "true";
  const isSeller = performer.type === "prodejce";
  const performerType = isSeller ? "prodejce" : "umělec";

  const isregisteredToCurrentTrue = performer.verified.status === "true";

  let currentEventStatusElement;

  const typeImage = (
    <Image
      src={isSeller ? foodTruck : artist}
      className=""
      alt="artist/seller icon"
      height={100}
      width={100}
    />
  );

  const showPerformerRegisterModal = () => setShowConfirmRegisterModal(true);
  const hidePerformerRigisterModal = () => setShowConfirmRegisterModal(false);
  const confirmPerformerHandler = async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/request/${performer.id}`,
        "PATCH",
        JSON.stringify({
          request: "confirmed",
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      setShowConfirmRegisterModal(false);      
      props.onUpdate(props.index, responseData.user);      
    } catch (err) {
      console.log(err);
    }
  };
  const rejectPerformerHandler = async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/request/${performer.id}`,
        "PATCH",
        JSON.stringify({
          request: "rejected",
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      setShowConfirmRegisterModal(false);
      props.onUpdate(props.index, responseData.user);
    } catch (err) {
      console.log(err);
    }
  };

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${performer.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setShowConfirmModal(false);
      props.onDelete(performer.id);
    } catch (err) {}
  };

  if (performer.request === "pending") {
    currentEventStatusElement = (
      <Button
        unstyled
        onClick={showPerformerRegisterModal}
        className="performer-table__item__actions  performer-table__item__icon"
      >
        <Hourglass color="#E19315" />
        <p className="performer-table__item__helper-text">čeká na potvrzení</p>
      </Button>
    );
  } else if (performer.request === "confirmed") {
    currentEventStatusElement = (
      <div className="performer-table__item__actions  performer-table__item__icon">
        <CalendarCheck weight="fill" color="#a6d637" />
        <p className="performer-table__item__helper-text">účast potvrzena</p>
      </div>
    );
  } else if (performer.request === "rejected") {
    currentEventStatusElement = (
      <div className="performer-table__item__actions  performer-table__item__icon">
        <HandPalm weight="fill" color="#e65035" />
        <p className="performer-table__item__helper-text">účast odmítnuta</p>
      </div>
    );
  } else {
    currentEventStatusElement = (
      <div className="performer-table__item__actions  performer-table__item__icon">
        <Prohibit weight="fill" color="#301D19" />
        <p className="performer-table__item__helper-text">nepřihlášen</p>
      </div>
    );
  }

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmRegisterModal}
        onCancel={hidePerformerRigisterModal}
        header="Vyberte, zda chcete potvrdit nebo odmítnout uživatelovu přihlášku"
        footer={
          <Fragment>
            <Button inverse onClick={hidePerformerRigisterModal}>
              Zpět
            </Button>
            <Button pulsating onClick={confirmPerformerHandler}>
              Potvrdit
            </Button>
            <Button danger onClick={rejectPerformerHandler}>
              Odmítnout
            </Button>
          </Fragment>
        }
      />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Opravdu chcete uživatele smazat?"
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
      <li className={`performer-table__item ${props.className}`}>
        <div className="performer-table__item__image">
          <Image
            src={performer.image.imageUrl}
            alt={performer.username}
            width={100}
            height={100}
          />
        </div>
        <h4 className="performer-table__item__name">{performer.username}</h4>
        <a
          href={`mailto:${performer.email}`}
          className="performer-table__item__email performer-table__item__icon"
        >
          <Envelope />
          <p className=" performer-table__item__email__helper-text performer-table__item__helper-text">
            {performer.email}
          </p>
        </a>
        <div className="performer-table__item__tel">
          {performer.phoneNumber}
        </div>
        <div className="performer-table__item__type performer-table__item__actions">
          {typeImage}
          <p className=" performer-table__item__type__helper-text">
            {performerType}
          </p>
        </div>

        <div className="performer-table__item__description">
          {performer.description}
        </div>
        {currentEventStatusElement}
        <div className="performer-table__item__actions  performer-table__item__icon">
          <Circle weight="fill" color={isActiveTrue ? "#a6d637" : "#e65035"} />
          <p className="performer-table__item__helper-text">aktivní</p>
        </div>
        <Button
          link={`performers/edit/${performer.id}`}
          unstyled
          className="performer-table__item__actions  performer-table__item__icon"
        >
          <Pencil color="#a6d637" />
          <p className="performer-table__item__helper-text">editovat</p>
        </Button>
        <Button
          onClick={showDeleteWarningHandler}
          unstyled
          className="performer-table__item__actions  performer-table__item__icon"
        >
          <Trash color="#e65035" />
          <p className="performer-table__item__helper-text">smazat</p>
        </Button>
      </li>
    </Fragment>
  );
};

export default PerformerTableItem;
