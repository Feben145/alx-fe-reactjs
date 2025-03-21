import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Ensure data.json is in public folder
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Recipes</Link>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.description}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal ml-6 mt-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
