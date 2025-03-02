// src/components/RecipeDetails.jsx

import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // Import the Zustand store
import { useParams, Link } from 'react-router-dom'; // Import useParams for getting the recipe ID from the URL
import { EditRecipeForm } from './EditRecipeForm'; // Import the EditRecipeForm component
import { DeleteRecipeButton } from './DeleteRecipeButton'; // Import the DeleteRecipeButton component

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id)) // Find the recipe by ID
  );

  // Check if the recipe exists
  if (!recipe) {
    return <p>Recipe not found!</p>; // Display a message if the recipe doesn't exist
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Link to navigate back to the recipe list */}
      <Link to="/">Back to Recipe List</Link>

      {/* Render the Edit and Delete components */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails; // Export the component
