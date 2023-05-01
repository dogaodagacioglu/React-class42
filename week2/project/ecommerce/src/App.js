import React, { useState } from "react";
import CategoryList from "./component/categoryList.js";
import ProductList from "./component/productList.js";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategoryClick(e) {
    const selectedCategory = e.target.textContent;
    setSelectedCategory(selectedCategory);
  }

  return (
    <div className="App">
      <h1>Products</h1>

      <CategoryList handleCategoryClick={handleCategoryClick} />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
