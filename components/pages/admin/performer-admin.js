import { Fragment, useCallback, useContext, useEffect } from "react";

import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";
import TabContainer from "../../ui-elements/tabs/tab-container";
import TabHead from "../../ui-elements/tabs/tab-head";
import TabButton from "../../ui-elements/tabs/tab-button";
import TabBody from "../../ui-elements/tabs/tab-body";

import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";



const PerformerAdmin = (props) => {
  const auth = useContext(AuthContext);
  
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const fetchUserData = useCallback(async () => {
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/me`,
        "GET",
        JSON.stringify(),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      auth.setUser(
        responseData.username,
        responseData.email,
        responseData.role
      );
    } catch (err) {
      console.log(err);
    }
  }, [auth.setUser, sendRequest]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const logoutHandler = () => {
    auth.logout(auth.token);
  };

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  if (!isLoading) {
    return (
      <Fragment>
        <div>{auth.userName}</div>
        <button onClick={logoutHandler}> odhlasit</button>
      </Fragment>
    );
  }
};

export default PerformerAdmin;

