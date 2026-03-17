import { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import EditPerformer from "../../../components/performers/performer-edit";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { AuthContext } from "../../../context/auth-context";

const EditPerformerPage = () => {
  const [performer, setPerformer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const { performerId } = router.query;

  const isAuth =
    auth.token &&
    (auth.user.role === "admin" || auth.user._id === performerId);

  useEffect(() => {
    if (!router.isReady) return;

    if (!isAuth) {
      router.replace("/");
      return;
    }

    const fetchPerformer = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${performerId}`
        );
        const data = await response.json();
        setPerformer(data.user);
      } catch {
        router.replace("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerformer();
  }, [router.isReady, isAuth, performerId, router]);

  if (isLoading || !performer) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <Fragment>
      <Head>
        <title>Editovat Uživatele</title>
      </Head>
      <EditPerformer performer={performer} />
    </Fragment>
  );
};

export default EditPerformerPage;
