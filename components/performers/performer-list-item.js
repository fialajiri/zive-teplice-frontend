import Image from "next/image";

const PerformerItem = ({ email, name, keywords, description, type, image }) => {
  
  return (
    <li className="performer__item">
      <Image src={image} alt={name} width={250} height={250} />
      <div className="performer__content">
        <div className="performer__summary">
          <h4 className="performer__title">{name}</h4>
          <div className="performer__email">{email}</div>         
        </div>
        <div className="paragraph performer__description">{description}</div>
      </div>
    </li>
  );
};

export default PerformerItem;
