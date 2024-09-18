import React from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';
import Header from './components/Header.js';
import Hero from'./components/Hero.js';
import FeaturedProducts from './components/FeaturedProducts.js';
import Testimonial from './components/Testimonials.js';
import TeamMember from './components/TeamMember.js';
import ProductCard from './components/ProductCard.js';
import "./App.css";
import ShopByCategory from './components/ShopByCategory.js';
import SaleOfTheMonth from './components/SaleOfTheMonth.js';
import Footer from './components/Footer.js';
import tisha from'./components/tisha.jpg';
import Prakash from'./components/prakash.jpg';
import nitish from'./components/nitish.jpg';
import isha from './components/ishaaa.jpg';
import ayush from './components/ayush.jpg';





const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <SaleOfTheMonth />
      <ShopByCategory />
      <FeaturedProducts />
      {/* <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <Testimonial text="Great service!" author="Mansi Birla" rating={4} />
        <Testimonial text="Great service!" author="Priya Sharma" rating={4.5} />
        <Testimonial text="Great service!" author="Debanshu Goel" rating={4} />
        <Testimonial text="Great service!" author="Aakash Tiwari" rating={5} />
        <Testimonial text="Great service!" author="Shruti Gupta" rating={5} />
        <Testimonial text="Great service!" author="Priya Tripathi" rating={4.7} />
      </section> */}
       <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <Testimonial text="Great service!" author="Mansi Birla" rating={4} />
          <Testimonial text="Amazing experience!" author="Priya Sharma" rating={5} />
          <Testimonial text="Would definitely recommend!" author="Debanshu Goel" rating={4} />
          <Testimonial text="Not bad, but could be better." author="Shruti Gupta" rating={3} />
          <Testimonial text="Excellent customer support!" author="Akash Tiwari" rating={5} />
          <Testimonial text="Good value for money." author="Priya Tripathi" rating={4} />
        </div>
      </div>
      <section className="team">
        <h2>Our Professional Members</h2>
        <div className="team-grid">
          <TeamMember name="Prakash Singh" role="CEO & Founder" image={Prakash} />
          <TeamMember name="Nitish Kumar" role="Chief Technology Officer (CTO)" image={nitish} />
          <TeamMember name="Isha Shukla" role="Lead Designer" image={isha} />
          <TeamMember name="Tisha Gupta" role="Marketing Head" image={tisha} />
          <TeamMember name="Ayush Dubey" role="Operations Manager" image={ayush} />
         
          {/* Add more team members as needed */}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default App;