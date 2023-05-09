import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Categories = () => {
  const { selectedCategory, handleCategoryNameClick } =
    useContext(GlobalContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const categoriesAll = await response.json();
      setCategories(categoriesAll);
    };
    getCategories();
  }, []);

  return (
    <div className='categories'>
      {categories.map(category => (
        <div
          key={category}
          className={
            selectedCategory === category
              ? 'categories--item categories--item-selected'
              : 'categories--item'
          }
          onClick={e => {
            handleCategoryNameClick(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};