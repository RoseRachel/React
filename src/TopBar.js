import React, { Fragment }  from 'react';

const TopBar = () => {
  return (
  <div className="app-top-bar">
      <input type="text" placeholder="Search.."></input>
    <a href="#">
      <h1 class="grocery"> Green Grocery</h1>
    </a>
    <a className="button fancy-button">
      <i class="material-icons">shopping_cart</i>Checkout
    </a>
  </div>
  )
};

export default TopBar;