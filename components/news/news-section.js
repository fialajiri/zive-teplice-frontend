import NewsList from "./news-list";
const NewsSection = (props) => {
  return (
    <section className="section-news">      
      <NewsList news={props.news} />
    </section>
  );
};

export default NewsSection;
