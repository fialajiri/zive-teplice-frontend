import Button from "../ui-elements/button";

const NewsTableTail = props => {
    return (
        <div className='news__table-tail__container'>
            
          <Button link='/aktuality/add-news' className='news__table-head__button'>Přidej Aktualitu</Button>
        </div>
      );
}

export default NewsTableTail;