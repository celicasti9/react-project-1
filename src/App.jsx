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
//import ItemDetails from '../src/pages/ItemDetails'
import Card from '../components/Card'
import './data/products.json'
  


function App() {
  const [count, setCount] = useState(0)

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
        <Route path="/item/:id" element={<Card/>} />
      </Routes>


      </div>
      <Footer />
      
    </>
  );
}

export default App;