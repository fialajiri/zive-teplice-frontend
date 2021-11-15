import Image from "next/image";

const HeroGallery = props => {

    return (
        <div className="hero__gallery" ref={props.containerRef}>
        <figure className="hero__gallery__item hero__gallery__item--1">
          <Image
            src="/img/hero/img-1.jpg"
            alt="Hero gallery image 1"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <figure className="hero__gallery__item hero__gallery__item--2">
          <Image
            src="/img/hero/img-2.jpg"
            alt="Hero gallery image 2"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'

          />
        </figure>
        <figure className="hero__gallery__item hero__gallery__item--3">
          <Image
            src="/img/hero/img-3.jpg"
            alt="Hero gallery image 3"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--4">
          <Image
            src="/img/hero/img-4.jpg"
            alt="Hero gallery image 4"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--5">
          <Image
            src="/img/hero/img-5.jpg"
            alt="Hero gallery image 5"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--6">
          <Image
            src="/img/hero/img-6.jpg"
            alt="Hero gallery image 6"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--7">
          <Image
            src="/img/hero/img-7.jpg"
            alt="Hero gallery image 7"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--8">
          <Image
            src="/img/hero/img-8.jpg"
            alt="Hero gallery image 8"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--9">
          <Image
            src="/img/hero/img-9.jpg"
            alt="Hero gallery image 9"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--10">
          <Image
            src="/img/hero/img-10.jpg"
            alt="Hero gallery image 10"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--11">
          <Image
            src="/img/hero/img-11.jpg"
            alt="Hero gallery image 11"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--12">
          <Image
            src="/img/hero/img-12.jpg"
            alt="Hero gallery image 12"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>

        <figure className="hero__gallery__item hero__gallery__item--13">
          <Image
            src="/img/hero/img-13.jpg"
            alt="Hero gallery image 13"
            className="hero__gallery__img"
            layout='fill'
            objectFit='cover'
          />
        </figure>
      </div>
    )

}

export default HeroGallery;