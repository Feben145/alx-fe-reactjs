import ProfilePage from './ProfilePage';
import UserContext from './UserContext';  // Import the UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Use the Provider to supply the context to the component tree
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;