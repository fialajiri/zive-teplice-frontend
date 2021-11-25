import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";

import Input from "../../../../form-elements/input";
import LoadingSpinner from "../../../../ui-elements/loading-spinner";
import ErrorModal from "../../../../ui-elements/error-modal";
import Button from "../../../../ui-elements/button";
import NotificationContext from "../../../../../context/notification-context";

import { VALIDATOR_MINLENGTH } from "../../../../../validators/validators";

import { useForm } from "../../../../../hooks/form-hook";
import { useHttpClient } from "../../../../../hooks/http-hook";

const ResetPasswordStepTwo = (props) => {
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitFormHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Odesílám...",
      message: "Odesílám požadavek.",
      status: "pending",
    });
    event.preventDefault();

    try {
      console.log("sendign");
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/reset/${props.token}`,
        "POST",
        JSON.stringify({
          password: formState.inputs.password.value,
          confirmPassword: formState.inputs.confirmPassword.value,
          token: props.token,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(responseData);

      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Změna hesla proběhla úspěšně. Nyní se můžete přihlásit.",
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
      <div className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Zapomenuté heslo</h2>

        <form onSubmit={submitFormHandler}>
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

          <div className="authentication__buttons">
            <Button pulsating type="submit" disabled={!formState.isValid}>
              Změnit heslo
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ResetPasswordStepTwo;
