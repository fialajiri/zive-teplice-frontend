import { Fragment } from "react";
import Header from "../components/layout/Header";
import HomePage from "../components/pages/Home/HomePage";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}
