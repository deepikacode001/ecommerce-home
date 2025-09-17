import React from "react";
import heroImg from "../assets/parfum.jpg";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Keep your body fresh with <br>
            </br>a good  perfume
          </h1>
          <p className="text-gray-600 mb-6">
          Discover our exclusive range of perfumes crafted to perfection
          </p>
          <button className="bg-[#00092d] text-white px-6 py-3 rounded-lg shadow hover:bg-[#00092d] transition">
          Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <img
            src={heroImg}
            alt="Perfume Bottle"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-72 md:h-80 lg:h-96 object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
