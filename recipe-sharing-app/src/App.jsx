import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const containerStyle = {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '1rem',
    maxWidth: '600px',
    margin: '2rem auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#1f2937',
  };

  const navStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          🍲 Recipe Sharing App
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 style={headingStyle}>Share Your Recipes</h1>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
