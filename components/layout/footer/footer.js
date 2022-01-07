import FooterNavigation from "./footer-navigation";
import Image from 'next/image'

import codeFactory from '../../../public/img/codeLogo.svg'


const Footer = () => {
  return <div className="footer__container">
      <div className='footer__created-by'>
          <p className='footer__created-by__text'>created by:</p>
          <div className='footer__created-by__logo'>
             <Image src={codeFactory} className='footer__image' layout='fill'
            objectFit='contain' alt="codeFactory s.r.o."/>
          </div>
          <a className='footer__created-by__email' href='mailto:main@codefactory.cz'>main@codefactory.cz</a>
      </div>
      <div className='footer__navigation'>
        <FooterNavigation />
      </div>
      <div className='footer__photos-by'>
          <p className='footer__photos-by__text'>Photos by:</p>
          <p className='footer__photos-by__name'>Vandlis</p>
          <a className='footer__photos-by__email' href='mailto:vandlisphoto@gmail.com'>vandlisphoto@gmail.com</a>
      </div>
  </div>;
};

export default Footer;
