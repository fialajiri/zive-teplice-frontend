import { Plus, PlusCircle } from "phosphor-react";
import Button from "../ui-elements/button";

const NewsTableHead = (props) => {
  return (
    <div className='news__table-head__container'>
        
      <Button link='/aktuality/add-news' className='news__table-head__button'>Přidej Aktualitu</Button>
    </div>
  );
};

export default NewsTableHead;
