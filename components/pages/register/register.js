import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";

import Input from "../../form-elements/input";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";
import Button from "../../ui-elements/button";
import ImageUpload from "../../form-elements/image-upload";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../../validators/validators";

import { useForm } from "../../../hooks/form-hook";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";
import NotificationContext from "../../../context/notification-context";

const Register = (props) => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const notificationCtx = useContext(NotificationContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
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
      // image: {
      //   value: null,
      //   isValid: false,
      // },
    },
    false
  );

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Registruji...",
      message: "Registruji Vás do aplikace. Chvilku strpení.",
      status: "pending",
    });

    event.preventDefault();

    try {
      const formData = new FormData();
      
      formData.append("email", formState.inputs.email.value);
      formData.append("phoneNumber", formState.inputs.phoneNumber.value);
      formData.append("password", formState.inputs.password.value);
      formData.append("confirmPassword", formState.inputs.confirmPassword.value);
      formData.append("username", formState.inputs.username.value);      
      formData.append("description", formState.inputs.description.value);
      formData.append("type", formState.inputs.type.value);
      // formData.append("image", formState.inputs.image.value);
      
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
        "POST",
        formData
      );      

      auth.login(responseData.token, responseData.role);
      
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Registrace proběhla úspěšně",
        status: "success",
      });
      router.push("/login");
    } catch (err) {
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
      <div className="registration">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Registrační formulář</h2>

        <form onSubmit={submitFormHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Prosím zadejte platný email."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="phoneNumber"
            type="text"
            label="Telefonní číslo"
            validators={[VALIDATOR_MINLENGTH(9)]}
            errorText="Prosím zadejte telefonní číslo."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="username"
            type="text"
            label="Název prodejce/jméno umělce"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Prosím zadejte své jméno."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zadejte platné heslo o minimálně 8 znacích."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="confirmPassword"
            type="password"
            label="Potvrďte heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zopakujte heslo."
            onInput={inputHandler}
          />

          <Input
            id="description"
            element="textarea"
            rows="6"
            label="Krátký medajlonek"
            validators={[VALIDATOR_MINLENGTH(150), VALIDATOR_MAXLENGTH(350)]}
            errorText="Prosím napište něco o sobě v minimální délce alespoň 150 znaků a maximálně 350 znaků."
            onInput={inputHandler}
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
              />
            </div>
            {/* <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Prosím vyberte obrázek."
            /> */}
          </div>
          <div className="registration__form__button">
            <Button pulsating type="submit" disabled={!formState.isValid}>
              Registrovat
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
