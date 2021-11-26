import NewsSearch from "./news-search";


const NewsTableHead = (props) => {
  return (
    <div className='news__table-head__container'>
        
      <NewsSearch onSearch={props.onSearch} />
    </div>
  );
};

export default NewsTableHead;
