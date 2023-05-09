import { useContext } from 'react';
import { ProductsItem } from './ProductsItem';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useFetch } from '../auxiliary/useFetch';

export const Products = () => {
  const { selectedCategory } = useContext(GlobalContext);

  const url =
    selectedCategory === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;
  let [isLoading, products] = useFetch(url, selectedCategory);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className='products'>
          {products.map(product => {
            return (
              <Link
                key={product.id}
                className='products--item'
                to={`/product/${product.id}`}
              >
                <ProductsItem product={product} />
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};