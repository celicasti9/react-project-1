import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../src/pages/AboutPage'
import Dashboard from '../src/pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Navbar />
      <Sidebar />       
       <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/about" element={<AboutPage />}/>       
      </Routes>
      </div>
      <Footer />   
    </>
  )
}

export default App

