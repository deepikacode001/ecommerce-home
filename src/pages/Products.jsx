import React, { useState } from "react";
import products from "../data/products";
import Footer from "../components/Footer";  
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal, LayoutGrid, List as ListIcon, ChevronDown } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#121416] rounded-xl border border-[#272a2f] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
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
                <div className="text-gray-300 mt-1 text-sm">
                  Rs. {Number(product.price).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No perfumes found.</p>
        )}
      </div>
      <Footer />    
    </div>
  );
};

export default Products;
