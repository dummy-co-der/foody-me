import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="header-h1"> The Secret to Elegant Eating </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Food is as important as energy, as security, as the environment. Everything is linked together.
      </p>
      <button type="button" className="custom__button"> Explore Menu </button> 
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
