import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  setRecipes: (newRecipes) =>
    set((state) => {
      const filtered = newRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: newRecipes,
        filteredRecipes: filtered,
      };
    }),

  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      const filtered = updated.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const filtered = updated.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      const filtered = updated.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updated,
        filteredRecipes: filtered,
      };
    }),
}));

export default useRecipeStore;
