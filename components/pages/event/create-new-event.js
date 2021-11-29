import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import NotificationContext from "../../../context/notification-context";

import Button from "../../ui-elements/button";
import Input from "../../form-elements/input";
import ErrorModal from "../../ui-elements/error-modal";
import LoadingSpinner from "../../ui-elements/loading-spinner";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from "../../../validators/validators";

const CreateNewEvent = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      year: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = async (event) => {
    notificationCtx.showNotification({
      title: "Vytvářím...",
      message: "Vytvářím nový event. Chvilku strpení.",
      status: "pending",
    });
    event.preventDefault();

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/events",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          year: formState.inputs.year.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      notificationCtx.showNotification({
        title: "Skvělé!!!",
        message: "Nový event byl úspěšně vytvořen",
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
        <h2 className="heading-secondary"> Vytvoř event</h2>
        <hr />
        <form className="add-news__form" onSubmit={placeSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="title"
            element="input"
            label="Název"
            type="text"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(100)]}
            errorText="Název musí mít minimálně 10 a maximálně 100 znaků."
            onInput={inputHandler}
          />
          <Input
            id="year"
            element="input"
            label="Rok"
            type="text"
            validators={[VALIDATOR_MINLENGTH(4), VALIDATOR_MAXLENGTH(4)]}
            errorText="Rok musí mít 4 číslice"
            onInput={inputHandler}
          />

          <Button className="add-news__button" disabled={!formState.isValid}>
            Vytvoř event
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateNewEvent;
