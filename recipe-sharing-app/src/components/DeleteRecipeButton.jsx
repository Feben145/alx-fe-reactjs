
import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; 
import { useNavigate } from 'react-router-dom'; 

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); 
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); 

  
  const handleDelete = () => {
    
    deleteRecipe(recipeId);

  
    navigate('/'); 
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
