import { Fragment, useEffect, useState, useContext, useCallback } from "react";
import Image from "next/image";
import Button from "../../ui-elements/button";
import { useHttpClient } from "../../../hooks/http-hook";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import { AuthContext } from "../../../context/auth-context";

const ShowProgram = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [currentEvent, setCurrentEvent] = useState(null);
  const auth = useContext(AuthContext);

  const getCurrentEvent = useCallback( async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/events/current`,
        "GET",
        JSON.stringify(),
        {
          "Content-Type": "application/json",
        }
      );
      setCurrentEvent(responseData.event);
    } catch (err) {
      console.log(err);
    }
  },[sendRequest]);

  useEffect(() => {
    getCurrentEvent();
  }, [getCurrentEvent]);

  const createMarkup = (html) => {
    return { __html: html };
  };

  if (!currentEvent) {
    return <LoadingSpinner asOverlay />;
  }

  if (!currentEvent.program) {
    return (
      <p className="program-tab__body__no-program">
        Pro tuto událost zatím není vytvořený program.
      </p>
    );
  }

  return (
    <Fragment>
      <div className="program-tab__body">
        <div className="program-tab__body__title">
          {currentEvent.program.title}
        </div>
        <div className="program-tab__body__container">
          <figure className="program-tab__body__image">
            <Image
              src={currentEvent.program.image.imageUrl}
              layout="fill"
              objectFit="cover"
              alt='doprovodný obrázek k programu'
            />
          </figure>
          <div
            className="program-tab__body__message"
            dangerouslySetInnerHTML={createMarkup(currentEvent.program.message)}
          ></div>
        </div>
        <div className="program-tab__body__actions">
          {currentEvent.program &&
            (auth.user && auth.user.role) === "admin" && (
              <Button link="program/edit">Editovat Program</Button>
            )}
        </div>
      </div>
    </Fragment>
  );
};

export default ShowProgram;
