import React from "react";
import { useWishList } from "../context/WishListContext";
import { FaRupeeSign } from "react-icons/fa";

function WishList() {
  const { wishList, removeFromWishList } = useWishList();

  const formatCurrency = (value) => new Intl.NumberFormat("en-IN").format(value);

  console.log("Rendering wishlist:", wishList);

  return (
    <div className="mt-20 px-8">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist 💖</h2>

      {wishList.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishList.map((item, index) => {
            // fallback values
            const id = item.slug || index; // fallback to index if slug missing
            const name = item.name || "Unnamed Product";
            const price = item.price || 0;
            const image = item.images && item.images.length ? item.images[0] : "https://images.unsplash.com/photo-1560518883-ce09059eeffa";

            return (
              <div
                key={id}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-medium">{name}</h3>
                <div className="flex items-center text-blue-600 font-bold my-2">
                  <FaRupeeSign className="mr-1" />
                  {formatCurrency(price)}
                </div>
                <button
                  onClick={() => removeFromWishList(item.slug)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default WishList;
