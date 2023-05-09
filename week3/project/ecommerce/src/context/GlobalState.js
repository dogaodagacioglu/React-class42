import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // *** Handle Category Click
  const [selectedCategory, setCategory] = useState('all');

  function handleCategoryNameClick(e) {
    const category = e.target.textContent;
    setCategory(category);
  }

  // *** Favorite Ids
  const [favoriteIds, setFavoriteIds] = useState([]);
  function handleFavoriteId(productId) {
    if (favoriteIds.includes(productId)) {
      setFavoriteIds(favoriteIds.filter(id => id !== productId));
    } else {
      setFavoriteIds([...favoriteIds, productId]);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        favoriteIds,
        handleFavoriteId,
        selectedCategory,
        handleCategoryNameClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};