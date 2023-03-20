import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer_links">
      <div className="footer_links_contact">
        <h1 className="footer_headtext"> Contact Us </h1>
        <p className="p__opensans"> House No. ABC, Lane No. XYZ, City, State, Country </p>
        <p className="p__opensans"> +91 - 80062XXXXX </p>
      </div>
      <div className="footer_links_logo">
        <img src={images.foodyme} alt="footer logo" />
        <p className="p__opensans"> To lose oneself in the service of others is the finest way to discover who you are. </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="footer_links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer_links_work">
        <h1 className="footer_headtext"> Working Hours </h1>
        <p className="p__opensans"> Monday - Friday: </p>
        <p className="p__opensans"> 10:00 am - 7:00 pm </p>
        <p className="p__opensans"> Saturday - Sunday: </p>
        <p className="p__opensans"> 10:00 am - 12:00 pm </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2023 FoodyMe. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
