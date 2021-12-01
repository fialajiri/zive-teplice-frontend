import { useRef } from "react";


const NewsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className="news__search-form">
      <div className="news__search-form__controls">
        <div className="news__search-form__control">
          <label htmlFor="year">Rok</label>
          <select id="year" ref={yearInputRef} onChange={submitHandler}>
            <option></option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="news__search-form__control">
          <label htmlFor="month">Měsíc</label>
          <select id="month" ref={monthInputRef} onChange={submitHandler}>
            <option></option>
            <option value="1">Leden</option>
            <option value="2">Únor</option>
            <option value="3">Březen</option>
            <option value="4">Duben</option>
            <option value="5">Květen</option>
            <option value="6">Červen</option>
            <option value="7">Červenec</option>
            <option value="8">Srpen</option>
            <option value="9">Září</option>
            <option value="10">Říjen</option>
            <option value="11">Listopad</option>
            <option value="12">Prosinec</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default NewsSearch;
