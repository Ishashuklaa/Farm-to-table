import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';  // Ensure you're using lucide-react for icons
// import "./SignUp.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.acceptTerms) {
      setError('Please accept the Terms of Use & Privacy Policy');
      return;
    }

    try {
      const response = await axios.post('/api/user/CreateUser', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      // Handle successful response
      setSuccess('Sign-up successful!');
      setError('');
      // Optionally, redirect to another page or clear the form
      // e.g., history.push('/login');
    } catch (err) {
      // Handle error response
      setError('Sign-up failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800" style={{fontFamily: "'Harvest', sans-serif"}}>Sign Up</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">Please fill in this form to create an account!</p>
        
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            <span>{error}</span>
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 text-green-600 p-2 rounded mb-4 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            <span>{success}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-4"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded mb-4"
            onChange={handleChange}
            required
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              className="mr-2"
              onChange={handleChange}
              required
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
              I accept the Terms of Use & Privacy Policy.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="#" className="text-green-600 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
