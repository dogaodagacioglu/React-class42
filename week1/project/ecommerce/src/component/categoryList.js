import React from "react";
import { useState } from "react";
import categories from "../fake-data/all-categories";

function CategoryList({ handleCategoryClick }) {
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
}

export default CategoryList;
