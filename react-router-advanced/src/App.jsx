import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          {/* Define routes */}
          <Route path="/" element={<Home />} />

          {/* Profile route with nested routes */}
          <Route path="profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} /> {/* Profile details route */}
            <Route path="settings" element={<ProfileSettings />} /> {/* Profile settings route */}
          </Route>

          {/* Example dynamic route for blog post */}
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
