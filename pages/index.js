import HomePage from '../components/pages/home/home-page'
import { getAllNews } from "../lib/api-util";

const Home = (props) => {
  return <HomePage news={props.news} />;
};

export default Home;

export const getStaticProps = async () => {
  const news = await getAllNews();

  return { props: { news: news }, revalidate: 60 * 60 };
};
