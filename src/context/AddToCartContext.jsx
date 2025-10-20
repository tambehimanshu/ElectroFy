// src/context/AddToCartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create context
const AddToCartContext = createContext();
export const useAddToCart = () => useContext(AddToCartContext);

// 2️⃣ Provider component
export const AddToCartProvider = ({ children }) => {
  // Load cart from localStorage if available
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart (no duplicates)
  const addToCart = (product) => {
    setCart((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if product is in cart
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Optional: clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <AddToCartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};
