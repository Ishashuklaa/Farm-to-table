import React, { useState } from 'react';
import { Eye, EyeOff, Tractor } from 'lucide-react';
// import './LoginForm.css'; // Importing the CSS file

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted:', formData);
    // Handle the login process
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left side - Image */}
        <div className="w-1/2 hidden md:block">
          <img 
            src="/api/placeholder/800/600" 
            alt="Farm landscape" 
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-8">
            <Tractor className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-green-800" style={{fontFamily: "'Harvest', sans-serif"}}>
            Farmer's Market Login
          </h2>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Welcome back! Login to access fresh produce and support local farmers.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="youremail@example.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-green-600 hover:underline">Sign up here</a>
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-center text-sm font-medium text-gray-500 mb-4">Our Promise</h3>
            <p className="text-xs text-gray-500 text-center">
              We connect you directly with local farmers. Every login brings you closer to fresh, sustainably grown produce and supports your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
