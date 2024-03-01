// ItemDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function itemDetails () {
      // Accessing the id parameter from the route
  const { id } = useParams();

  // Assuming products is an array of items with unique ids
  // Replace this with your actual data fetching logic
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
      {/* Add more details based on your product data */}
    </div>
  );
}

export default ItemDetails;
