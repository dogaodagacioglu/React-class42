import products from "./fake-data/all-products";
import { ProductsItem } from "./productsItem";
function ProductList({ selectedCategory }) {
  return (
    <ul className="products">
      {selectedCategory === "all"
        ? products.map((product) => {
            return (
              <li key={product.id} className="products--item">
                <ProductsItem product={product} />
              </li>
            );
          })
        : products
            .filter((product) => selectedCategory === product.category)
            .map((product) => {
              return (
                <li key={product.id} className="products--item">
                  <ProductsItem product={product} />
                </li>
              );
            })}
    </ul>
  );
}

export default ProductList;
