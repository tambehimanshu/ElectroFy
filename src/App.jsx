import React, { useEffect } from "react";
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
import Login from "./pages/Login";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
  })
  return (
    <BrowserRouter>
   <div className="min-h-screen flex flex-col">
    <AddToCartProvider>
      <WishListProvider>
        <PaymentProvider>
   
          <Navbar />
          <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/product/:id" element={<ProductView/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/payment-success" element={<PaymentSuccess/>} />
            <Route path="/payment-history" element={<History/>} />
            <Route path="/" element={<Login/>} />
            
          </Routes>
          </main>
          <Footer />
     </PaymentProvider>
      </WishListProvider>
         </AddToCartProvider>
          <ToastContainer 
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
         </div>
    </BrowserRouter>
    
  );
}

export default App;
