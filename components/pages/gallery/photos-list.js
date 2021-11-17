import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useState } from "react";
import PhotoModal from "../../ui-elements/photo-modal";

const PhotoList = (props) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [modalImagePath, setModalImagePath] = useState("");
  const router = useRouter();

  const imagePath = `/img/${router.query.year}`;

  const showPhotoModalHandler = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    setShowPhotoModal(true);
    setModalImagePath(event.target.id);
  };

  const closePhotoModalHandler = () => {
    setShowPhotoModal(false);
  };

  return (
    <Fragment>
      <PhotoModal
        path={modalImagePath}
        show={showPhotoModal}
        onClear={closePhotoModalHandler}
      />
      <div className="photos__list__container">
        <h2 className="heading-secondary photos__list__heading">
          {router.query.year}
        </h2>
        <div className="photos__list">
          {props.images.map((image, index) => (
            <a
              id={`${imagePath}/${image}`}
              key={index}
              className="photos__list__image"
              onClick={showPhotoModalHandler}
            >
              <Image
                id={`${imagePath}/${image}`}
                src={`${imagePath}/${image}`}
                layout="fill"
                objectFit="cover"
              />
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PhotoList;
