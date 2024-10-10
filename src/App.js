import React from 'react';
import { Heart,ShoppingCart, User } from 'lucide-react';


import { Route, Routes } from 'react-router-dom';
import SignupForm from './Users/Signup.jsx';
import Login from './Users/Login.jsx';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import SaleOfTheMonth from './components/SaleOfTheMonth.js';
import ShopByCategory from './components/ShopByCategory.js';
import FeaturedProducts from './components/FeaturedProducts.js';
import Testimonial from './components/Testimonials.js';
import Footer from './components/Footer.js';
import TeamMember from './components/TeamMember.js';
import Prakash  from './components/prakash.jpg'
import isha from  './components/ishaaa.jpg'
import tisha from './components/tisha.jpg'
import ayush from './components/ayush.jpg'
import nitish from './components/nitish.jpg'
import './App.css';
import Home from './components/Home.jsx';




const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignupForm />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>
  );
};

export default App;