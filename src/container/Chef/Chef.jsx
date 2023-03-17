import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What we Believe in </h1>
      <div className="chef_content">
        <div className="chef_content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <p className="p__opensans">Doloribus facere optio fugiat suscipit odit, accusamus mollitia magni maiores possimus aspernatur iusto, quam illo aliquid ipsa voluptates? Blanditiis necessitatibus ullam repudiandae.</p>
      </div>
      <div className="chef_sign">
        <img src={images.signature} alt="signature" />
        <p className="p__opensans flex__center"> Chef & Founder </p>
      </div>
    </div>
  </div>
);

export default Chef;
