import ChangePassword from "../../../../components/pages/admin/password/change/change-password";

const ChangePasswordPage = () => {
  return <ChangePassword />;
};

export default ChangePasswordPage;

ChangePasswordPage.requireAuth = true;
