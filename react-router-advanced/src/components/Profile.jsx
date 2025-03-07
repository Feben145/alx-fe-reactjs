import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li>
          <Link to="details">Profile Details</Link>
        </li>
        <li>
          <Link to="settings">Profile Settings</Link>
        </li>
      </ul>
      <Outlet /> {/* Render the nested routes here */}
    </div>
  );
};

export default Profile;
