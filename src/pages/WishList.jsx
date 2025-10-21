import React from "react";
import { useWishList } from "../context/WishListContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Import toast

function Wishlist() {
  const { wishList, removeFromWishlist, updateQuantity } = useWishList();
  const navigate = useNavigate();

  if (!wishList.length)
    return (
      <div className="flex flex-col min-h-[80vh] justify-center items-center">
        <p className="text-lg mb-4">❤️ Your wishlist is empty.</p>
        <button
          onClick={() => navigate("/shop")}
          className="text-blue-600 hover:underline font-semibold"
        >
          Browse Products
        </button>
      </div>
    );

  // Handler with toast
  const handleRemove = (productId, productName) => {
    removeFromWishlist(productId);
    toast.error(`${productName} removed from wishlist!`); // 🔔 Show toast
  };

  return (
    <div data-aos="fade-up" className="mt-40 flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishList.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Product Image */}
              <div className="relative h-64 flex items-center justify-center bg-gray-100 overflow-hidden">
                <img
                  src={
                    product.image ||
                    (product.images && product.images[0]) ||
                    "https://picsum.photos/300/300"
                  }
                  alt={product.name || "Product"}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
                <button
                  onClick={() => handleRemove(product.id, product.name)}
                  aria-label="Remove from wishlist"
                  className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white text-lg hover:bg-red-600 transition"
                >
                  ♥
                </button>
              </div>

              <div className="p-5 flex flex-col gap-3">
                {/* Product Name */}
                <h2 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-center text-blue-600 font-bold text-lg">
                  <span className="mr-1">₹</span>
                  {(
                    (product.price || 0) *
                    (product.quantity || 1)
                  ).toLocaleString()}
                </div>

                {/* View Product Button */}
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold mt-2"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
