import Image from "next/image";



const Logo = () => {
  return (
      <div className="logo__container">
    <Image className='logo__image' src='/img/logo.png' alt="Logo Živých Teplic" width={100} height={100}/>
    </div>
  );
};

export default Logo;
