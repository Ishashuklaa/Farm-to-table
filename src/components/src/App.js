import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Heart, LogIn, ShoppingCart, User } from 'lucide-react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import FeaturedProducts from './components/FeaturedProducts.js';
import Testimonials from './components/Testimonials.js';
import TeamMember from './components/TeamMember.js';
import ProductCard from './components/ProductCard.js';
import './App.css';
import ShopByCategory from './components/ShopByCategory.js';
import SaleOfTheMonth from './components/SaleOfTheMonth.js';
import Footer from './components/Footer.js';
import tisha from './components/tisha.jpg';
import prakash from './components/prakash.jpg';
import nitish from './components/nitish.jpg';
import isha from './components/ishaaa.jpg';
import ayush from './components/ayush.jpg';
import AboutUs from './components/AboutUs'; 
import Shop from './components/Shop'; 
import ContactUs from './components/ContactUs.js';
import SignupForm from './components/UsersForm/signup.js';
import LoginForm from './components/UsersForm/login.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        {/* Navigation Links */}
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav> */}

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SaleOfTheMonth />
                <section id="shop-by-category">
                  <ShopByCategory />
                </section>

                <FeaturedProducts />
                <section id="testimonials">
                  <div className="testimonials-container">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials">
                      <Testimonials text="Great service!" author="Mansi Birla" rating={4} />
                      <Testimonials text="Amazing experience!" author="Priya Sharma" rating={5} />
                      <Testimonials text="Would definitely recommend!" author="Debanshu Goel" rating={4} />
                      <Testimonials text="Not bad, but could be better." author="Shruti Gupta" rating={3} />
                      <Testimonials text="Excellent customer support!" author="Akash Tiwari" rating={5} />
                      <Testimonials text="Good value for money." author="Priya Tripathi" rating={4} />
                    </div>
                  </div>
                </section>

                <section className="team">
                  <h2>Our Professional Members</h2>
                  <div className="team-grid">
                    <TeamMember name="Prakash Singh" role="CEO & Founder" image={prakash} />
                    <TeamMember name="Nitish Kumar" role="Chief Technology Officer (CTO)" image={nitish} />
                    <TeamMember name="Isha Shukla" role="Lead Designer" image={isha} />
                    <TeamMember name="Tisha Gupta" role="Marketing Head" image={tisha} />
                    <TeamMember name="Ayush Dubey" role="Operations Manager" image={ayush} />
                  </div>
                </section>
              </>
            }
          />

          {/* About Us page */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Shop page */}
          <Route path="/shop" element={<Shop />} />
          
          {/* Contact Us page */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
      
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
