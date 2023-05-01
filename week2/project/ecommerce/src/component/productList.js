import React, { useState, useEffect } from "react";
import { ProductsItem } from "./productsItem";


function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    let apiUrl = 'https://fakestoreapi.com/products';
    if (selectedCategory !== 'all') {
      apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        console.log(data)
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
        setErrorMessage("Error fetching products. Please try again later.");
      });
  }, [selectedCategory]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {!isLoading && !errorMessage && (
        <ul className="products">
          {products.map(product => (
            <li key={product.id} className="products--item">
             
                <ProductsItem product={product} />
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
