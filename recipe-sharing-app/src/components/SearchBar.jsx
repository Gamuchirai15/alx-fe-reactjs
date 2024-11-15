import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes, setSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;