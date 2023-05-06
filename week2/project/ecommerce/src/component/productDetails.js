import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        setProduct(product);
      } catch (e) {
        alert("Error: " + e.message);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="root">
      <div className="product-details">
        <div className="title-container">
          <h1 className="title-container--title">{product.title}</h1>
        </div>
        <div className="product-details--information">
          <div className="product-details--image">
            <div className="product-image-container">
              <img
                className="product-image"
                alt={product.title}
                src={product.image}
              ></img>
            </div>
          </div>
          <p className="product-details--description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
