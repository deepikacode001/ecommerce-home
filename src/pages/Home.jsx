import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";
import whyChooseImg from "../assets/perfume-bottle.jpg";

const sampleProducts = [
  {
    id: 1,
    title: "Mystic Oud",
    price: 2999,
    image: "/src/assets/perfume-bottle-nature.jpg",
    category: "Men",
  },
  {
    id: 2,
    title: "Rose Bloom",
    price: 1999,
    discount: 20,
    image: "/src/assets/perfume-bottle-nature.jpg",
    category: "Women",
  },
  {
    id: 3,
    title: "Citrus Fresh",
    price: 1499,
    image: "/src/assets/perfume-bottle-nature.jpg",
    category: "Unisex",
  },
  {
    id: 4,
    title: "Vanilla Essence",
    price: 2499,
    discount: 17,
    image: "/src/assets/perfume-bottle-nature.jpg",
    category: "Women",
  },
];


export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Featured", "Top Selling", "Sale", "New"];

  const getFilteredProducts = () => {
    if (activeTab === "All") return sampleProducts;
    if (activeTab === "Featured") return sampleProducts.slice(0, 8);
    if (activeTab === "Top Selling") return sampleProducts.filter(p => p.discount);
    if (activeTab === "Sale") return sampleProducts.filter(p => p.discount);
    if (activeTab === "New") return sampleProducts.slice(-8);
    return sampleProducts;
  };

  const filteredProducts = getFilteredProducts().slice(0, 8);

  return (
    <div className="bg-white">
      <Hero />

      {/* Popular Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our New Collection</h2>
          <p className="mt-4 text-lg text-gray-500">Check out our most popular products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-[#121416] rounded-xl border border-[#272a2f] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
            >
              <div className="w-full h-60 bg-[#0f1113] flex items-center justify-center">
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
          ))}
        </div>
      </section>


      
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center w-full">
          <img
            src={whyChooseImg}
            alt="Perfume Bottle"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-80 lg:h-96 object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Praesentium incidunt amet deserunt illum rerum perferendis 
            quos, distinctio laudantium numquam magni.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#00092d] w-6 h-6" />
              <span className="text-gray-700 font-medium">Unique Varieties</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#00092d] w-6 h-6" />
              <span className="text-gray-700 font-medium">Fast Delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#00092d] w-6 h-6" />
              <span className="text-gray-700 font-medium">Excellent Service</span>
            </li>
          </ul>
        </div>
      </div>
    </section>


      {/* Our Store (gallery-style) */}
      <section className="py-16 bg-[#EBD9D1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-center text-3xl font-bold text-black mb-6">Our Products</h2>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition border ${
                  activeTab === tab
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-gray-700 hover:text-black hover:border-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid (simple cards to match screenshot style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
                <div className="w-full h-44 flex items-center justify-center mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-28 h-28 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-gray-800 font-medium mb-1 line-clamp-1">{p.title}</h3>
                <div className="text-[#00092d] font-semibold">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</div>
              </div>
            ))}
          </div>

          {/* Pagination (static UI) */}
          <div className="mt-10 flex justify-center gap-2">
            {[1,2,3].map((num) => (
              <button
                key={num}
                className={`w-8 h-8 rounded-sm border text-sm ${
                  num === 1 ? "bg-black text-white border-[#2a3d35]" : "bg-transparent text-black border-black hover:border-black"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
