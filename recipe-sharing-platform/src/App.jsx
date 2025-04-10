import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={addRecipe} />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
