import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";




import NavLinks from "./nav-links";
import Logo from "../logo";


import SideDrawer from "./side-drawer";
// import Backdrop from "../ui-elements/Backdrop";



const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [renderDrawer, setRenderDrawwer] = useState(false);

  

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
      setRenderDrawwer(true)
  }, [])
  
  return (
    <Fragment>
      {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {renderDrawer && <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes.navigationDrawer}>
          <NavLinks />
        </nav>
      </SideDrawer>} */}
      <div className={props.isVisible ? "main__navigation" : 'main__navigation main__navigation--sticky'} >
        <button
          className="main__navigation__button"
          onClick={openDrawerHandler}
        >
         {/* <List className={classes.listIcon}/> */}
        </button>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav className="main_navigation__links">
          <NavLinks />
        </nav>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
