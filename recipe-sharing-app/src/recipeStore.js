import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initialize an empty list for recipes
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Action to add a new recipe
  setRecipes: (recipes) => set({ recipes }), // Action to set the initial list of recipes
}));

export { useRecipeStore };