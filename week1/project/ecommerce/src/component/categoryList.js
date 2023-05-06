import React from "react";
import { useState } from "react";
import categories from "../fake-data/all-categories";

function CategoryList({ handleCategoryClick, selectedCategory }) {

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
}

export default CategoryList;
