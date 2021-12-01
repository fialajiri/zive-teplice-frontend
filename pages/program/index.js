import Program from "../../components/pages/program/program";
import { getAllUsers } from "../../lib/api-util";

const ProgramPage = (props) => {
  return <Program users={props.users} />;
};

export default ProgramPage;

export const getStaticProps = async () => {
  const users = await getAllUsers();
  const filteredUsers = users.filter((user) => user.role === "user");

  return {
    props: {
      users: filteredUsers,
    },
    revalidate: 60 * 60,
  };
};
