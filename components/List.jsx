//import "../styles/list.css"
import React, { useState } from 'react';
import DeleteButton from "./DeleteButton";

function List({ products }) {
  const [listProducts, setListProducts] = useState(products);

  const handleDelete = (productId) => {
    const updatedProducts = listProducts.filter(product => product.id !== productId);
    setListProducts(updatedProducts);
  };

  return (
    <div className="list">
      <div>
        {/* {props.children} */}
        <ul>
          {listProducts && listProducts.map(product => (
            <li key={product.id}>
              {product.name}
              <DeleteButton onClick={() => handleDelete(product.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
