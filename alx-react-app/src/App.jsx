import React from 'react';
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import WelcomeMessage from  './components/WelcomeMessage';
import Header from  './components/Header';
import MainContent from  './components/MainContent';
import Footer from  './components/Footer';


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
       <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
           
    </div>

  );
};

export default App;