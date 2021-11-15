import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";

import Input from "../../form-elements/input";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";
import Button from "../../ui-elements/button";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
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
      password: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      keywords: {
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
    },
    false
  );

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Přihlašuji...",
      message: "Přihlašuji do systému",
      status: "pending",
    });

    event.preventDefault();
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/login`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.adminId, responseData.token);
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Přihlašení proběhlo úspěšně",
        status: "success",
      });
      router.push("/");
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
            id="name"
            type="text"
            label="Název prodejce/jméno umělce"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Prosím zadejte své jméno"
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
            id="password2"
            type="password"
            label="Potvrďte heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zopakujte heslo."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="keywords"
            type="text"
            label="Klíčová slova"
            validators={[VALIDATOR_MINLENGTH(30)]}
            errorText="Prosím klíčová slova o celkové délce alespoň 30 znaků."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            rows="6"
            label="Krátký medajlonek"
            validators={[VALIDATOR_MINLENGTH(100)]}
            errorText="Prosím napište něco o sobě v minimální délce alespoň 150 znaků."
            onInput={inputHandler}
          />
           <Input
            id="type"
            element="select"
            options={['','Prodejce', 'Umělec']}
            label="Zvolte zdali jste umělec nebo prodejce"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Prosím vyberte jednu z možností."
            onInput={inputHandler}
          />
          

          <div className="authentication__buttons">
          <Button pulsating type="submit" disabled={!formState.isValid}>
              Přihlásit se
            </Button>
            
            
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
