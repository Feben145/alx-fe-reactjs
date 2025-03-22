import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Ensure data.json is in `public/`
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.recipes.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl font-bold mt-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-lg mx-auto my-6 rounded-lg shadow-lg" />
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ol className="list-disc ml-5 mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
        <ol className="mt-2">{recipe.instructions}</ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
