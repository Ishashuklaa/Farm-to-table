import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = ({ name, role, bio, imageUrl }) => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={imageUrl} alt={`${name}'s profile`} />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-role">{role}</h3>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default Profile;
