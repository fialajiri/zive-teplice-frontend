import Image from "next/image";
import { Fragment, useState } from "react";
import PhotoModal from "../../ui-elements/photo-modal";


const PhotoList = ({gallery}) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [modalImagePath, setModalImagePath] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  

 
  const showPhotoModalHandler = (event) => {
    event.preventDefault();
    setShowPhotoModal(true);
    setCurrentIndex(event.target.id);
    setModalImagePath(gallery.images[event.target.id].imageUrl);
  };

  const nextImage = () => {
    const nextIndex = parseInt(currentIndex) + 1;
    if (nextIndex >= gallery.images.length) nextIndex = 0;
    
    setModalImagePath(gallery.images[nextIndex].imageUrl);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = parseInt(currentIndex) - 1;    
    if (prevIndex < 0) prevIndex = gallery.images.length - 1;
    setModalImagePath(gallery.images[prevIndex],imageUrl);
    setCurrentIndex(prevIndex);
  };

  const closePhotoModalHandler = () => {
    setShowPhotoModal(false);
  };

  return (
    <Fragment>
      <PhotoModal
        src={modalImagePath}
        show={showPhotoModal}
        onClear={closePhotoModalHandler}
        next={nextImage}
        prev={prevImage}
      />
      <div className="photos__list__container home__container">
        <h2 className="heading-secondary photos__list__heading">
          {gallery.name}
        </h2>
        <div className="photos__list">
          {gallery.images.map((image, index) => (
            <a
              key={index}
              className="photos__list__image"
              onClick={showPhotoModalHandler}
            >
              <Image id={index} src={image.imageUrl} layout="fill" objectFit="cover" alt='obrázek v galerii' />
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PhotoList;
