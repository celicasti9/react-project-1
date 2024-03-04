import React, { useState, useEffect } from 'react';

function UpdateProduct({ onUpdateProduct, productToUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState({
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

  useEffect(() => {
    // Populate the form with the current product data when component mounts
    setUpdatedProduct(productToUpdate);
  }, [productToUpdate]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    // Handle different input types
    if (type === 'file') {
      setUpdatedProduct({ ...updatedProduct, [name]: files[0] });
    } else if (type === 'checkbox') {
      setUpdatedProduct({ ...updatedProduct, [name]: e.target.checked });
    } else {
      setUpdatedProduct({ ...updatedProduct, [name]: value });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form or perform additional checks if needed

    // Call the onUpdateProduct function to update the product in the state
    onUpdateProduct(updatedProduct);

    // Clear the form after submitting
    setUpdatedProduct({
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
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          
          </label>      
        <br />
        <button type='submit'>Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;




{/*
 Let's see if this can work

<label>
          Title:
          <input type='text' name='title' value={updatedProduct.title} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type='number' name='price' value={updatedProduct.price} onChange={handleChange} />
        </label>
        <label>
          Rating:
          <input type='number' name='rating' value={updatedProduct.rating} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' value={updatedProduct.description} onChange={handleChange} />
        </label>
        <label>
          Discount:
          <input type='number' name='discountPercentage' value={updatedProduct.discountPercentage} onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type='number' name='stock' value={updatedProduct.stock} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type='text' name='category' value={updatedProduct.category} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type='image' name='thumbnail' value={updatedProduct.category} onChange={handleChange} />
        </label>

*/}