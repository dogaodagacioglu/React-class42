import { useContext, useEffect, useState } from 'react';
import { Header } from './Header';
import { GlobalContext } from '../context/GlobalState';
import { ProductsItem } from './ProductsItem';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const { favoriteIds } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const productsAll = await response.json();
        setProducts(productsAll);
      } catch (e) {
        alert('Error: ' + e.message);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Header title={'Favorites'} />
      <ul className='products'>
        {' '}
        {favoriteIds.length > 0 ? (
          products
            .filter(product => favoriteIds.includes(product.id))
            .map(product => (
              <Link
                key={product.id}
                className='products--item'
                to={`/product/${product.id}`}
              >
                <ProductsItem product={product} />
              </Link>
            ))
        ) : (
          <div className='title-container'>
            You haven't chosen any favorites yet!
          </div>
        )}
      </ul>
    </>
  );
};