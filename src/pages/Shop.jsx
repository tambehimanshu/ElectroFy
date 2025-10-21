import React from "react";
import ProductCard from "../components/ProductCard";
import electronics from "../data/electronics";




function Shop() {
  return (
    <div 
    data-aos="fade-up"
    className="mt-40 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   {electronics.map((product) => (
  <ProductCard key={product.id} product={product} />
))}


    </div>
  );
}

export default Shop;
