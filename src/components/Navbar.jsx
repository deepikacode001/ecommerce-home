import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [category, setCategory] = useState("All Categories");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white border-b shadow-sm z-50">
      {/* 🔹 Top Contact Bar */}
      <div className="bg-black text-right text-sm py-1 px-6 w-full text-white">
         +123 (456) 7890
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 w-full h-20 max-w-[1440px] mx-auto">
        
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-xl"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
          {/* <h1 className="text-2xl font-bold text-green-600">Foodzy</h1>
          <span className="text-xs text-gray-500">A Treasure of Tastes</span> */}
          <img
            src={logo}
            alt="Logo"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 border rounded overflow-hidden h-12">
          <input 
            type="text" 
            placeholder="Search for items..." 
            className="flex-1 px-3 outline-none"
          />
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-l px-2 text-gray-600 outline-none"
          >
            <option>All Categories</option>
            <option>Him</option>
            <option>Her</option>
           
          </select>
          <button className="bg-black text-white px-4"><FaSearch /></button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <button 
            onClick={() => setIsRegisterModalOpen(true)}
            className="flex items-center gap-1 hover:text-black transition-colors"
          >
            <FaUser /> <span className="hidden md:inline">Account</span>
          </button>
          <Link to="/wishlist" className="flex items-center gap-1  hover:text-black">
            <FaHeart /> <span className="hidden md:inline">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-1  hover:text-black">
            <FaShoppingCart /> <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* 🔹 Bottom Menu */}
      <nav className="hidden md:flex justify-center gap-8 py-4 text-sm font-medium bg-white shadow-sm w-full">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Sign In</Link>
        
      </nav>

      {/* 🔹 Mobile Menu (collapsible) */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 py-4 px-6 text-sm font-medium bg-white shadow-sm w-full">
          {/* Optional: quick mobile search */}
          <div className="flex border rounded overflow-hidden h-11">
            <input
              type="text"
              placeholder="Search for items..."
              className="flex-1 px-3 outline-none"
            />
            <button className="bg-black text-white px-4"><FaSearch /></button>
          </div>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
        </nav>
      )}
      
      {/* Register Modal */}
      {/* <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      /> */}
    </header>
  );
}
