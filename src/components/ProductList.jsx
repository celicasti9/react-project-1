import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    // ... other products
  ]);

  const handleDelete = (productId) => {
    // Update state by excluding the item with the specified productId
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <DeleteButton productId={product.id} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;