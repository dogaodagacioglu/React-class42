import { Heart } from './Heart';

export const ProductsItem = ({ product }) => {
  const { title, image } = product;
  return (
    <div className='product'>
      <div className='product-image--container'>
        <img className='product--image' src={image} alt={title}></img>
        <div className='product-image--favourite-container'>
          <Heart productId={product.id} />
        </div>
      </div>
      <span className='product--title' title={title}>
        {title}
      </span>
    </div>
  );
};