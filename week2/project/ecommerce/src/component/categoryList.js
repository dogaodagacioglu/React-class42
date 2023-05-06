import React, { useState, useEffect } from "react";

const CategoryList = ({ handleCategoryClick,selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          key={category}
          className={
            selectedCategory === category
              ? "categories--item categories--item-selected"
              : "categories--item"
          }
          onClick={(e) => {
            handleCategoryClick(e);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
