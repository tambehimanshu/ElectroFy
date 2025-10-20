import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import productsData from "../data/electronics"; // Import your product data array

function ProductView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productsData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="mt-20 px-4 md:px-20 flex flex-col md:flex-row gap-12">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-2xl font-semibold mt-2">
          <FaRupeeSign className="inline" />
          {product.price}
        </p>
        <p className="mt-4 text-gray-700">{product.description}</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Buy Now
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
