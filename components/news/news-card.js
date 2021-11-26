import Button from '../ui-elements/button'

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
      <Button unstyled link={`/aktuality/${props.newsItem.id}`} className="news__list__item__title-button">
        {props.newsItem.title}
      </Button>
      <div className="news__list__item__abstract">
        {props.newsItem.abstract}
      </div>
    </li>
  );
};

export default NewsCard;
