import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    rating: 0,
    description: '',
    discountPercentage: 0,
    stock: 0,
    category: '',
    brand: '',
    thumbnail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new product to the parent component for handling
    onAddProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for each product property */}
      <label>
        Title:
        <input type="text" name="title" value={newProduct.title} onChange={handleInputChange} />
      </label>
      {/* Add more form fields for other properties */}
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
