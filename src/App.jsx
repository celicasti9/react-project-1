import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Card from '../components/Card'
import products from "../src/data/products.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      
      <Footer />
    </>
  )
}

export default App

