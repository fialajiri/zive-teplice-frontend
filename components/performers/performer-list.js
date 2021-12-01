import PerformerItem from "./performer-list-item";

const PerformerList = ({ performers, type }) => {
    
  const performersToList = performers.filter(performer => (performer.type === type && performer.request === 'confirmed'));

  return (
    <ul className="performer__list">
      {performersToList.map((performer) => (
        <PerformerItem
          key={performer.id}
          email={performer.email}
          name={performer.name}          
          description={performer.description}
          image={performer.image.imageUrl}
        />
      ))}
    </ul>
  );
};

export default PerformerList;
