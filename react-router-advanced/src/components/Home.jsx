import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>Click on a blog post:</p>
      <ul>
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
        <li><Link to="/blog/3">Blog Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;
