import { useRecipeStore } from './recipeStore';

export const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};