import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import AddToCart from "./pages/AddToCart";
import { WishListProvider } from "./context/WishListContext";
import { AddToCartProvider } from "./context/AddToCartContext";
import ProductView from "./pages/ViewDetails";

function App() {
  return (
    <BrowserRouter>
    <AddToCartProvider>
      <WishListProvider>
   
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/product/:id" element={<ProductView/>} />
          </Routes>
          <Footer />
     
      </WishListProvider>
         </AddToCartProvider>
    </BrowserRouter>
  );
}

export default App;
