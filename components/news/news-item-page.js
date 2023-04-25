import Image from "next/image";
import { createHumanReadableDate } from "../../lib/helpers";

const NewsItemPage = ({ newsItem }) => {
  const humanReadableDate = createHumanReadableDate(newsItem.createdAt);

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="news-item">
      <div className="news-item__container">
        <div className="news-item__title heading-secondary">
          {newsItem.title}
        </div>
        <div className="news-item__date">{humanReadableDate}</div>       
        <figure className="news-item__image">
          <Image className='news-item__img' src={newsItem.image.imageUrl} layout='fill'
            objectFit='cover' alt={newsItem.title}/>
        </figure>
        <div
          className="news-item__message"
          dangerouslySetInnerHTML={createMarkup(newsItem.message)}
        ></div>
      </div>
    </div>
  );
};

export default NewsItemPage;
