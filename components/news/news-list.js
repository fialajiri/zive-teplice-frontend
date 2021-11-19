import NewsCard from "./news-card";
import { getNews } from "../../lib/dummy_data";

const NewsList = () => {
  const sortedNews = getNews().sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <ul className="news__list">
      {sortedNews.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
