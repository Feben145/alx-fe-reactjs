import React, { useContext } from './react';
import { UserContext } from '../UserContext'; // Adjust path if needed

const UserProfile = () => {
  const user = useContext(UserContext);

  if (!user) {
    return (<div>Loading...</div>);
  }

  return (<>
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  </>);
};

export default UserProfile;