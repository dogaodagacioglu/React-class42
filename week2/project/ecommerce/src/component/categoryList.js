import React, { useState, useEffect } from "react";

const CategoryList = ({ handleCategoryClick }) => {
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

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          className={
            selectedCategoryIndex === index
              ? "categories--item categories--item-selected"
              : "categories--item"
          }
          onClick={(e) => {
            setSelectedCategoryIndex(index);
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
