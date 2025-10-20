const electronics = [
  // 1 - Smartphone
  {
  id: 999,
  name: "Test Product",
  images: ["https://via.placeholder.com/400x400?text=Test+Image"],
  price: 999,
  rating: 4,
  reviews: 100,
  features: ["Feature 1", "Feature 2"],
  slug: "test-product"
},
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    images: [
  "https://via.placeholder.com/400x400?text=Product+1",
  "https://via.placeholder.com/400x400?text=Product+1+Alt"
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

  // 2 - Smartphone
  {
    id: 2,
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

  // 3 - Smartphone
  {
    id: 3,
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

  // 4 - Smartphone
  {
    id: 4,
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

  // 5 - Headphones
  {
    id: 5,
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

  // 6 - Headphones
  {
    id: 6,
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

  // 7 - Laptop
  {
    id: 7,
    name: "Dell XPS 13 Laptop",
    images: [
      "https://images.unsplash.com/photo-1614680371336-laptop1",
      "https://images.unsplash.com/photo-1614680371337-laptop2"
    ],
    price: 99999,
    rating: 4,
    reviews: 600,
    features: [
      "13.4-inch FHD+ display",
      "Intel i7 13th Gen",
      "16GB RAM, 512GB SSD",
      "Windows 11"
    ],
    slug: "dell-xps-13"
  },

  // 8 - Laptop
  {
    id: 8,
    name: "MacBook Air M3",
    images: [
      "https://images.unsplash.com/photo-1614680371338-macbook1",
      "https://images.unsplash.com/photo-1614680371339-macbook2"
    ],
    price: 119999,
    rating: 5,
    reviews: 800,
    features: [
      "13.6-inch Retina Display",
      "Apple M3 chip",
      "16GB RAM, 512GB SSD",
      "macOS 14"
    ],
    slug: "macbook-air-m3"
  },

  // 9 - Smartwatch
  {
    id: 9,
    name: "Apple Watch Series 9",
    images: [
      "https://images.unsplash.com/photo-1603898037225-watch1",
      "https://images.unsplash.com/photo-1603898037226-watch2"
    ],
    price: 44990,
    rating: 5,
    reviews: 2000,
    features: [
      "Always-on Retina display",
      "Blood oxygen sensor",
      "ECG app",
      "watchOS 10"
    ],
    slug: "apple-watch-series-9"
  },

  // 10 - Smartwatch
  {
    id: 10,
    name: "Samsung Galaxy Watch 7",
    images: [
      "https://images.unsplash.com/photo-1614680371340-watch3",
      "https://images.unsplash.com/photo-1614680371341-watch4"
    ],
    price: 35990,
    rating: 4,
    reviews: 1200,
    features: [
      "1.4-inch Super AMOLED display",
      "Heart rate monitoring",
      "GPS + LTE",
      "Water resistant"
    ],
    slug: "galaxy-watch-7"
  },

  // 11 - Power Bank
  {
    id: 11,
    name: "Mi 20000mAh Power Bank",
    images: [
      "https://images.unsplash.com/photo-1603898037225-powerbank1",
      "https://images.unsplash.com/photo-1603898037226-powerbank2"
    ],
    price: 1999,
    rating: 4,
    reviews: 2500,
    features: [
      "20000mAh capacity",
      "Dual USB output",
      "Fast charging",
      "Compact design"
    ],
    slug: "mi-20000mah-powerbank"
  },

  // 12 - Power Bank
  {
    id: 12,
    name: "Realme 10000mAh Power Bank",
    images: [
      "https://images.unsplash.com/photo-1603898037227-powerbank3",
      "https://images.unsplash.com/photo-1603898037228-powerbank4"
    ],
    price: 999,
    rating: 4,
    reviews: 1800,
    features: [
      "10000mAh capacity",
      "18W fast charging",
      "Dual USB ports",
      "Lightweight"
    ],
    slug: "realme-10000mah-powerbank"
  },

  // 13 - Camera
  {
    id: 13,
    name: "Canon EOS R6",
    images: [
      "https://images.unsplash.com/photo-1603898037229-camera1",
      "https://images.unsplash.com/photo-1603898037230-camera2"
    ],
    price: 249999,
    rating: 5,
    reviews: 300,
    features: [
      "20MP full-frame sensor",
      "4K video recording",
      "In-body image stabilization",
      "Wi-Fi & Bluetooth"
    ],
    slug: "canon-eos-r6"
  },

  // 14 - Camera
  {
    id: 14,
    name: "Sony Alpha a7 IV",
    images: [
      "https://images.unsplash.com/photo-1603898037231-camera3",
      "https://images.unsplash.com/photo-1603898037232-camera4"
    ],
    price: 249999,
    rating: 5,
    reviews: 280,
    features: [
      "33MP full-frame sensor",
      "4K video at 60fps",
      "Real-time Eye AF",
      "Wi-Fi & Bluetooth"
    ],
    slug: "sony-alpha-a7-iv"
  },

  // 15 - Earbuds
  {
    id: 15,
    name: "Apple AirPods Pro 2",
    images: [
      "https://images.unsplash.com/photo-1603898037233-earbuds1",
      "https://images.unsplash.com/photo-1603898037234-earbuds2"
    ],
    price: 24990,
    rating: 5,
    reviews: 3500,
    features: [
      "Active Noise Cancellation",
      "Spatial audio",
      "Wireless charging case",
      "Sweat and water resistant"
    ],
    slug: "airpods-pro-2"
  },

  // 16 - Earbuds
  {
    id: 16,
    name: "Samsung Galaxy Buds 3",
    images: [
      "https://images.unsplash.com/photo-1603898037235-earbuds3",
      "https://images.unsplash.com/photo-1603898037236-earbuds4"
    ],
    price: 9990,
    rating: 4,
    reviews: 2200,
    features: [
      "Active Noise Cancellation",
      "Wireless charging case",
      "Ambient sound mode",
      "10-hour playback"
    ],
    slug: "galaxy-buds-3"
  },

  // 17 - Smart Speaker
  {
    id: 17,
    name: "Amazon Echo Dot 5th Gen",
    images: [
      "https://images.unsplash.com/photo-1603898037237-speaker1",
      "https://images.unsplash.com/photo-1603898037238-speaker2"
    ],
    price: 4499,
    rating: 4,
    reviews: 4000,
    features: [
      "Compact smart speaker",
      "Alexa built-in",
      "Voice control",
      "Multi-room audio"
    ],
    slug: "echo-dot-5th-gen"
  },

  // 18 - Smart Speaker
  {
    id: 18,
    name: "Google Nest Mini",
    images: [
      "https://images.unsplash.com/photo-1603898037239-speaker3",
      "https://images.unsplash.com/photo-1603898037240-speaker4"
    ],
    price: 3999,
    rating: 4,
    reviews: 3500,
    features: [
      "Compact smart speaker",
      "Google Assistant",
      "Voice commands",
      "Multi-room support"
    ],
    slug: "google-nest-mini"
  },

  // 19 - Tablet
  {
    id: 19,
    name: "Apple iPad Pro 12.9",
    images: [
      "https://images.unsplash.com/photo-1603898037241-ipad1",
      "https://images.unsplash.com/photo-1603898037242-ipad2"
    ],
    price: 109900,
    rating: 5,
    reviews: 1000,
    features: [
      "12.9-inch Liquid Retina XDR display",
      "M2 chip",
      "Face ID",
      "128GB storage"
    ],
    slug: "ipad-pro-12-9"
  },

  // 20 - Tablet
  {
    id: 20,
    name: "Samsung Galaxy Tab S9",
    images: [
      "https://images.unsplash.com/photo-1603898037243-tab1",
      "https://images.unsplash.com/photo-1603898037244-tab2"
    ],
    price: 79999,
    rating: 4,
    reviews: 700,
    features: [
      "11-inch AMOLED display",
      "Snapdragon 8 Gen 3",
      "S Pen included",
      "128GB storage"
    ],
    slug: "galaxy-tab-s9"
  },

  // Continue adding 21-50 with similar categories: smartwatches, headphones, power banks, cameras, laptops, speakers, gaming consoles, accessories...
];

export default electronics;
