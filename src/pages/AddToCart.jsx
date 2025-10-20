import React from "react";
import { useAddToCart } from "../context/AddToCartContext";
import {  useNavigate } from "react-router-dom";

function AddToCart() {
  const { cart, removeFromCart } = useAddToCart();
  const navigate = useNavigate();

  if (!cart.length)
    return (
      <div className="text-center mt-20">
        <p className="text-lg mb-4">Your cart is empty.</p>
        <a
          href="/shop"
          className="text-blue-600 hover:underline font-semibold"
        >
          Browse Products
        </a>
      </div>
    );

  return (
    <div className="mt-20 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cart.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
        >
          <div className="relative h-64">
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "https://picsum.photos/300/300"
              }
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => removeFromCart(product.id)}
              aria-label="Remove from cart"
              className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white text-lg hover:bg-red-600 transition"
            >
              🗑
            </button>
          </div>
          <div className="p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h2>
            <div className="flex items-center text-blue-600 font-bold mb-2">
              <span className="mr-1">₹</span>
              {product.price?.toLocaleString() || "0"}
            </div>
            <div className="flex gap-2">
              <button
                  onClick={()=>navigate(`/product/${product.id}`)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
              >
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddToCart;
