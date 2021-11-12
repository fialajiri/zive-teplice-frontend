import Image from "next/image";

const HeaderGallery = props => {

    return (
        <div className="header__gallery" ref={props.containerRef}>
        <figure className="header__gallery__item header__gallery__item--1">
          <Image
            src="/img/header/img-1.jpg"
            alt="Gallery image 1"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <figure className="header__gallery__item header__gallery__item--2">
          <Image
            src="/img/header/img-2.jpg"
            alt="Gallery image 2"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'

          />
        </figure>
        <figure className="header__gallery__item header__gallery__item--3">
          <Image
            src="/img/header/img-3.jpg"
            alt="Gallery image 3"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--4">
          <Image
            src="/img/header/img-4.jpg"
            alt="Gallery image 4"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--5">
          <Image
            src="/img/header/img-5.jpg"
            alt="Gallery image 4"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--6">
          <Image
            src="/img/header/img-6.jpg"
            alt="Gallery image 4"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--7">
          <Image
            src="/img/header/img-7.jpg"
            alt="Gallery image 4"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--8">
          <Image
            src="/img/header/img-8.jpg"
            alt="Gallery image 8"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--9">
          <Image
            src="/img/header/img-9.jpg"
            alt="Gallery image 9"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--10">
          <Image
            src="/img/header/img-10.jpg"
            alt="Gallery image 10"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--11">
          <Image
            src="/img/header/img-11.jpg"
            alt="Gallery image 11"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--12">
          <Image
            src="/img/header/img-12.jpg"
            alt="Gallery image 12"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="header__gallery__item header__gallery__item--13">
          <Image
            src="/img/header/img-13.jpg"
            alt="Gallery image 13"
            className="header__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>
      </div>
    )

}

export default HeaderGallery;