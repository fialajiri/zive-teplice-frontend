import FooterNavigation from "./footer-navigation";

const Footer = () => {
  return <div className="footer__container">
      <div className='footer__created-by'>
          <p className='footer__created-by__text'>created by:</p>
          <p className='footer__created-by__name'>CODEFACTORY</p>
          <a className='footer__created-by__email' href='mailto:main@codefactory.cz'>main@codefactory.cz</a>
      </div>
      <div className='footer__navigation'>
        <FooterNavigation />
      </div>
      <div className='footer__photos-by'>
          <p className='footer__photos-by__text'>Fotografie by:</p>
          <p className='footer__photos-by__name'>Vandlis</p>
          <a className='footer__photos-by__email' href='mailto:vandlisphoto@gmail.com'>vandlisphoto@gmail.com</a>
      </div>
  </div>;
};

export default Footer;
