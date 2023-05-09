import React, { useContext } from "react";
import { FavoriteContext} from "../favoriteContext"

const FavoriteList = () => {
  const { favoriteProducts } = useContext(FavoriteContext);

  return (
    <div>
      <h2>Favorite Products</h2>
      {favoriteProducts.length === 0 ? (
        <p>No favorite products.</p>
      ) : (
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
