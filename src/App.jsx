import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import List from '../components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
    </>
  )
}

export default App

