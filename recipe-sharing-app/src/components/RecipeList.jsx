import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const styles = {
    container: {
      marginTop: '1.5rem',
    },
    emptyText: {
      color: '#6b7280',
      fontSize: '1rem',
    },
    recipeCard: {
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '0.5rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginBottom: '0.5rem',
    },
    description: {
      color: '#374151',
      marginBottom: '0.5rem',
    },
    link: {
      display: 'inline-block',
      marginRight: '1rem',
      color: '#3b82f6',
      textDecoration: 'none',
    },
    deleteButton: {
      color: '#dc2626',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {recipes.length === 0 ? (
        <p style={styles.emptyText}>No recipes yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={styles.recipeCard}>
            <h3 style={styles.title}>{recipe.title}</h3>
            <p style={styles.description}>{recipe.description}</p>

            <Link to={`/recipes/${recipe.id}`} style={styles.link}>View</Link>
            <Link to={`/recipes/edit/${recipe.id}`} style={styles.link}>Edit</Link>
            <button
              onClick={() => deleteRecipe(recipe.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
