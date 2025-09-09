import React from "react";
import PromoSection from "./PromoSection";

export default function HeroSection() {
  return (
    <>
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/src/assets/banner.jpg')", // 👈 apni image ka link yaha daalo
        }}
      >
        {/* Overlay dark layer for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 md:px-12">
          <p className="text-gray-200 text-lg mb-2">Super Delicious</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            THE BEST WAY TO <br /> STUFF YOUR WALLET.
          </h1>
          <p className="text-white/80 mt-4 text-lg">Today's Best Deal</p>

          {/* Circle Discount Badge */}
          <div className="mt-6 flex items-center gap-6">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-white text-xl font-bold">
              50% OFF
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
              ORDER NOW
            </button>
          </div>
        </div>
      </section>
      
      {/* Promo Section */}
      <div className="container mx-auto px-4 py-8">
        <PromoSection />
      </div>
    </>
  );
}
