const HeaderHeading = (props) => {
  return (
    <div className="header__heading__container" ref={props.containerRef}>
      <h1 className="heading-primary">
        <span className="heading-primary--main  ">Živé</span>
        <span className="heading-primary--sub ">Teplice</span>
      </h1>
    </div>
  );
};

export default HeaderHeading;
