import React, { useState } from 'react';

function AddProduct({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    price: '',
    rating: '',
    description: '',
    discountPercentage: '',
    stock: '',
    category: '',
    brand: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form or perform additional checks if needed

    // Call the onAddProduct function to add the new product
    onAddProduct(newProduct);

    // Clear the form after submitting
    setNewProduct({
      id: '',
      title: '',
      price: '',
      rating: '',
      description: '',
      discountPercentage: '',
      stock: '',
      category: '',
      brand: '',
      thumbnail: '',
    });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
    
        <label>
          Title:
          <input type='text' name='title' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type='number' name='price' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          rating:
          <input type='number' name='rating' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          Discount:
          <input type='number' name='discount' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type='number' name='stock' value={newProduct.title} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type='text' name='category' value={newProduct.title} onChange={handleChange} />
        </label>
        {/* Add more fields based on your product properties */}
        <br />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
