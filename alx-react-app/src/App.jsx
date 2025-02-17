import React from 'react';
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import Header from  './components/Header';
import MainContent from  './components/MainContent';
import Footer from  './components/Footer';
import WelcomeMessage from  './components/WelcomeMessage';

const App = () => {
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile
        name="Bob"
        age="30"
        bio="Avid traveler and foodie"
      />
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
    </div>

  );
};

export default App;