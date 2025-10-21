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
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccesser";
import History from "./pages/History";
import { PaymentProvider } from "./context/PaymentContext";

function App() {
  return (
    <BrowserRouter>
    <AddToCartProvider>
      <WishListProvider>
        <PaymentProvider>
   
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/product/:id" element={<ProductView/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/payment-success" element={<PaymentSuccess/>} />
            <Route path="/payment-history" element={<History/>} />
          </Routes>
          <Footer />
     </PaymentProvider>
      </WishListProvider>
         </AddToCartProvider>
    </BrowserRouter>
  );
}

export default App;
