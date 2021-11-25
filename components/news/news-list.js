import NewsCard from "./news-card";

const NewsList = (props) => {
  const sortedNews = props.news.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <ul className="news__list">
      {sortedNews.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
