import { useRef } from "react";

const PerformerSearch = props => {
    const requestInputRef = useRef();
    const typeInputhRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const selectedRequest = requestInputRef.current.value;
        const selectedType = typeInputhRef.current.value;

        props.onSearch(selectedRequest, selectedType)
    }

    return (
        <form className="news__search-form">
        <div className="news__search-form__controls">
          <div className="news__search-form__control">
            <label htmlFor="request">Přihláška</label>
            <select id="request" ref={requestInputRef} onChange={submitHandler}>
              <option></option>
              <option value="notsend">nepřihlášen</option>
              <option value="confirmed">potvrzen</option>
              <option value="rejected">odmítnout</option>
              <option value="pending">čeká na potvrzení</option>
            </select>
          </div>
          <div className="news__search-form__control">
            <label htmlFor="type">Typ</label>
            <select id="type" ref={typeInputhRef} onChange={submitHandler}>
              <option></option>
              <option value="prodejce">prodejce</option>
              <option value="umělec">umělec</option>              
            </select>
          </div>
        </div>
      </form> 
    )
}

export default PerformerSearch;