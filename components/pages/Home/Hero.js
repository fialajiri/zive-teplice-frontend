import Image from "next/image";

import foodIcon from "../../../public/icons/food.svg";
import musicIcon from "../../../public/icons/music.svg";
import craftIcon from "../../../public/icons/craft.svg";
import kidsIcon from "../../../public/icons/kids.svg";

const Hero = (props) => {
  return (
    <section className="hero">
      <h2 className="heading-secondary">
        Nějvětší sousedská slavnost v Teplicích
      </h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies commodo finibus. Quisque suscipit non nisi sit amet facilisis.
        Maecenas id blandit augue, vitae condimentum augue. Aliquam ullamcorper
        elit eget turpis luctus, nec mattis turpis tincidunt. Nam id tincidunt
        leo, ac mollis nisl. Morbi vestibulum ut dui quis finibus. Suspendisse
        potenti. Vestibulum quam diam, tristique quis porta in, condimentum et
        mi. Donec et risus imperdiet metus consequat gravida.
      </p>

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ultricies commodo finibus. Quisque suscipit non nisi sit amet facilisis.
        Maecenas id blandit augue, vitae condimentum augue. Aliquam ullamcorper
        elit eget turpis luctus, nec mattis turpis tincidunt. Nam id tincidunt
        leo, ac mollis nisl. Morbi vestibulum ut dui quis finibus. Suspendisse
        potenti. Vestibulum quam diam, tristique quis porta in, condimentum et
        mi. Donec et risus imperdiet metus consequat gravida.
      </p>
      <div className="hero__cards">
        <div className="hero__card">
          <Image className="icon" src={foodIcon} height={50} width={50}/>
          <h3 className="heading-tertiary">Vynikající občerstvení</h3>
          <p className="paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image className="icon" src={musicIcon} height={50} width={50}/>
          <h3 className="heading-tertiary">Živá muzika</h3>
          <p className="paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image className="icon" src={craftIcon} height={50} width={50}/>
          <h3 className="heading-tertiary">Ruční výrobky</h3>
          <p className="paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
        <div className="hero__card">
          <Image className="icon" src={kidsIcon} height={50} width={50}/>
          <h3 className="heading-tertiary">Děti sebou</h3>
          <p className="paragraph">
            Phasellus a euismod dolor. Duis aliquam dui ac consectetur porta.
            Etiam accumsan sed tortor in sollicitudin. Suspendisse venenatis ex
            in vestibulum iaculis.
          </p>
        </div>
      </div>
      <div className="hero__buttons">
          <button className='btn'>Obděr novinek</button>
          <button className='btn'>Chci prodávat/hrát na ŽT</button>
      </div>
    </section>
  );
};

export default Hero;
