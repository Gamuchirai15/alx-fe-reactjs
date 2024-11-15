import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], 
  favorites: [], 
  recommendations: [], 
  searchTerm: '', 

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: (state) => {
    const term = state.searchTerm.toLowerCase();
    return state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
    );
  },

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      !state.favorites.includes(recipe.id)
    ).slice(0, 5); 
    return { recommendations: recommended };
  }),

  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };