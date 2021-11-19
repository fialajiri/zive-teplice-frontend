import NewsTableItem from "./news-table-item";

const NewsTable = (props) => {

    const sortedNews = props.news.sort((a, b) => new Date(b.date) - new Date(a.date));
  

  return (
    <ul className="news-table__list">
      {sortedNews.map((newsItem, index) => (
        <NewsTableItem
          key={newsItem.id}
          newsItem={newsItem}
          className={`news-table__item--${index % 2 === 0 ? "even" : "odd"}`}
        />
      ))}
    </ul>
  );
};

export default NewsTable;
