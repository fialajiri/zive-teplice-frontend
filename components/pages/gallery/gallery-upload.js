import React, { useContext, useState } from "react";
import Button from "../../ui-elements/button";
import Imag from "next/image";
import { useHttpClient } from "../../../hooks/http-hook";
import NotificationContext from "../../../context/notification-context";

import { Image } from "phosphor-react";
import { AuthContext } from "../../../context/auth-context";

const UploadGalleryImages = (props) => {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const notificationCtx = useContext(NotificationContext);

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
      console.log(err);
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  const clearImageSelection = () => {
      setImagesToUpload([])
      setSelectedImages([])
  }

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
      return <Imag src={photo} key={photo} height={150} width={225} />;
    });
  };

  return (
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
          size="big"
          className="upload-gallery__button"
        >
          vymaž selekci
        </Button>
        <Button
          onClick={submitFormHandler}
          size="big"
          className="upload-gallery__button"
        >
          Nahraj Fotky
        </Button>
      </div>
    </div>
  );
};

export default UploadGalleryImages;
