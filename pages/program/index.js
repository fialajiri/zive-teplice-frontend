import { Fragment } from "react";
import Head from "next/head";
import Program from "../../components/pages/program/program";
import { getAllUsers } from "../../lib/api-util";

const ProgramPage = (props) => {
  return (
    <Fragment>
       <Head>
        <title>Program</title>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Živé Teplice, Zažít město jinak, program, kultura, Teplice, trhy, jídlo a pití"/>
        <meta name="description" content="Program na nejbližší událost Živé Teplice"/>
      </Head>
      <Program users={props.users} />
    </Fragment>
  );
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
