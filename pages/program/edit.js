import EditProgram from "../../components/pages/program/program-edit";

const EditProgramPage = () => {
  return <EditProgram />;
};

export default EditProgramPage;

EditProgramPage.requireAuth = true;
EditProgramPage.requireAdmin = true;