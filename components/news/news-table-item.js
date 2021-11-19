import { Trash, Pencil, Circle, CalendarCheck, Envelope } from "phosphor-react";

import Button from '../ui-elements/button'


const NewsTableItem = (props) => {
  const { title, date, abstract, message,id } = props.newsItem;

  let humanReadableDate = new Date(props.newsItem.date).toLocaleDateString(
    "cs-CZ",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <li className={`news-table__item ${props.className}`}>
      <h4 className="news-table__item__title">{title}</h4>
      <time className="news-table__item__date">{humanReadableDate}</time>
      <p className="news-table__item__abstract">{abstract}</p>
     

      <Button unstyled link={`aktuality/${id}`} className="news-table__item__actions  news-table__item__icon">
        <Pencil color="#a6d637" />
        <p className="news-table__item__helper-text">editovat</p>
      </Button>
      <Button unstyled className="news-table__item__actions  news-table__item__icon">
        <Trash color="#e65035" />
        <p className="news-table__item__helper-text">smazat</p>
      </Button>
    </li>
  );
};

export default NewsTableItem;
