import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet />  {/* This will render the nested routes */}
    </div>
  );
};

export default Profile;
