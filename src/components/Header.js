import React, { useContext, useState } from 'react';
import log from './logo1.png';
import { Heart, ShoppingCart, User } from 'lucide-react'; // Icons
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Correct import
import UserContext from '../Users/Context/UserContext';

const Header = () => {
  const {loggedin , setLoggedin} = useContext(UserContext);

  const handleLogout = () => {
    setLoggedin(false); // Set loggedin to false on logout
  };

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
      
      <div className="auth-section">
        {loggedin ? (
          // Render icons and signout button when logged in
          <div className="user-icons">

            <Heart className="icon" />
            
            <ShoppingCart className="icon" />

            <Link to='/UserProfile'>
            <User className="icon" />
            </Link>

            <button onClick={handleLogout} className="logout-button">
              Sign Out
            </button>
          </div>
        ) : (
          // Render login and signup buttons when not logged in
          <div className="auth-buttons">
            <button className="login-button" >
              <Link to="/login" >Login</Link>
            </button>
            <button className="signup-button">
              <Link to="/signin">Signup</Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
