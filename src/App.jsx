import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../src/pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <div className='App'>
      <Navbar />
      <Sidebar />
      <h1>Welcome to the main page baby!</h1>     
        
       <Routes>
        <Route path="/about" element={<App />}/>
        <Route path="/about" element={<AboutPage />}/>
        
      </Routes>
      </div>
      <Footer />
      
    </>
  )
}

export default App
