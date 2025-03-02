import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Store for all recipes
  recipes: [],

  // Store for user's favorites
  favorites: [],

  // Store for recipe recommendations
  recommendations: [],

  // Actions

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Set the list of recipes (e.g., for initialization or fetching from an API)
  setRecipes: (recipes) => set({ recipes }),

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate recommendations based on favorite recipes (mock logic)
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Search and filter recipes (added as an improvement for search)
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;
