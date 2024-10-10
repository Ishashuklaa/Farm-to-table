import React from 'react';
import log from './logo1.png';
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Correct import

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
      <div className="auth-buttons">
        <button className="login-button">
          <Link to="/login">Login</Link>
        </button>
        <button className="signup-button">
          <Link to="/signin">Signup</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
