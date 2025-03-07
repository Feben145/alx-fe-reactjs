import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
