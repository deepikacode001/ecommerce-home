import React from "react";
import { Link } from "react-router-dom";
import aboutBanner from "../assets/hero-1.jpg";
import PromoSection from "./PromoSection";
export default function HeroSection() {
  return (
    <section
      className="relative text-white w-full h-[360px] sm:h-[340px] md:h-[440px] lg:h-[660px]"
      style={{
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white mb-6">
          Elevate Your Spirit with , <br/> Victory Scented Fragrances!
          </h1>
          <p className="text-gray-200 mb-6 text-lg font-medium">
          Shop now and embrace the sweet smell of  <br />victory with Local Face. 

          </p>
          <Link to="/contact-us" className="inline-block bg-[#AB572D] text-white px-6 py-3 rounded-lg shadow hover:bg-[#AB572D] transition">
            Shop Now
          </Link>
        </div>
      </div>
      <PromoSection />
    </section>
  );
}
