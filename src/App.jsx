import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Card from '../components/Card'
import products from "../src/data/products.json";
//import About from "../pages/About"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Navbar />
      <Sidebar />
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
      
       {/* 
       <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      */}

      </div>
      <Footer />
    </>
  )
}

export default App

