import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.foodyme} alt="app logo" />
      </div>
      <ul className="navbar-links">
        <li className="items"><a href="#home"> Home </a></li>
        <li className="items"><a href="#about"> About </a></li>
        <li className="items"><a href="#menu"> Menu </a></li>
        <li className="items"><a href="#awards"> Awards </a></li>
        <li className="items"><a href="#contact"> Contact </a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className="items"> Log In / Register</a>
        <div />
        <a href="/" className="items"> Book Tables </a>
      </div>

      <div className="navbar-screen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-screen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-screen-links">
              <li className="items"><a href="#home"> Home </a></li>
              <li className="items"><a href="#about"> About </a></li>
              <li className="items"><a href="#menu"> Menu </a></li>
              <li className="items"><a href="#awards"> Awards </a></li>
              <li className="items"><a href="#contact"> Contact </a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
