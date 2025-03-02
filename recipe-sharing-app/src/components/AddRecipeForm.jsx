import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // Use navigate for redirection

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const navigate = useNavigate(); // To navigate programmatically
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
    navigate('/'); // Redirect back to the recipe list after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
