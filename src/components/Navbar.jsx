import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaShoppingCart, FaHistory, FaHeart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useWishList } from "../context/WishListContext";

function Navbar() {
  const navigate = useNavigate()
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
    { to: "/payment-history", label: "History", icon: <FaHistory /> },
  ];

  const renderLinks = () =>
    navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          onClick={() => isMobile && setMobileOpen(false)} 
          className={({ isActive }) =>
            `relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
              isActive
                ? "text-white bg-gradient-to-t from-slate-900 scale-110"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
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
        <button  
        onClick={()=>navigate('/*')}
        className=" relative overflow-hidden rounded-[0.6em] px-10 py-3 text-[15px] font-sans border-2 border-[#d8f5e9] text-[#dcf1e8] tracking-wider leading-[1.4em] shadow-[inset_0_0_10px_rgba(27,253,156,0.4),0_0_9px_3px_rgba(27,253,156,0.1)] transition-all duration-300 bg-[linear-gradient(to_right,rgba(27,253,156,0.1)_1%,transparent_40%,transparent_60%,rgba(27,253,156,0.1)_100%)] hover:text-[#82ffc9] hover:shadow-[inset_0_0_10px_rgba(27,253,156,0.6),0_0_9px_3px_rgba(27,253,156,0.2)] before:absolute before:top-0 before:left-[-4em] before:h-full before:w-16 before:bg-[linear-gradient(to_right,transparent_1%,rgba(27,253,156,0.1)_40%,rgba(27,253,156,0.1)_60%,transparent_100%)] before:transition-transform before:duration-400 hover:before:translate-x-[15em]">
        Login
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
