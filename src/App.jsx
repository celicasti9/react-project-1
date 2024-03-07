import { useContext } from 'react'
import { ProductContext } from './context/products.context'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'  
import AboutPage from '../src/pages/AboutPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import ItemDetails from '../src/pages/ItemDetails'
import UpdateProduct from './pages/UpdateProduct'
import AddProducts from './pages/AddProducts'
// import Update from '../src/pages/Update'


function App() {

  const { products, setProducts, ids, setIds } = useContext(ProductContext)

  const handleAddProduct = (newProduct) => {
    // Add the new product to the existing products
    setProducts([newProduct, ...products]);
  };

  return (
    <>
        
    <div className='App'>
      <Navbar />
      <Sidebar /> 
       <Routes>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/dashboard" element={<Dashboard products={products} setProducts={setProducts} /> } />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path='/add-product' element={<AddProducts onAddProduct={handleAddProduct} ids={ids} setIds={setIds}  />} />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      </div>
      <Footer />
      
    </>
  );
}

export default App;

