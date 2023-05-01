import React from 'react';


export const ProductDetails = ({ product }) => {
    return (
    <div className='root'>
      <div className='product-details'>
        <div className='title-container'>
            <h1 className='title-container--title'>s</h1>
        </div>
        <div className='product-details--information'>
            <div className='product-details--image'>
                <div className='product-image-container'>
                    <img className='product-image' src=''></img>
                </div>
            </div>
            <p className='product-details--description'></p>
        </div>
      </div>
    </div>
    );
  };

  export default ProductDetails;