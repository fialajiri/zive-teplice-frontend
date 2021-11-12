import { Fragment } from "react";
import Header from "../components/layout/header/header";
import HomePage from "../components/pages/Home/home-page";
import YearSummary from "../components/pages/Home/year-summary";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      
    </Fragment>
  );
}
