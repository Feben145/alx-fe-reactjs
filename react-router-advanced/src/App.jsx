import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} /> {/* Profile route is now the parent route */}
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
