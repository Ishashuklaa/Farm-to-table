import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';
import log from './logo1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={log} alt="FarmToTable Logo" className="logo-image" />
        <div className="logo-text">FarmToTable</div>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Category</li>
          <li>Testimonials</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="icons">
        <Heart />
        <ShoppingCart />
        <User />
      </div>
    </header>
  );
};

export default Header;
