import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    console.log('Search Term:', term); // Verify if the term is updated
    setSearchTerm(term);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
