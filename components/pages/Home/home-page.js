import HeroGallery from './hero-gallery.js';
import Hero from './hero.js'
import NewsSection from '../../news/news-section.js';
import YearSummary from "./year-summary";
import LoadingSpinner from '../../ui-elements/loading-spinner.js';

const HomePage = (props) => {
  return (
    <div className="home__container">
      {/* <LoadingSpinner  asOverlay logo/> */}
      <HeroGallery />
      <NewsSection />
      <Hero />
      <YearSummary year={2021} heading='Živé Teplice 2021' />
      <YearSummary year={2020} flip={true} heading='Živé Teplice 2020'/>
      <YearSummary year={2019} heading='Živé Teplice 2019' />
      <YearSummary year={2018} flip={true} heading='Živé Teplice 2018' />
      <YearSummary year={2017} heading='Živé Teplice 2017' />
      <YearSummary year={2016} flip={true} heading='Živé Teplice 2016' />
    </div>

  );
};

export default HomePage;
