import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-black text-white z-50">
      {/* Main Navbar - single row */}
      <div className="flex items-center justify-between px-6 w-full h-16 max-w-[1440px] mx-auto">
        {/* Left: Brand + Hamburger on mobile */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-xl"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
          <Link to="/" className="select-none">
            <span className="text-2xl font-extrabold tracking-wide">
              <span className="text-orange-500">Local</span> Face
            </span>
          </Link>
        </div>

        {/* Center: Menu (desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
          <Link className="hover:text-orange-400 transition-colors" to="/">Home</Link>
          <Link className="hover:text-orange-400 transition-colors" to="/products">Shop</Link>
          <Link className="hover:text-orange-400 transition-colors" to="/about-us">About us</Link>
          {/* <Link className="hover:text-orange-400 transition-colors" to="/blog">Blog</Link> */}
          <Link className="hover:text-orange-400 transition-colors" to="/contact-us">contact</Link>
        
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-orange-400 transition-colors" aria-label="Search">
            <FaSearch />
          </button>
          <Link to="/login" className="hover:text-orange-400 transition-colors" aria-label="Account">
            <FaUser />
          </Link>
          <Link to="/wishlist" className="hover:text-orange-400 transition-colors" aria-label="Wishlist">
            <FaHeart />
          </Link>
          <Link to="/cart" className="hover:text-orange-400 transition-colors" aria-label="Cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 py-4 px-6 text-sm font-medium bg-black text-white w-full border-t border-white/10">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-400">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-400">Shop</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-400">About us</Link>
          {/* <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-400">Blog</Link> */}
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-400">Contact</Link>
          
        </nav>
      )}
    </header>
  );
}
