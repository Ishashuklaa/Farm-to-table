import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupForm from './Users/Signup.jsx';
import Login from './Users/Login.jsx';
import Home from './components/Home.jsx';
import Forgot from './Users/Password/Forgot.jsx';
import ResetPassword from './Users/Password/ResetPassword.jsx';
import UserContextProvider from './Users/Context/UserContextProvider'; // Import the provider
import './App.css';
import Profile from './Users/Profile.jsx';

const App = () => {
  return (
    <UserContextProvider> {/* Wrapping the app with UserContextProvider */}
      <div className="app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignupForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<Forgot/>}/>
          <Route path='/verifyotp' element={<ResetPassword/>}/>
          <Route path='/UserProfile' element={<Profile/>}/>
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;
