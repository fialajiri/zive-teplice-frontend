import { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";

import Input from "../../../../form-elements/input";
import LoadingSpinner from "../../../../ui-elements/loading-spinner";
import ErrorModal from "../../../../ui-elements/error-modal";
import Button from "../../../../ui-elements/button";
import NotificationContext from "../../../../../context/notification-context";

import { VALIDATOR_EMAIL } from "../../../../../validators/validators";

import { useForm } from "../../../../../hooks/form-hook";
import { useHttpClient } from "../../../../../hooks/http-hook";

const ResetPasswordStepOne = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
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
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/reset`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(responseData);

      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message:
          "Odeslaní proběhlo úspěšně, zkontolujete svůj email pro další instrukce.",
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
      <div className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Zapomenuté heslo</h2>

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

          <div className="authentication__buttons">
            <Button pulsating type="submit" disabled={!formState.isValid}>
              Resetovat heslo
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ResetPasswordStepOne;
