import React from "react";

const promos = [
  {
    id: 1,
    title: "Everyday Fresh &  Clean with Our Products",
    button: "Shop Now",
    image:
      "/src/assets/onion.png",
    bg: "bg-red-50",
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    button: "Shop Now",
    image:
      "/src/assets/fruit-drink.jpg",
    bg: "bg-pink-50",
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    button: "Shop Now",
    image:
      "/src/assets/vegetable.png",
    bg: "bg-blue-50",
  },
];

export default function PromoSection() {
  return (
    <section className="w-full px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {promos.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between items-center p-6 rounded-lg shadow-md ${item.bg} h-70`} 
          // 👆 fixed height (h-56 ≈ 224px)
        >
          {/* Left: Text */}
          <div className="flex flex-col justify-center max-w-[60%]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-snug">
              {item.title}
            </h3>
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition w-28">
              {item.button}
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-45 h-45 object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
