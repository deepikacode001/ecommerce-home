import React from "react";
import { motion } from "framer-motion";
import chargerImg from "../assets/charger.jpg";
import headphoneImg from "../assets/headphone.jpg";
import powerbankImg from "../assets/powebank.jpg";

const promos = [
  {
    id: 1,
    title: "Premium Mobile Accessories",
    subtitle: "Upgrade your tech game",
    button: "Shop Now",
    image: chargerImg,
    bg: "bg-gradient-to-br from-red-50 to-red-100",
    buttonBg: "bg-red-600 hover:bg-red-700"
  },
  {
    id: 2,
    title: "Audio Excellence",
    subtitle: "Crystal clear sound",
    button: "Explore",
    image: headphoneImg,
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    buttonBg: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: 3,
    title: "Power On The Go",
    subtitle: "Never run out of battery",
    button: "Discover",
    image: powerbankImg,
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    buttonBg: "bg-green-600 hover:bg-green-700"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PromoSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Featured Collections
      </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {promos.map((promo) => (
          <motion.div
            key={promo.id}
            className={`${promo.bg} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col`}
            variants={item}
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-6">{promo.subtitle}</p>
              </div>
              <button 
                className={`${promo.buttonBg} text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 self-start`}
              >
                {promo.button}
              </button>
            </div>
            <div className="h-48 relative overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
