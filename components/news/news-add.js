import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { useForm } from "../../hooks/form-hook";
import NotificationContext from "../../context/notification-context";

import Button from "../ui-elements/button";
import Input from "../form-elements/input";
import ImageUpload from "../../components/form-elements/image-upload";
import ErrorModal from "../ui-elements/error-modal";
import LoadingSpinner from "../ui-elements/loading-spinner";
import Editor from "../editor/editor";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../validators/validators";

const AddNews = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const auth = useContext(AuthContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },     
      image: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Ukládám...",
      message: "Ukládám aktualitu do databáze. Chvilku strpení.",
      status: "pending",
    });
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);      
      formData.append("message", data);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/news",
        "POST",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Aktualita úspěšně uložena",
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
  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="add-news">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Přidej aktualitu</h2>
        <hr />
        <form className="add-news__form" onSubmit={placeSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="title"
            element="input"
            label="Titulek"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(75)]}
            errorText="Titulek musí mít minimálně 10 a maximálně 75 znaků."
            onInput={inputHandler}
          />         
          <div className="editor">
            <label>Zpráva</label>
            <Editor
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
          />

          <Button className="add-news__button" disabled={!formState.isValid}>
            Přidej aktualitu
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddNews;
