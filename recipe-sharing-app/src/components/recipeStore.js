import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  
  searchTerm: '', 
  filteredRecipes: [], 

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    ),
  })),
  
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export { useRecipeStore };