const NewsCard = (props) => {
    
  let humanReadableDate = new Date(props.newsItem.createdAt).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className="news__list__item">
      <div className="news__list__item__date">
          <span className="news__list__item__word">Aktualita</span>
        {` z ${humanReadableDate}`}
      </div>
      <div className="news__list__item__title">
        {props.newsItem.title}
      </div>
      <div className="news__list__item__abstract">
        {props.newsItem.abstract}
      </div>
    </li>
  );
};

export default NewsCard;
