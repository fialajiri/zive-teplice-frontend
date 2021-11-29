import { useEffect, useState } from "react";
import PerformerTableItem from "./performet-table-item";

const PerformerTable = (props) => {  
  

  return (
    <ul className="performer-table__list">
      {props.performers.map((performer, index) => (
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
  );
};

export default PerformerTable;
