import { Fragment, useContext } from "react";
import { useRouter } from "next/router";

import Input from "../../../../form-elements/input";
import LoadingSpinner from "../../../../ui-elements/loading-spinner";
import ErrorModal from "../../../../ui-elements/error-modal";
import Button from "../../../../ui-elements/button";
import NotificationContext from "../../../../../context/notification-context";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../../../validators/validators";

import { useForm } from "../../../../../hooks/form-hook";
import { useHttpClient } from "../../../../../hooks/http-hook";
import { AuthContext } from "../../../../../context/auth-context";

const ChangePassword = (props) => {
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext)

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
      newPassword: {
        value: "",
        isValid: false,
      },
      confirmNewPassword: {
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
        `${process.env.REACT_APP_BACKEND_URL}/auth/changePassword`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          newPassword: formState.inputs.newPassword.value,
          confirmNewPassword: formState.inputs.confirmNewPassword.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
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



  return <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="heading-secondary">Změna hesla</h2>

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
            label="Staré heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zadejte platné heslo."
            onInput={inputHandler}
          />
           <Input
            element="input"
            id="newPassword"
            type="password"
            label="Nové heslo"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Prosím zadejte platné heslo o minimálně 8 znacích."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="confirmNewPassword"
            type="password"
            label="Potvrďte nové heslo"
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
    </Fragment>;
};

export default ChangePassword;
