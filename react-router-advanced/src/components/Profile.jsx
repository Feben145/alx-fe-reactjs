import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet for nested routes

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

      {/* This will render the nested routes like ProfileDetails or ProfileSettings */}
      <Outlet />
    </div>
  );
};

export default Profile;
