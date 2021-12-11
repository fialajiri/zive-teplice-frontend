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

const Auth = () => {
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
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login(responseData.token, responseData.user);

      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Přihlašení proběhlo úspěšně",
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

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Přihlašte se, prosím.</h2>

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
            id="password"
            type="password"
            label="Heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zadejte platné heslo."
            onInput={inputHandler}
          />
          <div className="authentication__buttons">
            <Button  className='authentication__buttons__submit' pulsating type="submit" disabled={!formState.isValid}>
              Přihlásit se
            </Button>

            <Button size='small' pulsating link="/register" inverse>
              Registrovat
            </Button>

            <Button  size='small'  pulsating link="/admin/password/reset" inverse>
              Zapomenuté heslo
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
