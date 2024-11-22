import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';  
import ProfileSettings from './ProfileSettings';  

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
      
      <Routes>
        {/* Define nested routes here */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />  {/* This will render the nested routes */}
    </div>
  );
};

export default Profile;
