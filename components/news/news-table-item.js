import React, { Fragment, useContext, useState } from "react";

import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import Modal from "../ui-elements/modal";
import ErrorModal from "../ui-elements/error-modal";
import { Trash, Pencil } from "phosphor-react";

import Button from "../ui-elements/button";

const NewsTableItem = (props) => {
  const { title, createdAt, abstract, id } = props.newsItem;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  


  let humanReadableDate = new Date(createdAt).toLocaleDateString(
    "cs-CZ",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  

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
      <li className={`news-table__item ${props.className}`}>
        <h4 className="news-table__item__title">{title}</h4>
        <time className="news-table__item__date">{humanReadableDate}</time>
        <p className="news-table__item__abstract">{abstract}</p>

        <Button         
          unstyled
          link={`aktuality/update/${id}`}
          className="news-table__item__actions  news-table__item__icon"
        >
          <Pencil color="#a6d637" />
          <p className="news-table__item__helper-text">editovat</p>
        </Button>
        <Button
          onClick={showDeleteWarningHandler}
          unstyled
          className="news-table__item__actions  news-table__item__icon"
        >
          <Trash color="#e65035" />
          <p className="news-table__item__helper-text">smazat</p>
        </Button>
      </li>
    </Fragment>
  );
};

export default NewsTableItem;
