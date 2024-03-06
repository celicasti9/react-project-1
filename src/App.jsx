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
import DeleteButton from '../components/DeleteButton'
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
        <Route path='/add-product' element={<AddProduct onAddProduct={handleAddProduct} />} />
      </Routes>


      </div>
      <Footer />
      
    </>
  );
}

export default App;

