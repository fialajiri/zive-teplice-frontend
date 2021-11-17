import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Gallery = (props) => {
  console.log(props);
  return (
    <div className="gallery__container">
      <h2 className="heading-secondary gallery__heading">Galerie</h2>
      <div className="gallery__years">
        {props.images.map((element, index) => (
          <Link key={index} href={`/gallery/${element.year}`}>
            <a className="gallery__item">
              <div className="gallery__item__year">{element.year}</div>
              <Image
                src={`/img/${element.year}/${element.images[0]}`}
                width={300}
                height={300}
                alt={`obrázek z roku ${element.year}`}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
