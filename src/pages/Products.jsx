import React, { useState } from "react";
import products from "../data/products";
import Footer from "../components/Footer";  
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal, LayoutGrid, List as ListIcon, ChevronDown, Star } from "lucide-react";

const Products = () => {
  const [category, setCategory] = useState(""); // him / her

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="min-h-screen bg-[#0d0f10] py-6">
      {/* Toolbar */}
      <div className="max-w-7xl lg:px-8 mx-auto px-4">
        <div className="flex items-center justify-between gap-4 bg-[#121416] text-gray-200 rounded-md px-4 py-3 border border-[#272a2f]">
          <button className="inline-flex items-center gap-2 text-sm font-medium">
            <SlidersHorizontal size={16} />
            FILTER
          </button>
          <div className="text-sm text-gray-400 hidden sm:block">
            Showing all {filteredProducts.length} results
          </div>
          <div className="flex items-center gap-3">
            {/* Category select as part of toolbar */}
            <div className="relative">
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="appearance-none bg-[#181b1f] text-gray-200 text-sm px-3 py-2 pr-8 rounded-md border border-[#272a2f]"
              >
                <option value="">All</option>
                <option value="him">For Him</option>
                <option value="her">For Her</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {/* <button className="p-2 rounded-md hover:bg-[#181b1f] border border-transparent hover:border-[#272a2f]" aria-label="Grid view">
              <LayoutGrid size={18} />
            </button>
            <button className="p-2 rounded-md hover:bg-[#181b1f] border border-transparent hover:border-[#272a2f]" aria-label="List view">
              <ListIcon size={18} />
            </button> */}
          </div>
        </div>
      </div>

      {/* Products Grid (dark cards like screenshot) */}
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#121416] rounded-xl border border-[#272a2f] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-shadow"
            >
              <div className="w-full h-72 bg-[#0f1113] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-4 py-3 border-t border-[#272a2f]">
                <h3 className="text-gray-200 text-sm md:text-base line-clamp-2">{product.title}</h3>

                {/* Rating row */}
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const filled = (product.rating || 0) >= i + 1;
                    return (
                      <Star
                        key={i}
                        size={14}
                        className={filled ? "text-[#E58E54]" : "text-gray-500"}
                        fill={filled ? "currentColor" : "none"}
                      />
                    );
                  })}
                  {product.reviews ? (
                    <span className="text-[11px] text-gray-400 ml-1">({product.reviews})</span>
                  ) : null}
                </div>

                {/* Price row */}
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="text-[#E58E54] font-semibold">
                    Rs. {Number(product.price).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  {product.oldPrice ? (
                    <span className="text-gray-500 line-through">
                      Rs. {Number(product.oldPrice).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  ) : null}
                  {product.volume ? (
                    <span className="text-gray-400 ml-auto">{product.volume}</span>
                  ) : null}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No perfumes found.</p>
        )}
      </div>
      {/* Pagination footer (static) */}
      <div className="max-w-7xl mx-auto px-4 mt-6 mb-10 text-center text-gray-500 text-xs">Page 1 of 4</div>
      <Footer />    
    </div>
  );
};

export default Products;
