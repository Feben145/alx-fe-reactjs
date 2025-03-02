import React from 'react';
import { useParams } from 'react-router-dom'; // To access route params
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from URL params
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id)) // Find recipe by ID
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add other recipe details if needed */}
    </div>
  );
};

export default RecipeDetails;
