import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import NavLinks from "./nav-links";
import Logo from "../logo";

import SideDrawer from "./side-drawer";
import Backdrop from "./../../ui-elements/backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [renderDrawer, setRenderDrawwer] = useState(false);

  
 
  

  const openDrawerHandler = () => {
    setDrawerIsOpen(prevState => !prevState);
  };  

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
    var x = document.getElementById("navi-toggle");     
    x.checked = false;
    
  }

  useEffect(() => {
    setRenderDrawwer(true);
  }, []);

  return (
    <div className='navigation'>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {renderDrawer && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="navigation__drawer">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <div
        className={
          props.isVisible
            ? "main__navigation"
            : "main__navigation main__navigation--sticky"
        }
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <input
          type="checkbox"
          className="main__navigation__checkbox"
          id="navi-toggle"          
          onChange={openDrawerHandler}
        />

        <label htmlFor="navi-toggle" className="main__navigation__button">
          <span className="main__navigation__icon">&nbsp;</span>
        </label>

        <nav className="main__navigation__links">
          <NavLinks />
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
