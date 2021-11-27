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
  console.log(user);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setShowConfirmModal(false);
      router.push("/");
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
      <div className="dashboard">
        <div className="dashboard__info">
          <h4 className="heading-tertiary dashboard__info__heading ">
            Dobrý den <span> {user.username}</span>
          </h4>
          {/* <p className="dashboard__info__email">{auth.userEmail}</p> */}
          <p className="dashboard__info__text">
            Zde se můžete příhlásit na další Živé Teplice nebo editovat svoje
            údaje.
          </p>
        </div>
        <div className="dashboard__body">
          <div className="dashboard__body__actions">
            <p className="dashboard__body__description">{user.description}</p>
            <Button size="big" pulsating shake>
              Přihlásit na Živé Teplice
            </Button>
          </div>
          <figure className="dashboard__body__image">
            <Image src={user.image.imageUrl} layout="fill" objectFit="cover" />
          </figure>
        </div>
        <div className="dashboard__actions">
          <Button link={`performers/edit/${user._id}`}>Editovat</Button>
          <a className='dashboard__actions__send-mail' href="mailto:seifrtova.nikola@gmail.com">Napište nám</a>
          <Button  onClick={showDeleteWarningHandler} danger>Smazat Profil</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardHead;
