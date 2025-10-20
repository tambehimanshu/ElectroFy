import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Shop from './pages/Shop.jsx'
import { WishListProvider } from './context/WishListContext.jsx'
import WishList from './pages/WishList.jsx'
import { AddToCartProvider } from './context/AddToCartContext.jsx'
import AddToCart from './pages/AddToCart.jsx'


function App() {
  return (
    <BrowserRouter>
    <WishListProvider>
      <AddToCartProvider>

   
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
      <Route path='/wishlist' element={<WishList/>} />
      <Route path='/addtocart' element={<AddToCart/>} />
  </Routes>
  <Footer/>
  </AddToCartProvider>
   </WishListProvider>
    </BrowserRouter>
  )
}

export default App