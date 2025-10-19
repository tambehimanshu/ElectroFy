import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-md hover:shadow-xl transition p-4">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>

      <div className="flex justify-between items-center mt-3">
        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <FaCartPlus /> Add to Cart
        </button>
        <Link to={`/product/${product.id}`} className="text-blue-600 underline hover:text-blue-800">
          View
        </Link>
      </div>
    </div>
  );
}
export default ProductCard;
