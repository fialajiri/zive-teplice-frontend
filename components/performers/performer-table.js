import PerformerTableItem from "./performet-table-item";

const PerformerTable = (props) => {
  return (
    <ul className="performer-table__list">
      {props.performers.map((performer, index) => (
        <PerformerTableItem
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
