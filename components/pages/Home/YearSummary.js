import SummaryText from "./SummaryText";
import SummaryGallery from "./SummaryGallery";
import { Fragment } from "react";

const YearSummary = (props) => {
  return (
    <Fragment>
      <h2 className="heading-forth u-margin-bottom-medium">{props.heading}</h2>
      <section className="section__summary">
        <SummaryText year={props.year} flip={props.flip} />
        <SummaryGallery year={props.year} flip={props.flip} />
      </section>
    </Fragment>
  );
};

export default YearSummary;
