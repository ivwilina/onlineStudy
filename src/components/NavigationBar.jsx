import React, { useState } from "react";
import classNames  from "classnames";
import "../style/NavigationBar.css";
import WebLogo from "../assets/react.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu-svgrepo-com.svg";
import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {

  const pageLinks = [
    {id: 1, link: '/', name: 'Home'},
    {id: 2, link: '/flashcard', name: 'Flash Card'},
    {id: 3, link: '/personal', name: 'Personal'},
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="navBarContainer">
        <Link to="/" className="brand">
          <div className="logo">
            <img src={WebLogo} alt="Rapid TOEIC"/>
          </div>
          <p className="brandName">Rapid TOEIC</p>
        </Link>
        <div className="hamburgerMenu" onClick={handleHamburgerMenu} >
          <img src={HamburgerMenu} alt="Menu" />
        </div>
        <div className={'linksWrapper' + ' ' + classNames({showMenu:showMenu})}>
          <div className="links">
            {pageLinks.map((pageLink) => 
              <Link key={pageLink.id} to={pageLink.link} className="link" onClick={handleHamburgerMenu} >
                {pageLink.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
