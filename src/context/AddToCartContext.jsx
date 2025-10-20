import { createContext, useContext, useState } from "react";


const AddToCartContext = createContext();


export const useAddToCart = () => useContext(AddToCartContext);


export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <AddToCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};
