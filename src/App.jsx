import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import { WishListProvider } from './context/WishListContext.jsx'
import WishList from './pages/WishList.jsx'

function App() {
  return (
    <BrowserRouter>
    <WishListProvider>

   
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
      <Route path='/wishlist' element={<WishList/>} />
  </Routes>
  <Footer/>
   </WishListProvider>
    </BrowserRouter>
  )
}

export default App