import { useAddToCart } from "../context/AddToCartContext";

function AddToCart() {
  const { cart, removeFromCart } = useAddToCart();

  if (cart.length === 0)
    return <p className="text-center text-gray-500 mt-10">🛒 Your cart is empty.</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cart.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg bg-white">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600">₹{product.price}</p>
          <button
            onClick={() => removeFromCart(product.id)}
            className="mt-3 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddToCart;
