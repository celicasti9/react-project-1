import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Card from '../components/Card'
import products from "../src/data/products.json"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from '../src/pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <div className='App'>
      <Navbar />
      <Sidebar />
      <List>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
      </List>
      
        
       <Routes>
        <Route path="/about" element={<AboutPage />}/>
        
      </Routes>
      </div>
      <Footer />
      
    </>
  )
}

export default App

