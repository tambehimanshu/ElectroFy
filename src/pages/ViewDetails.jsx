import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRupeeSign, FaPlus, FaMinus } from "react-icons/fa";
import productsData from "../data/electronics"; // Your product data array

function ProductView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedProduct = productsData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product.price * quantity;

  return (
    <div className="mt-40 px-4 md:px-20 flex flex-col md:flex-row gap-12">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md h-[400px] bg-gray-100 flex items-center justify-center rounded-xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-20 flex-1 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Price */}
        <div className="mt-2 text-2xl font-semibold flex items-center gap-1 text-green-600">
          <FaRupeeSign />
          <span>{totalPrice.toLocaleString()}</span>
        </div>

        <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaMinus />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaPlus />
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/payment", { state: { product, quantity, totalPrice } })}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md"
          >
            Buy Now
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="px-8 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition shadow-md"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
