import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

export const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};