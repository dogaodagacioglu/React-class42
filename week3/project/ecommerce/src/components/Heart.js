import React, { useContext } from 'react';
import { HeartSolid } from './HeartSolid';
import { HeartRegular } from './HeartRegular';
import { GlobalContext } from '../context/GlobalState';

export const Heart = ({ productId }) => {
  const { handleFavoriteId, favoriteIds } = useContext(GlobalContext);
  const isFavorite = favoriteIds.includes(productId);
  console.log(isFavorite)
  return (
    <div
      onClick={e => {
        e.preventDefault();
        handleFavoriteId(productId);
      }}
    >
      {isFavorite ? <HeartSolid /> : <HeartRegular />}
    </div>
  );
};