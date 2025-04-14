import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;

    addRecipe({
      id: Date.now(),
      title,
      description,
    });

    setTitle('');
    setDescription('');
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      backgroundColor: '#ffffff',
      padding: '1rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '0 auto',
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #ccc',
      borderRadius: '0.375rem',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '0.5rem 0.75rem',
      border: '1px solid #ccc',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      minHeight: '100px',
    },
    button: {
      width: '100%',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        style={styles.textarea}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
