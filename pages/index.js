import { Fragment } from "react";
import Header from "../components/layout/Header";
import HomePage from "../components/pages/Home/HomePage";
import YearSummary from "../components/pages/Home/YearSummary";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      
    </Fragment>
  );
}
