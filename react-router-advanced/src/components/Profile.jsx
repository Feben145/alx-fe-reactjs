import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Importing necessary components for routing

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li>
          <Link to="details">Profile Details</Link> {/* Link to Profile Details */}
        </li>
        <li>
          <Link to="settings">Profile Settings</Link> {/* Link to Profile Settings */}
        </li>
      </ul>

      {/* Outlet will render the nested routes (ProfileDetails or ProfileSettings) */}
      <Outlet />
    </div>
  );
};

export default Profile;
