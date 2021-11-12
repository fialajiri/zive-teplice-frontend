import Image from "next/image";

import foodIcon from "../../../public/icons/food.svg";
import musicIcon from "../../../public/icons/music.svg";
import craftIcon from "../../../public/icons/craft.svg";
import kidsIcon from "../../../public/icons/kids.svg";

const Hero = (props) => {
  return (
    <section className="hero">
      <h2 className="heading-secondary hero__heading">
        Nějvětší sousedská slavnost v Teplicích
      </h2>
      <div className="hero__paragraphs">
        <p className="paragraph ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies commodo finibus. Quisque suscipit non nisi sit amet
          facilisis. Maecenas id blandit augue, vitae condimentum augue. Aliquam
          ullamcorper elit eget turpis luctus, nec mattis turpis tincidunt. Nam
          id tincidunt leo, ac mollis nisl. Morbi vestibulum ut dui quis
          finibus. Suspendisse potenti. Vestibulum quam diam, tristique quis
          porta in, condimentum et mi. Donec et risus imperdiet metus consequat
          gravida.
        </p>

        <p className="paragraph ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies commodo finibus. Quisque suscipit non nisi sit amet
          facilisis. Maecenas id blandit augue, vitae condimentum augue. Aliquam
          ullamcorper elit eget turpis luctus, nec mattis turpis tincidunt. Nam
          id tincidunt leo, ac mollis nisl. Morbi vestibulum ut dui quis
          finibus. Suspendisse potenti. Vestibulum quam diam, tristique quis
          porta in, condimentum et mi. Donec et risus imperdiet metus consequat
          gravida.
        </p>
      </div>
      <div className="hero__cards">
        <div className="hero__card">
          <Image className="card__icon" src={foodIcon} height={60} width={60} />
          <h3 className="heading-tertiary hero__card__heading">
            Vynikající občerstvení
          </h3>
          <p className="paragraph hero__card__paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image
            className="hero__card__icon"
            src={musicIcon}
            height={60}
            width={60}
          />
          <h3 className="heading-tertiary hero__card__heading">Živá muzika</h3>
          <p className="paragraph hero__card__paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image
            className="card__icon"
            src={craftIcon}
            height={60}
            width={60}
          />
          <h3 className="heading-tertiary hero__card__heading">
            Ruční výrobky
          </h3>
          <p className="paragraph hero__card__paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image className="card__icon" src={kidsIcon} height={60} width={60} />
          <h3 className="heading-tertiary hero__card__heading">Děti sebou</h3>
          <p className="paragraph hero__card__paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
      </div>
      <div className="hero__buttons">
        <button className="btn btn--green">Obděr novinek</button>
        <button className="btn btn--green">Chci prodávat/hrát na ŽT</button>
      </div>
    </section>
  );
};

export default Hero;
