import React from 'react';
import { Link } from 'react-router-dom';

export const ProductsItem = ({ product }) => {
  const { title, image } = product;
  return (
    <div className='product'>
      <Link to={`/products/${product.id}`}>
        <img className='product--image' src={image} alt={title}></img>
        <span className='product--title' title={title}>
          {title}
        </span>
      </Link>
    </div>
  );
};