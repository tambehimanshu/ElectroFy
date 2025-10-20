import { useNavigate } from "react-router-dom";
import ScrollingBar from "../components/ScrollingBar";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative mt-16 flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Welcome to ElectroFy
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn delay-200">
          Your one-stop shop for the latest gadgets and electronics!
        </p>
        <ScrollingBar />
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 px-8 py-3 rounded-xl font-semibold bg-white text-blue-600 hover:bg-yellow-300 hover:text-black transition-transform transform hover:scale-105"
        >
          Shop Now
        </button>
        {/* Optional floating shapes for modern look */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounceSlow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full opacity-15 animate-bounceSlow"></div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 md:px-20 bg-gray-50 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose ElectroMart?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">Fast Delivery 🚚</h3>
            <p>Get your products delivered quickly at your doorstep.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">Best Prices 💰</h3>
            <p>Enjoy competitive prices and exciting discounts on electronics.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">24/7 Support 🛠️</h3>
            <p>Our customer support is always ready to help you anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
