import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import userProfileImage from './images/UserPro.jpg';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zipCode: '',
    country: '',
  });
  const [loading, setLoading] = useState(true);

  // Function to fetch user data from API
  // Function to fetch user data from API
const fetchUserData = async () => {
  setLoading(true);
  try {
    console.log("The user is fetching data");
    const response = await axios.get('http://localhost:4000/users/api/v2/GetUser', {
      withCredentials: true, // Include credentials in the request
    });
    setUserData(response.data.user);
    // Populate form data with user data
    setFormData({
      firstName: response.data.user.first_name || '',
      lastName: response.data.user.last_name || '',
      email: response.data.user.email || '',
      phone: response.data.user.phone || '',
      street: response.data.user.street || '',
      city: response.data.user.city || '',
      zipCode: response.data.user.postal_code || '',
      country: response.data.user.country || '',
      state:response.data.user.state || '',
      profileImage:null 
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  fetchUserData();
}, []);

// Handle Save Changes
const handleSaveChanges = async (e) => {
  e.preventDefault();
  setLoading(true);
  formData.profileImage = null;
  console.log('Form data being sent:', formData); // Log the form data
  try {
    await axios.post('http://localhost:4000/users/api/v2/updateUser', formData, {
      withCredentials: true,
    });
    await fetchUserData(); // Re-fetch data after saving changes
  } catch (error) {
    console.error('Error saving changes:', error);
  } finally {
    setLoading(false);
  }
};



  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Render placeholders if loading
  // Render placeholders if loading
if (loading) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
     
      <p>Name: [Placeholder]</p>
      <p>Email: [Placeholder]</p>
    </div>
  );
}


  return (
    <div className="profile-container">
      <nav className="profile-sidebar">
        <div className="profile-nav-content">
          <h2>Navigation</h2>
          <ul>
            <li><a href="#"><span className="nav-icon">📊</span> Dashboard</a></li>
            <li><a href="#"><span className="nav-icon">📜</span> Order History</a></li>
            <li><a href="#"><span className="nav-icon">❤️</span> Wishlist</a></li>
            <li><a href="#"><span className="nav-icon">🛒</span> Shopping Cart</a></li>
            <li><a href="#"><span className="nav-icon">🚪</span> Log-out</a></li>
          </ul>
        </div>
      </nav>

      <main className="profile-main-content">
        <h1>Account Settings</h1>

        <div className="profile-picture-container">
          <img
            src={userProfileImage}
            alt="Profile"
            className="profile-picture"
          />
        </div>

        <form onSubmit={handleSaveChanges}>
          <section className="profile-form-section">
            <h2>Personal Information</h2>
            <div className="profile-form-grid">
              <div className="profile-form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>

          <section className="profile-form-section">
            <h2>Billing Address</h2>
            <div className="profile-form-grid">
              <div className="profile-form-group">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="zipCode">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={userData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-form-group">
                <label htmlFor="company">Country </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
          <button type="submit" className="profile-btn-save" onClick={handleSaveChanges}>Save Changes</button>
        </form>
      </main>
    </div>
  );
};

export default Profile;
