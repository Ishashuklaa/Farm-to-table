import React from 'react';
import './ProfileModal.css'; // Import the CSS file
import Profile from './Profile'; // Import the Profile component

const ProfileModal = ({ isOpen, onClose, profileData }) => {
  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <Profile
          name={profileData.name}
          role={profileData.role}
          bio={profileData.bio}
          imageUrl={profileData.imageUrl}
        />
      </div>
    </div>
  );
};

export default ProfileModal;
