import { Fragment, useState } from "react";
import NewsTableHead from "./news-table-head";
import NewsTableItem from "./news-table-item";
import NewsTableTail from "./news-table-tail";

const sortNews = (newsArray) => {
  return newsArray.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

const NewsTable = (props) => {
  const [loadedNews, setLoadedNews] = useState(sortNews(props.news));
  const [filteredNews, setFilteredNews] = useState(sortNews(props.news));

  const findEventsHandler = (year, month) => {
    let filtered = [];

    loadedNews.forEach((element) => {
      if (month === "" && year !== "") {
        if (new Date(element.createdAt).getFullYear() == year) {
          filtered.push(element);
        }
      } else if (year === "" && month !== "") {
        if (new Date(element.createdAt).getMonth() + 1 == month) {
          filtered.push(element);
        }
      } else if (month === "" && year === "") {
        filtered.push(element);
      } else {
        if (
          new Date(element.createdAt).getMonth() + 1 == month &&
          new Date(element.createdAt).getFullYear() == year
        ) {
          filtered.push(element);
        }
      }
    });

    setFilteredNews(filtered);
  };

  return (
    <Fragment>
      <NewsTableHead onSearch={findEventsHandler} />
      <ul className="news-table__list">
        {filteredNews.map((newsItem, index) => (
          <NewsTableItem
            key={newsItem.id}
            newsItem={newsItem}
            className={`news-table__item--${index % 2 === 0 ? "even" : "odd"}`}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <NewsTableTail />
    </Fragment>
  );
};

export default NewsTable;
