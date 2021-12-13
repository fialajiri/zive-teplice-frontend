import { useContext } from "react";
import { AuthContext } from "../../../context/auth-context";
import Image from "next/image";
import Link from "next/link";
import Button from "../../ui-elements/button";

const Gallery = (props) => {
  const auth = useContext(AuthContext)
  

  const isAdmin = (auth.user && auth.user.role === 'admin')

  return (
    <div className="gallery__container home__container">
      <h2 className="heading-secondary gallery__heading">Galerie</h2>
      <div className="gallery__years">
        {props.galleries.map((gallery, index) => (
          <Link key={index} href={`/gallery/${gallery.id}`}>
            <a className="gallery__item">
              <div className="gallery__item__year">{gallery.name}</div>
              <Image
                src={gallery.featuredImage.imageUrl}
                width={300}
                height={300}
                alt={gallery.name}
                quality='50'
              />
            </a>
          </Link>
        ))}
      </div>
     {isAdmin && <Button size='big' className="gallery__button" link="gallery/create">Vytvoř galerii</Button>}
    </div>
  );
};

export default Gallery;
