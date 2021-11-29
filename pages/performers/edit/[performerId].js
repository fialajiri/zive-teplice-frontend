import { useContext, useEffect, useState } from "react";
import router, { useRouter } from "next/router";

import EditPerformer from "../../../components/performers/performer-edit";
import { getAllUsers, getUserById } from "../../../lib/api-util";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { AuthContext } from "../../../context/auth-context";

const EditPerformerPage = ({ loadedPerformer }) => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useContext(AuthContext);
  const router = useRouter()

  // there news to be an userId in auth oh oh oh
  const isAuth = auth.token && (auth.user.role === "admin" || auth.user._id === router.query.performerId)
 
  useEffect(() => {
    if (!isAuth) {
      console.log("redirecting");
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [isAuth]);

  if (isLoading || !loadedPerformer) {
    return <LoadingSpinner asOverlay />;
  }

  return <EditPerformer performer={loadedPerformer} />;
};

export default EditPerformerPage;

export const getStaticProps = async (context) => {
  const { params } = context;

  const performerId = params.performerId;


  const performer = await getUserById(performerId);

  return {
    props: {
      loadedPerformer: performer,
    },
    revalidate: 30,
  };
};

// export const getServerSideProps = async (context) => {
//   const { params } = context;

//   const performerId = params.performerId;

//   const performer = await getUserById(performerId);

//   if (!performer) {
//     return {
//       redirect: {
//         destination: "/admin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       loadedPerformer: performer,
//     }
    
//   };
// };

export const getStaticPaths = async () => {
  const users = await getAllUsers();
  const ids = users.map((user) => user.id);

  const pathsWithParams = ids.map((id) => ({ params: { performerId: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};
