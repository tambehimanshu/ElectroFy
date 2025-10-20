import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

export const useWishList = ()=> useContext(WishListContext);

export const WishListProvider =({children})=>{
    const [wishList,setWishList]= useState([]);

   const addToWishList = (item) => {
  console.log("Adding to wishlist:", item);
  if (!wishList.find((wish) => wish.id === item.id)) {
    setWishList([...wishList, item]);
  }
};

    const removeFromWishList =(id)=>{
        setWishList(wishList.filter((item)=> item.id !== id));
    }

    return (
        <WishListContext.Provider value={{wishList,addToWishList,removeFromWishList}}>
       {children}
        </WishListContext.Provider>
    )
}