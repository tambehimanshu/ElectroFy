import React, { createContext, useContext, useState, useEffect } from "react";

const WishListContext = createContext();
export const useWishList = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addToWishlist = (product) => {
    setWishList((prev) => {
      if (!prev.find((item) => item.id === product.id)) return [...prev, product];
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishList((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishList.some((item) => item.id === productId);
  };

  return (
    <WishListContext.Provider
      value={{ wishList, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};
