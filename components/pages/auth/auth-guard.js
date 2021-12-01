import router from "next/router";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth-context";

import LoadingSpinner from "../../ui-elements/loading-spinner";

const AuthGuard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);

  useEffect(() => {
    let isAuth;
    if (props.admin) {
      isAuth = auth.user && auth.user.role === "admin";
    } else {
      isAuth = auth.user;
    }

    if (!isAuth) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [auth.user,  props.admin]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoading && auth.user) {
    return <Fragment>{props.children}</Fragment>;
  }

  return null;
};

export default AuthGuard;
