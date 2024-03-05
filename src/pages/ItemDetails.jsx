import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';


function ItemDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Item not found</p>;
  }

  return (
    <div className='item-details'>
        

      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="100" height="100" />
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      </div>
      );
    }
    
    export default ItemDetails;
    