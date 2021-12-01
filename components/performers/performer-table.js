import { Fragment, useEffect, useState } from "react";
import PerformerTableItem from "./performet-table-item";
import PerformerSearch from "./performer-search";

const PerformerTable = (props) => {  
  const [loadedPerformers, setLoadedPerformers] = useState(props.performers)
  const [filteredPerformers, setFilteredPerformers] = useState(props.performers)

  const findEventsHandler = (request, type) => {
    let filtered = [];

    loadedPerformers.forEach(element => {
      if (request === '' && type !== ''){
        if (element.type === type) {
          filtered.push(element);
        }
      } else if ( request !== "" && type === ''){
        if (element.request === request){
          filtered.push(element)
        }
      } else if (request === "" && type === ""){
        filtered.push(element)
      } else {
        if (element.request === request && element.type === type){
          filtered.push(element)
        }
      }
    })

    setFilteredPerformers(filtered)
  }
  

  return (
    <Fragment>
      <div>
        <PerformerSearch onSearch={findEventsHandler} />
      </div>

    <ul className="performer-table__list">
      {filteredPerformers.map((performer, index) => (
        <PerformerTableItem
        onUpdate={props.onUpdate}
        onDelete={props.onDelete}
        index={index}
        key={performer.id}
        performer={performer}
        className={`performer-table__item--${
          index % 2 === 0 ? "even" : "odd"
        }`}
        />
        ))}
    </ul>
        </Fragment>
  );
};

export default PerformerTable;
