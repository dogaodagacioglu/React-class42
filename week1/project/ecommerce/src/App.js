import React, { useState } from "react";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategoryClick(e) {
    const selectedCategory = e.target.textContent.slice(6);
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
