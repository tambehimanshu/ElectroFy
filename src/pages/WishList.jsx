import React from "react";
import { useWishList } from "../context/WishListContext";
import { FaRupeeSign } from "react-icons/fa";

function WishList() {
  const { wishList, removeFromWishList } = useWishList();

  const formatCurrency = (value) => new Intl.NumberFormat("en-IN").format(value);

  return (
    <div className="mt-20 px-8">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist 💖</h2>

      {wishList.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishList.map((item) => (
            <div
              key={item.slug} // use slug or unique property
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.images && item.images[0]}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-medium">{item.name}</h3>
              <div className="flex items-center text-blue-600 font-bold my-2">
                <FaRupeeSign className="mr-1" />
                {formatCurrency(item.price)}
              </div>
              <button
                onClick={() => removeFromWishList(item.slug)} // remove by slug
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
