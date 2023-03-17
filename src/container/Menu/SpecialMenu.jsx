import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding" id="menu">
    <div className="specialMenu_title">
      <SubHeading title="Menu tailored to your platelet" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="specialMenu_menu">
      <div className="specialMenu_menu_wine flex__center">
        <p className="specialMenu_menu_heading">Wine & Beer</p>
        <div className="specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="specialMenu_menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="specialMenu_menu_cocktails flex__center">
        <p className="specialMenu_menu_heading">Cocktails</p>
        <div className="specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
