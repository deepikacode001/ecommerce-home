import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [category, setCategory] = useState("All Categories");

  return (
    <header className="w-screen border-b shadow-sm overflow-x-hidden">
      {/* 🔹 Top Contact Bar */}
      <div className="bg-gray-100 text-right text-sm py-1 px-6 w-full">
         +123 (456) 7890
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 w-full h-20 max-w-[1440px] mx-auto">
        
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="md:hidden text-xl"><FaBars /></button>
          {/* <h1 className="text-2xl font-bold text-green-600">Foodzy</h1>
          <span className="text-xs text-gray-500">A Treasure of Tastes</span> */}
          <img src="/src/assets/logo.png" alt="Logo" />
        </div>

        {/* Center: Search Bar */}
        <div className="flex flex-1 mx-6 border rounded overflow-hidden h-12">
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
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Beverages</option>
          </select>
          <button className="bg-red-500 text-white px-4"><FaSearch /></button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <Link to="/account" className="flex items-center gap-1">
            <FaUser /> <span className="hidden md:inline">Account</span>
          </Link>
          <Link to="/wishlist" className="flex items-center gap-1">
            <FaHeart /> <span className="hidden md:inline">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-1">
            <FaShoppingCart /> <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* 🔹 Bottom Menu */}
      <nav className="hidden md:flex justify-center gap-8 py-4 text-sm font-medium bg-white shadow-sm w-full">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
}
