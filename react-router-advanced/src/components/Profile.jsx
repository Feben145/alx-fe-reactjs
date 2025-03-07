import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importing necessary components

import ProfileDetails from './ProfileDetails'; // Import ProfileDetails component
import ProfileSettings from './ProfileSettings'; // Import ProfileSettings component

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li>
          <Link to="details">Profile Details</Link> {/* Link to ProfileDetails */}
        </li>
        <li>
          <Link to="settings">Profile Settings</Link> {/* Link to ProfileSettings */}
        </li>
      </ul>

      {/* Define the nested routes directly inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} /> {/* Nested ProfileDetails route */}
        <Route path="settings" element={<ProfileSettings />} /> {/* Nested ProfileSettings route */}
      </Routes>
    </div>
  );
};

export default Profile;

