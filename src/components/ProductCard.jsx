import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRupeeSign,
  FaShoppingCart,
  FaHeart,
  FaEye,
} from "react-icons/fa";
import { useWishList } from "../context/WishListContext";
import { useAddToCart } from "../context/AddToCartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;
    const navigate = useNavigate();

  const { addToCart } = useAddToCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();
  const liked = isInWishlist(product.id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
    
       

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  const handleWishlistClick = () => {
    if (liked) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
      {/* Image */}
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Wishlist Heart */}
        <button
          onClick={handleWishlistClick}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-2 right-2 p-2 rounded-full text-white text-lg transition-all duration-300 ${
            liked ? "bg-red-500 hover:bg-red-600" : "bg-black/50 hover:bg-black/70"
          }`}
        >
          <FaHeart />
        </button>

        {/* Carousel Controls */}
        
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.name || "No Name"}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, idx) => (
            <FaStar
              key={idx}
              className={`mr-1 ${
                idx < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 ml-2 text-sm">
            ({product.reviews || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center text-lg font-bold text-blue-600 mb-4">
          <FaRupeeSign className="mr-1" />
          {formatCurrency(product.price || 0)}
        </div>

        {/* Features */}
        {product.features && (
          <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={()=>navigate(`/product/${product.id}`)}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
          >
            <FaEye /> View
          </button>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
