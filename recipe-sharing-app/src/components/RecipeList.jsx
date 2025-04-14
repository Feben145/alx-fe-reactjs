import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  const styles = {
    container: {
      marginTop: '1.5rem',
    },
    emptyText: {
      color: '#6b7280', // Tailwind's gray-500
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
      fontSize: '1.125rem', // roughly text-lg
      marginBottom: '0.5rem',
    },
    description: {
      color: '#374151', // Tailwind's gray-700
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
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
