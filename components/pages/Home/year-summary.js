import SummaryText from "./summary-text";
import SummaryGallery from "./summary-gallery";


const YearSummary = (props) => {
  return (
    <section
      className={`section__summary ${
        props.flip === true ? "section__summary--flip" : ""
      }`}
    >
      <h2 className="heading-forth u-margin-bottom-medium section__summary__heading">{props.heading}</h2>

      <SummaryText year={props.year} flip={props.flip} />
      <SummaryGallery year={props.year} flip={props.flip} />
    </section>
  );
};

export default YearSummary;
