import HeroGallery from "./hero-gallery.js";
import Hero from "./hero.js";
import NewsSection from "../../news/news-section.js";
import YearSummary from "./year-summary";
import Support from "./support.js";

const HomePage = (props) => {
  return (
    <div className="home__container">
      <HeroGallery />
      <NewsSection news={props.news} />
      <Hero />
      <Support />
      <YearSummary year="2021-muzeum" heading="Živé Teplice 2021 v Muzeu" />
      <YearSummary year={2021} heading="Živé Teplice 2021" />
      <YearSummary year={2020} heading="Živé Teplice 2020" />
      <YearSummary year={2019} heading="Živé Teplice 2019" />
      <YearSummary year={2018} heading="Živé Teplice 2018" />
      <YearSummary year={2017} heading="Živé Teplice 2017" />
      <YearSummary year={2016} heading="Živé Teplice 2016" />
    </div>
  )
};

export default HomePage;
