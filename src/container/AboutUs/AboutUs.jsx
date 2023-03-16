import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding">
    <div className="aboutus-overlay flex__center">
      <img src={images.O} alt="f letter" />
    </div>
    <div className="aboutus-content flex__center">
      <div className="aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon__img" />
        <p className="p__opensans"> FoodyMe, The most cutting-edge restaurant, sets the standard for excellence in the sector. By integrating a plug-and-play food delivery idea in play, we assist you in optimizing your kitchen revenues.
        We enhance incremental sales and drive superior profitability.</p>
        <button type="button" className="custom__button"> Know More </button>
      </div>

      <div className="aboutus-content-knife flex__center">
        <img src={images.knife} alt="about-knife" />
      </div>
      <div className="aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon__img" />
        <p className="p__opensans">Our restaurant's name was motivated by our desire for a delectable dinner, and many of the foods on our menu were inspired by meals my mother made for our family.
          We pay homage to the family legacy with every meal we serve here at The FoodyMe.</p>
        <button type="button" className="custom__button"> Know More </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
