import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import NotificationContext from "../../../context/notification-context";

import Button from "../../ui-elements/button";
import Input from "../../form-elements/input";
import ImageUpload from "../../form-elements/image-upload";
import ErrorModal from "../../ui-elements/error-modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import Editor from "../../editor/editor";

import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../../validators/validators";

const EditProgram = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const auth = useContext(AuthContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const [currentEvent, setCurrentEvent] = useState(null);

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
      console.log(responseData.event);
      setCurrentEvent(responseData.event);
      setData(responseData.event.program.message)
      setEditorLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentEvent();
  }, []);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      image: {
        value: "",
        isValid: true,
      },
    },
    false
  );
  const placeSubmitHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Ukládám...",
      message: "Ukládám program do databáze. Chvilku strpení.",
      status: "pending",
    });
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);     
      formData.append("message", data);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/events/program/${currentEvent._id}`,
        "PATCH",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Program byl úspěšně uložena",
        status: "success",
      });

      router.push("/admin");
    } catch (err) {
      console.log(err);
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  if (!currentEvent) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="add-news">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Editovat program</h2>
        <hr />
        <form className="add-news__form" onSubmit={placeSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="title"
            element="input"
            label="Titulek"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(75)]}
            errorText="Titulek musí mít minimálně 10 a maximálně 100 znaků."
            onInput={inputHandler}
            initialValue={currentEvent.program.title}
            initialValid={true}
          />

          <div className="editor">
            <label>Obsah</label>
            <Editor
              value={currentEvent.program.message}
              name="description"
              onChange={(data) => {
                setData(data);
              }}
              editorLoaded={editorLoaded}
            />
          </div>

          <ImageUpload
            id="image"
            center
            onInput={inputHandler}
            errorText="Prosím vyberte obrázek."
            image={currentEvent.program.image.imageUrl}
          />

          <Button className="add-news__button" disabled={!formState.isValid}>
            Ulož změny
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default EditProgram;
