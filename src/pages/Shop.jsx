import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Smartphone", price: 20000, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Laptop", price: 55000, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Headphones", price: 1500, image: "https://via.placeholder.com/200" },
];

function Shop() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
export default Shop;
