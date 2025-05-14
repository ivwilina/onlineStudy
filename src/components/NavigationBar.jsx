import React, { useState } from "react";
import classNames  from "classnames";
import "../style/NavigationBar.css";
import WebLogo from "../assets/react.svg";
import HamburgerMenu from "../assets/icons/hamburger-menu-svgrepo-com.svg";
import { NavLink as Link } from "react-router-dom";

const NavigationBar = () => {


  const pageLinks = [
    {id: 1, link: '/', name: 'Trang chủ'},
    {id: 2, link: '/flashcard', name: 'Flashcards'},
    {id: 3, link: '/personal', name: 'Trang cá nhân'},
  ];

  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="navBarContainer">

        {/*logo + tên*/}
        <Link to="/" className="brand">
          <div className="logo">
            <img src={WebLogo} alt="Rapid TOEIC"/>
          </div>
          <p className="brandName">Rapid TOEIC</p>
        </Link>

        {/*hamburger menu cho responsive*/}
        <div className="hamburgerMenu" onClick={handleHamburgerMenu} >
          <img src={HamburgerMenu} alt="Menu" />
        </div>

        {/*links đến các subpages*/}
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
