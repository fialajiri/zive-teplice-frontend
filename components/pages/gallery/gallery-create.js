import React, { useContext } from "react";
import Button from "../../ui-elements/button";
import Input from "../../form-elements/input";

import ImageUpload from "../../../components/form-elements/image-upload";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import NotificationContext from "../../../context/notification-context";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../../validators/validators";

import { AuthContext } from "../../../context/auth-context";
import { useRouter } from "next/router";

const CreateGallery = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter()

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Vytvářím...",
      message: "Vytvářím novou galerii. Chvilku strpení.",
      status: "pending",
    });

    event.preventDefault();

    try {
      const formData = new FormData();
      console.log(formState.inputs.image.value);

      formData.append("name", formState.inputs.name.value);
      formData.append("image", formState.inputs.image.value);

      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gallery`,
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );

      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Galerie byla úspěšně vytvořena",
        status: "success",
      });
      router.push('/gallery')
    } catch (err) {
      console.log(err);
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  return (
    <div className="create-gallery__container">
      <h2 className="heading-secondary create-gallery__heading">
        Vytvoř novou galerii
      </h2>
      <form encType="multipart/form-data"
        onSubmit={submitFormHandler}
        className="create-gallery__featured-image"
      >
        <Input
          element="input"
          id="name"
          type="text"
          label="Název galerie"
          validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(15)]}
          errorText="Název musí mít minimální 4 maximálně 15 znaků."
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          center
          onInput={inputHandler}
          errorText="Prosím vyberte obrázek."
        />
        <Button size="big" className="create-gallery__button">
          Vytvoř galerii
        </Button>
      </form>
    </div>
  );
};

export default CreateGallery;
