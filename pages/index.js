import { Fragment } from "react";
import Header from "../components/layout/header/header";
import HomePage from "../components/pages/Home/home-page";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HomePage />
    </Fragment>
  );
}
