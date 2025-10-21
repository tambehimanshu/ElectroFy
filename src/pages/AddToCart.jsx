import React from "react";
import { useAddToCart } from "../context/AddToCartContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Import toast

function AddToCart() {
  const { cart, removeFromCart, updateQuantity } = useAddToCart();
  const navigate = useNavigate();

  if (!cart.length)
    return (
      <div className="text-center mt-40">
        <p className="text-lg mb-4">🛒 Your cart is empty.</p>
        <button
          onClick={() => navigate("/shop")}
          className="text-blue-600 hover:underline font-semibold"
        >
          Browse Products
        </button>
      </div>
    );

  // Handler for remove with toast
  const handleRemove = (productId, productName) => {
    removeFromCart(productId);
    toast.error(`${productName} removed from cart!`); // 🔔 Show toast
  };

  // Optional: handler for quantity change
  const handleQuantityChange = (productId, newQty, productName) => {
    updateQuantity(productId, newQty);
    toast.info(`${productName} quantity updated to ${newQty}`);
  };

  // Calculate total cart price
  const totalCartPrice = cart.reduce(
    (acc, product) => acc + (product.price * (product.quantity || 1)),
    0
  );

  return (
    <div data-aos="fade-up" className="mt-40 container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {/* Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
          >
            {/* Product Image */}
            <div className="relative h-64 flex items-center justify-center bg-gray-100 overflow-hidden">
              <img
                src={product.images?.[0] || product.image || "https://picsum.photos/300/300"}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
              <button
                onClick={() => handleRemove(product.id, product.name)}
                aria-label="Remove from cart"
                className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white text-lg hover:bg-red-600 transition"
              >
                🗑
              </button>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>

              {/* Price */}
              <div className="flex items-center text-blue-600 font-bold">
                <span className="mr-1">₹</span>
                {(product.price * (product.quantity || 1)).toLocaleString()}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      Math.max((product.quantity || 1) - 1, 1),
                      product.name
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{product.quantity || 1}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      (product.quantity || 1) + 1,
                      product.name
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <FaPlus />
                </button>
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

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
        <p className="text-lg mb-4">
          Total Items: <span className="font-bold">{cart.length}</span>
        </p>
        <p className="text-xl font-bold text-green-700 mb-6">
          Total Price: ₹{totalCartPrice.toLocaleString()}
        </p>
        <button
          onClick={() => navigate("/payment")}
          className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
