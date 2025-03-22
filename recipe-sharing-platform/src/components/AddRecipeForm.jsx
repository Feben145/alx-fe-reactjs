import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // Explicitly defined

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "At least one ingredient is required.";
    if (!steps.trim()) newErrors.steps = "Please provide preparation steps.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Run validation before submission

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((step) => step.trim()),
      image: "https://via.placeholder.com/300", // Placeholder image
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({}); // Reset errors after successful submission
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            placeholder="e.g. Sugar, Flour, Eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block font-medium">Preparation Steps (separate with periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Step 1. Step 2. Step 3."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
