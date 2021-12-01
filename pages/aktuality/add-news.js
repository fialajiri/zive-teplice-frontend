import AddNews from "../../components/news/news-add";

const AddNewsPage = (props) => {
  return <AddNews />;
};

export default AddNewsPage;

AddNewsPage.requireAuth = true;
