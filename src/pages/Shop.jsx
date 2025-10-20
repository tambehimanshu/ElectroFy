import React from "react";
import ProductCard from "../components/ProductCard";

const electronics = [
  {
    name: "Apple iPhone 15 Pro",
    images: [
      "https://images.unsplash.com/photo-1603898037225-75aaef0a60ff",
      "https://images.unsplash.com/photo-1617810408615-0c5a3f1dbabc"
    ],
    price: 129900,
    rating: 4,
    reviews: 1200,
    features: [
      "6.1-inch Super Retina XDR display",
      "A17 Bionic chip",
      "Triple camera system",
      "iOS 18 support"
    ],
    slug: "iphone-15-pro"
  },
  {
    name: "Samsung Galaxy Z Fold 6",
    images: [
      "https://images.unsplash.com/photo-1614680371334-7892d3c67e12",
      "https://images.unsplash.com/photo-1614680371335-abcdef123456"
    ],
    price: 199999,
    rating: 5,
    reviews: 800,
    features: [
      "7.6-inch Foldable AMOLED display",
      "Snapdragon 8 Gen 3",
      "Flex mode multitasking",
      "5G supported"
    ],
    slug: "galaxy-z-fold-6"
  },
  {
    name: "OnePlus 12 Pro",
    images: [
      "https://images.unsplash.com/photo-1668207651470-2f121c0abdf1",
      "https://images.unsplash.com/photo-1668207651471-3a121c0abdf2"
    ],
    price: 89999,
    rating: 4,
    reviews: 950,
    features: [
      "6.7-inch Fluid AMOLED display",
      "Snapdragon 8 Gen 3",
      "Triple camera setup",
      "120Hz refresh rate"
    ],
    slug: "oneplus-12-pro"
  },
  {
    name: "Xiaomi Mi 14 Pro",
    images: [
      "https://images.unsplash.com/photo-1679998037215-123aef0a60aa",
      "https://images.unsplash.com/photo-1679998037216-123baf0a60bb"
    ],
    price: 74999,
    rating: 4,
    reviews: 700,
    features: [
      "6.8-inch AMOLED display",
      "Snapdragon 8+ Gen 3",
      "Quad camera setup",
      "67W fast charging"
    ],
    slug: "xiaomi-mi-14-pro"
  },
  {
    name: "Realme GT 3 Pro",
    images: [
      "https://images.unsplash.com/photo-1678888037222-aaaef0a60cc",
      "https://images.unsplash.com/photo-1678888037223-bbbef0a60dd"
    ],
    price: 49999,
    rating: 4,
    reviews: 650,
    features: [
      "6.7-inch AMOLED display",
      "Snapdragon 8 Gen 2",
      "120Hz refresh rate",
      "65W fast charging"
    ],
    slug: "realme-gt-3-pro"
  },
  {
    name: "boAt Rockerz 113",
    images: [
      "https://images.unsplash.com/photo-1596374442345-a1b2c3d4e5f6",
      "https://images.unsplash.com/photo-1596374442346-a1b2c3d4e5f7"
    ],
    price: 1299,
    rating: 4,
    reviews: 5000,
    features: [
      "Wireless Bluetooth headphones",
      "8 hours playback",
      "Lightweight design",
      "Built-in mic"
    ],
    slug: "boat-rockerz-113"
  },
  {
    name: "Sony WH-1000XM5",
    images: [
      "https://images.unsplash.com/photo-1603888037215-1a2b3c4d5e6f",
      "https://images.unsplash.com/photo-1603888037216-1b2b3c4d5e6g"
    ],
    price: 29990,
    rating: 5,
    reviews: 1500,
    features: [
      "Noise cancelling headphones",
      "30 hours battery life",
      "Touch controls",
      "Bluetooth 5.2"
    ],
    slug: "sony-wh-1000xm5"
  },
  // …continue similarly for 43 more products
];

function Shop() {
  return (
    <div className=" mt-20 container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {electronics.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}

export default Shop;
