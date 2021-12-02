import InsertProgram from "../../components/pages/program/program-insert";
import AuthGuard from "../../components/pages/auth/auth-guard";

const InsertProgramPage = () => {
  return <InsertProgram />;
};

export default InsertProgramPage;

InsertProgramPage.requireAuth = true;
InsertProgramPage.requireAdmin = true;
