import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";

import Input from "../form-elements/input";
import LoadingSpinner from "../ui-elements/loading-spinner";
import ErrorModal from "../ui-elements/error-modal";
import Button from "../ui-elements/button";
import ImageUpload from "../form-elements/image-upload";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../validators/validators";

import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
import NotificationContext from "../../context/notification-context";

const EditPerformer = (props) => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const notificationCtx = useContext(NotificationContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const {performer} = props

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      phoneNumber: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },

      description: {
        value: "",
        isValid: false,
      },
      type: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: true,
      },
    },
    false
  );

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Ukládám...",
      message: "Ukládám změny do databáze. Chvilku strpení.",
      status: "pending",
    });

    event.preventDefault();

    try {
      const formData = new FormData();      
      
      formData.append("phoneNumber", formState.inputs.phoneNumber.value);      
      formData.append("username", formState.inputs.username.value);      
      formData.append("description", formState.inputs.description.value);
      formData.append("type", formState.inputs.type.value);
      formData.append("image", formState.inputs.image.value);
      
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/${performer.id}`,
        "PATCH",
        formData
      );      
      
      
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Editace proběhla úspěšně",
        status: "success",
      });
      router.push("/admin");
    } catch (err) {
      notificationCtx.showNotification({
        title: "Chyba!!!",
        message: "Něco se pokazilo, zkuste to znovu",
        status: "error",
      });
    }
  };

  return (<Fragment>
    <ErrorModal error={error} onClear={clearError} />
    <div className="registration">
      {isLoading && <LoadingSpinner asOverlay />}
      <h2 className="heading-secondary">Editační formulář</h2>

      <form onSubmit={submitFormHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Prosím zadejte platný email."
          onInput={inputHandler}
          initialValue={performer.email}
          initialValid={true}
          readonly={'readonly'}
        />
        <Input
          element="input"
          id="phoneNumber"
          type="text"
          label="Telefonní číslo"
          validators={[VALIDATOR_MINLENGTH(9)]}
          errorText="Prosím zadejte telefonní číslo."
          onInput={inputHandler}
          initialValue={performer.phoneNumber}
          initialValid={true}
        />
        <Input
          element="input"
          id="username"
          type="text"
          label="Název prodejce/jméno umělce"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Prosím zadejte své jméno."
          onInput={inputHandler}
          initialValue={performer.username}
          initialValid={true}
        />       

        <Input
          id="description"
          element="textarea"
          rows="6"
          label="Krátký medajlonek"
          validators={[VALIDATOR_MINLENGTH(150), VALIDATOR_MAXLENGTH(350)]}
          errorText="Prosím napište něco o sobě v minimální délce alespoň 150 znaků a maximálně 350 znaků."
          onInput={inputHandler}
          initialValue={performer.description}
          initialValid={true}
        />
        <div className="registration__form__container">
          <div className="registration__form__select">
            <Input
              id="type"
              element="select"
              options={["", "Prodejce", "Umělec"]}
              label="Zvolte zdali jste umělec nebo prodejce"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Prosím vyberte jednu z možností."
              onInput={inputHandler}
              initialValue={performer.type}
              initialValid={true}
              readonly="readonly"

            />
          </div>
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="Prosím vyberte obrázek."
            image={performer.image.imageUrl}
            
          />
        </div>
        <div className="registration__form__button performer-edit__buttons">
          <Button inverse type="button" onClick={()=>router.back()}>
            Zpět
          </Button>
          <Button pulsating type="submit" disabled={!formState.isValid}>
            Uložit změny
          </Button>
        </div>
      </form>
    </div>
  </Fragment>);
};

export default EditPerformer;
