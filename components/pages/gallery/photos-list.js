import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useState } from "react";
import PhotoModal from "../../ui-elements/photo-modal";
import next from "next";

const PhotoList = (props) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [modalImagePath, setModalImagePath] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const imagePath = `/img/${router.query.year}/`;
  const imagesPaths = props.images.map((image) => imagePath + image);

  const showPhotoModalHandler = (event) => {
    event.preventDefault();
    setShowPhotoModal(true);
    setCurrentIndex(event.target.id);
    setModalImagePath(imagesPaths[event.target.id]);
  };

  const nextImage = () => {
    const nextIndex = parseInt(currentIndex) + 1;
    if (nextIndex >= imagesPaths.length) nextIndex = 0;
    
    setModalImagePath(imagesPaths[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = parseInt(currentIndex) - 1;    
    if (prevIndex < 0) prevIndex = imagesPaths.length - 1;
    setModalImagePath(imagesPaths[prevIndex]);
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
      <div className="photos__list__container">
        <h2 className="heading-secondary photos__list__heading">
          {router.query.year}
        </h2>
        <div className="photos__list">
          {imagesPaths.map((image, index) => (
            <a
              key={index}
              className="photos__list__image"
              onClick={showPhotoModalHandler}
            >
              <Image id={index} src={image} layout="fill" objectFit="cover" />
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PhotoList;
