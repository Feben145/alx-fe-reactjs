import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const styles = {
    container: {
      backgroundColor: '#f3f4f6', // Tailwind's gray-100/black-200 approximation
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      margin: '2rem auto',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
