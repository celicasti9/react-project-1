import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'  
import AboutPage from '../src/pages/AboutPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import ItemDetails from '../src/pages/ItemDetails'
import AddProduct from './pages/AddProducts'
import productsData from './data/products.json'
import UpdateProduct from './pages/UpdateProduct'
//import Update from '../src/pages/Update'


function App() {
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (newProduct) => {
    // Add the new product to the existing products
    setProducts([...products, newProduct]);
  };

  return (
    <>
        
    <div className='App'>
      <Navbar />
      <Sidebar /> 

       <Routes>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={ <ErrorPage /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path='/add-product' element={<AddProduct onAddProduct={handleAddProduct} />} />
      </Routes>


      </div>
      <Footer />
      
    </>
  );
}

export default App;

{/*

// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import List from '../components/List';
import Card from '../components/Card';
import AddProduct from '../pages/AddProduct'; // Import the new AddProduct page
import AboutPage from '../pages/AboutPage';
import Dashboard from '../pages/Dashboard';

import productsData from '../data/products.json';

function App() {
  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (newProduct) => {
    // Add the new product to the existing products
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard products={products} />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/add-product' element={<AddProduct onAddProduct={handleAddProduct} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


*/}