// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore'; // Import Zustand store
import { useParams, useNavigate } from 'react-router-dom'; // For routing

const EditRecipeForm = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // For navigating to a different route after saving
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === parseInt(id))); // Get the recipe from the store by ID
  const updateRecipe = useRecipeStore((state) => state.updateRecipe); // Get the updateRecipe function from Zustand

  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!title || !description) {
      return; // Don't submit if fields are empty
    }

    // Create an updated recipe object
    const updatedRecipe = {
      ...recipe,
      title,
      description,
    };

    // Update the recipe in the store
    updateRecipe(updatedRecipe);

    // Redirect back to recipe details or list
    navigate(`/recipes/${id}`);
  };

  if (!recipe) {
    return <p>Recipe not found!</p>; // Display if recipe is not found
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
