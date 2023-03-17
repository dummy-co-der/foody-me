import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">

    <div className="menuitem_head">
      <div className="menuitem_name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className="menuitem_dash" />

      <div className="menuitem_price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="menuitem_sub">
        <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
