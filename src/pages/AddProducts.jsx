import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/products.context';


function AddProducts({ onAddProduct }) {
  const { ids, setIds } = useContext(ProductContext)

  const [newProduct, setNewProduct] = useState({
    id: ids,
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


  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    setIds((prev) => prev + 1)
    e.preventDefault();
    
    onAddProduct(newProduct);
    navigate('/dashboard')
    // Clear the form after submitting
    setNewProduct({
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
      <label >
          Title:
          <input type='text' name='title' className='fields' value={newProduct.title} onChange={handleChange} />
        </label>
        <label >
          Price:
          <input type='number' name='price' className='fields' value={newProduct.price} onChange={handleChange} />
        </label>
        <label >
          Rating:
          <input type='number' name='rating' className='fields' value={newProduct.rating} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' className='fields' value={newProduct.description} onChange={handleChange} />
        </label>
        <label>
          Discount:
          <input type='number' name='discountPercentage' className='fields' value={newProduct.discountPercentage} onChange={handleChange} />
        </label>
        <label>
          Stock:
          <input type='number' name='stock' className='fields' value={newProduct.stock} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type='text' name='category' className='fields' value={newProduct.category} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;


