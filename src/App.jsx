import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Shop from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
  </Routes>
  <Footer/>
    </BrowserRouter>
  )
}

export default App