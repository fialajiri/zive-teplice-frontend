import router from "next/router";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth-context";

import LoadingSpinner from "../../ui-elements/loading-spinner";

const AuthGuard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user) {
      let isValid = false;

      if (props.admin) {
        if (auth.user.role === "admin") {
          isValid = true;
        }
      } else {
        if (auth.user.id) {
          isValid = true;
        }
      }

      if (!isValid && isValid !== undefined) {
        router.push("/login");
      } else if (isValid) {
        setIsLoading(false);
      }
    }
  }, [auth.user, props.admin]);

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  if (!isLoading && auth.token) {
    return <Fragment>{props.children}</Fragment>;
  }

  return null;
};

export default AuthGuard;
