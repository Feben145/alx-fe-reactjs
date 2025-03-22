import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>

      {/* Link to Add Recipe Page */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Recipe
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <Link to={`/recipe/${recipe.id}`} className="block">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center">Loading recipes...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
