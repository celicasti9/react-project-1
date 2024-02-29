import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import List from '../components/List'
import Card from '../components/Card'
import Greeting from '../components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Greeting />
      <Sidebar />
      <List>
        <Card 
          title="iPhone 9"
          price={549}
          rating={4.69}
        />
        <Card
          title="iphone X"
          price={899}
          rating={4.44}
        />
        <Card
          title="Samsung Universe 9"
          price={1249}
          rating={4.09}
        />
        <Card
          title="OPPOF19"
          price={280}
          rating={4.3}
        />
        <Card
          title="Huawei P30"
          price={499}
          rating={4.09}
        />
      </List>
      <Footer />
    </>
  )
}

export default App

