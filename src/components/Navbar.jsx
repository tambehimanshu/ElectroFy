import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaStore, FaShoppingCart, FaHistory, FaHeart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useWishList } from "../context/WishListContext";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { wishList } = useWishList();

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/shop", label: "Shop", icon: <FaStore /> },
    { to: "/addtocart", label: "Cart", icon: <FaShoppingCart /> },
    {
      to: "/wishlist",
      label: "WishList",
      icon: <FaHeart />,
      badge: wishList.length, // display number of wishlist items
    },
    { to: "/history", label: "History", icon: <FaHistory /> },
  ];

  const renderLinks = () =>
    navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          onClick={() => isMobile && setMobileOpen(false)} 
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-gray-700 transition ${
              isActive ? "text-gray-700 font-semibold" : ""
            }`
          }
        >
          {link.icon} {link.label}
          {link.badge > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs px-2 rounded-full">
              {link.badge}
            </span>
          )}
        </NavLink>
      </li>
    ));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">ElectroFy</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-lg">{renderLinks()}</ul>
        </nav>

        {/* SignUp Button */}
        <button className="hidden md:block bg-[#a7a7a7] text-white py-3 px-8 rounded-full font-medium hover:bg-gray-700 transition-all duration-500">
          SignUp
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl p-2"
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-50 bg-black bg-opacity-70 backdrop-blur-md">
          <nav>
            <ul className="flex flex-col space-y-6 text-lg">{renderLinks()}</ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
