import Image from "next/image";

import { Trash, Pencil, Circle, CalendarCheck, Envelope } from "phosphor-react";
import foodTruck from "../../public/icons/food-truck.svg";
import artist from "../../public/icons/artist.svg";

const PerformerTableItem = (props) => {
  const {
    email,
    name,
    keywords,
    description,
    type,
    image,
    tel,
    active,
    registeredToCurrent,
  } = props.performer;

  const isActiveTrue = active === "true";
  const isregisteredToCurrentTrue = registeredToCurrent === "true";
  const isSeller = type === "prodejce";
  const performerType = isSeller? 'prodejce' : 'umělec';

  const typeImage = (
    <Image
      src={isSeller ? foodTruck : artist}
      className=""
      alt="artist/seller icon"
      height={100}
      width={100}
    />
  );

  return (
    <li className={`performer-table__item ${props.className}`}>
      <div className='performer-table__item__image'>
      <Image  src={image} alt={name} width={100} height={100} />
      </div>
      <h4 className="performer-table__item__name">{name}</h4>
      <a href={`mailto:${email}`} className="performer-table__item__email performer-table__item__icon">
        <Envelope />
        <p className=" performer-table__item__email__helper-text performer-table__item__helper-text">
          {email}
        </p>
      </a>
      <div className="performer-table__item__tel">{tel}</div>
      <div className="performer-table__item__type performer-table__item__actions">
        {typeImage}
        <p className=" performer-table__item__type__helper-text">
        {performerType}
        </p>
      </div>
      

      <div className="performer-table__item__description">{description}</div>

      <div className="performer-table__item__actions  performer-table__item__icon">
        <CalendarCheck
          color={isregisteredToCurrentTrue ? "#a6d637" : "#e65035"}
        />
        <p className=" performer-table__item__helper-text">
          potvrzena účast
        </p>
      </div>
      <div className="performer-table__item__actions  performer-table__item__icon">
        <Circle weight="fill" color={isActiveTrue ? "#a6d637" : "#e65035"} />
        <p className="performer-table__item__helper-text">aktivovat</p>
      </div>
      <div className="performer-table__item__actions  performer-table__item__icon">
        <Pencil color="#a6d637" />
        <p className="performer-table__item__helper-text">editovat</p>
      </div>
      <div className="performer-table__item__actions  performer-table__item__icon">
        <Trash color="#e65035" />
        <p className="performer-table__item__helper-text">smazat</p>
      </div>
    </li>
  );
};

export default PerformerTableItem;
