import React, { Fragment, useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Button from "../../ui-elements/button";
import Imag from "next/image";
import { useHttpClient } from "../../../hooks/http-hook";
import NotificationContext from "../../../context/notification-context";

import { Image } from "phosphor-react";
import { AuthContext } from "../../../context/auth-context";
import ErrorModal from "../../ui-elements/error-modal";
import Modal from "../../ui-elements/modal";

const UploadGalleryImages = (props) => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const auth = useContext(AuthContext);
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Nahrávám...",
      message: "Nahrávám fotky to databáze. Chvilku strpení.",
      status: "pending",
    });

    try {
      const formData = new FormData();
      imagesToUpload.forEach((image) => {
        formData.append("galleryImages", image);
      });

      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gallery/${props.id}`,
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );

      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Nahrání fotek proběhlo úspěšně",
        status: "success",
      });
      window.location.reload();
    } catch (err) {
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    notificationCtx.showNotification({
      title: "Mažu...",
      message: "Mažu galerii. Chvilku strpení.",
      status: "pending",
    });
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gallery/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      setShowConfirmModal(false);
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Galerie byla smazána",
        status: "success",
      });
      router.push("/gallery");
    } catch (err) {
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  const clearImageSelection = () => {
    setImagesToUpload([]);
    setSelectedImages([]);
  };

  const imageHandleChange = (event) => {
    if (event.target.files) {
      const arrayToUpload = Array.from(event.target.files);
      const fileArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagesToUpload((prevImages) => prevImages.concat(arrayToUpload));
      setSelectedImages((prevImages) => prevImages.concat(fileArray));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <Imag src={photo} key={photo} height={150} width={225} alt='Obrázek v galerii'/>;
    });
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Opravdu chcete galerii smazat?"
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
      <div className="upload-gallery__container">
        <h2 className="heading-secondary upload-gallery__heading">
          Přidej fotky
        </h2>

        <div className="upload-gallery__select">
          <input
            className="upload-gallery__select__input"
            type="file"
            multiple
            id="file"
            onChange={imageHandleChange}
          />
          <label
            className="upload-gallery__select__label"
            htmlFor="file"
            accept=".jpg,.png,.jpeg"
          >
            <i className="upload-gallery__select__icon">
              <Image size={100} />
            </i>
          </label>
        </div>
        <div className="upload-gallery__result">
          {renderPhotos(selectedImages)}
        </div>

        <div className="upload-gallery__actions">
          <Button
            inverse
            onClick={clearImageSelection}
            className="upload-gallery__button"
          >
            vymaž selekci
          </Button>
          <Button
            onClick={submitFormHandler}
            className="upload-gallery__button"
          >
            Nahraj Fotky
          </Button>
          <Button danger onClick={showDeleteWarningHandler}>
            Smaž Galerii
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadGalleryImages;
