import { useContext } from "react";

import GeneralAdmin from "../../components/pages/admin/general-admin";
import PerformerAdmin from "../../components/pages/admin/performer-admin";

import { AuthContext } from "../../context/auth-context";

const AdminPage = () => {
  const auth = useContext(AuthContext);

  console.log(auth)
  console.log(auth.userRole)
  console.log(auth.token)

  if (auth.userRole === "admin") {
    return <GeneralAdmin />;
  } else if (auth.userRole === "user") {
    return <PerformerAdmin />;
  }

  return <div>Hello</div>
};

export default AdminPage;
