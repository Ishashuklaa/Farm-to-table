import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';
import log from './logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleCategoryClick = () => {
    const element = document.getElementById('shop-by-category');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Element with ID "shop-by-category" not found.');
    }
  };

  const handleTestimonialsClick = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Element with ID "testimonials" not found.');
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={log} alt="FarmToTable Logo" className="logo-image" />
        <div className="logo-text">FarmToTable</div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#shop-by-category" onClick={handleCategoryClick}>Category</a></li>
          <li><a href="#testimonials" onClick={handleTestimonialsClick}>Testimonials</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
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
