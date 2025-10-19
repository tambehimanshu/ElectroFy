import { NavLink } from "react-router-dom";
import { FaHome, FaStore, FaShoppingCart, FaHistory } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo / Name */}
        <h1 className="text-2xl font-bold tracking-wide">ElectroFy</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-700 transition ${
                  isActive ? "text-gray-700 font-semibold" : ""
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-700 transition ${
                  isActive ? "text-gray-700 font-semibold" : ""
                }`
              }
            >
              <FaStore /> Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-700 transition ${
                  isActive ? "text-gray-700 font-semibold" : ""
                }`
              }
            >
              <FaShoppingCart /> Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-700 transition ${
                  isActive ? "text-gray-700 font-semibold" : ""
                }`
              }
            >
              <FaHistory /> History
            </NavLink>
          </li>
        </ul>
      
     <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
            SignUp
        </button>
        </nav>
    </header>
  );
}

export default Navbar;
