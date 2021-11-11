import Hero from "./Hero";
import YearSummary from "./YearSummary";

const HomePage = (props) => {
  return (
    <div className="home__container">
      <Hero />
      <YearSummary year={2021} heading='Živé Teplice 2021' />
      <YearSummary year={2020} flip={true} heading='Živé Teplice 2020'/>
    </div>
  );
};

export default HomePage;
