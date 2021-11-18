import PerformerItem from "./performer-list-item";

const PerformerList = ({ performers, type }) => {
    
  const performersToList = performers.filter(performer => performer.type === type);

  return (
    <ul className="performer__list">
      {performersToList.map((performer) => (
        <PerformerItem
          key={performer.id}
          email={performer.email}
          name={performer.name}
          keywords={performer.keywords}
          description={performer.description}
          image={performer.image}
        />
      ))}
    </ul>
  );
};

export default PerformerList;
