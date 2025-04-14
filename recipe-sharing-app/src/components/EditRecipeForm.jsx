import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe({
      ...recipe,
      title,
      description,
    });

    if (onClose) onClose(); // Optional close callback
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit title"
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Edit description"
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <button
        type="submit"
        style={{ backgroundColor: '#10b981', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.25rem' }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
