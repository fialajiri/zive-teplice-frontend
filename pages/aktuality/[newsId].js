import { getNews } from "../../lib/dummy_data";
import UpdateNewsItem from "../../components/pages/news/update-news-item";

const EditNewsItem = ({loadedNewsItem}) => {

    return (
        <UpdateNewsItem newsItem={loadedNewsItem} />
    )

}

export default EditNewsItem;

export const getStaticProps = async (context) => {
    const { params } = context;
  
    const newsItemId = params.newsId;

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/news`)
     
  
    const newsItem = await getNews().filter(newsItem => newsItem.id === newsItemId);
  
    return {
      props: {
        loadedNewsItem: newsItem[0],
      },
      revalidate: 60 * 60,
    };
  };



export const getStaticPaths = async () => {

    const allNews = getNews()

    const pathWithParams = allNews.map(newsItem => ({ params: { newsId: newsItem.id } }));
  
    return {
      paths: pathWithParams,
      fallback: false,    
    };
  };