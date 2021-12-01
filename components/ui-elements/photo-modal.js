import React, { Fragment } from "react";

import Image from "next/image";

import { ArrowLeft, ArrowRight, X } from "phosphor-react";

import Backdrop from "./backdrop";
import { CSSTransition } from "react-transition-group";

const PhotoModalOverlay = (props) => {
  return (
    <div className="photo-modal">
      <div className="photo-modal__header">
        <h2>{props.header}</h2>
      </div>
      <div className="photo-modal__content">
        <figure className="photo-modal__image--container">
          <Image
            src={props.src}
            alt="gallery photo"
            className="photo-modal__image"
            layout="fill"
            objectFit="cover"
          />
        </figure>

        <div className="photo-modal__buttons">
          <button
            className="photo-modal__button photo-modal__button--left"
            onClick={props.prev}
          >
            <ArrowLeft className="photo-modal__icon" weight="bold" />
          </button>
          <button
            className="photo-modal__button photo-modal__button--right"
            onClick={props.next}
          >
            <ArrowRight className="photo-modal__icon" weight="bold" />
          </button>
          <button
            className="photo-modal__button photo-modal__button--close"
            onClick={props.onCancel}
          >
            <X className="photo-modal__icon" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PhotoModal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onClear} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="photo-modal"
      >
        <PhotoModalOverlay
          src={props.src}
          width={props.width}
          height={props.height}
          prev={props.prev}
          next={props.next}
          onCancel={props.onClear}
          show={props.show}
        ></PhotoModalOverlay>
      </CSSTransition>
    </Fragment>
  );
};

export default PhotoModal;
