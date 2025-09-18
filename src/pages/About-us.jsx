import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/parfum.jpg";
import aboutBanner from "../assets/about-us-banner.jpg";
import Footer from "../components/Footer";

const stats = [
  { value: "100+", label: "Vendors" },
  { value: "23K+", label: "Customers" },
  { value: "2K+", label: "Products" },
  { value: "5+", label: "Years Experience" },
];

const services = [
  {
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep",
    icon: "🚚",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer service",
    icon: "🛎️",
  },
  {
    title: "Quality Products",
    description: "Carefully curated selection",
    icon: "✨",
  },
  {
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: "💳",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white py-16 md:py-24"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-200">Home / About Us</p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutUsImage}
                  alt="Our Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-sm font-medium bg-black px-3 py-1 rounded-full">
                    Since 2018
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Welcome to <span className="text-[#00092d]">ShopEase</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began in a small workshop where we created our very
                first perfume blend. Each fragrance carried a story – of
                emotions, memories, and originality. Even today, we stay true to
                our roots, crafting perfumes with the same dedication and
                artistry to make your moments unforgettable.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: to provide high-quality products,
                exceptional customer service, and a seamless shopping experience
                that keeps you coming back for more.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black border border-gray-200"} p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow`}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-3xl font-bold mb-2">
                      {stat.value}
                    </p>
                    <p className="font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-[#00092d] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${index % 2 === 0 ? "bg-black text-white" : "bg-white text-black border border-gray-200"} p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Perfumes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Best Selling Perfumes</h2>
            <div className="w-20 h-1 bg-[#00092d] mx-auto"></div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Our best-selling perfumes are the ones that have touched the hearts of our customers. Each fragrance is a perfect blend of uniqueness and elegance. These perfumes are not just scents, but experiences that make you feel classy, confident, and unforgettable.
          </p>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About the Company</h2>
            <div className="w-20 h-1 bg-[#00092d] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              We are a premium perfume brand that believes in quality and luxury. Every perfume is carefully crafted with the finest ingredients to deliver a long-lasting and memorable fragrance.
            </p>
            <p className="text-gray-800 font-semibold mt-6 text-center">
              Our mission is simple – “To craft timeless fragrances that reflect your personality.”
            </p>
          </div>
        </div>
      </section>

      {/* Revive Section (Customer Connection) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Revive Section</h2>
            <div className="w-20 h-1 bg-[#00092d] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              A perfume is more than just a fragrance – it is part of your identity and mood. We believe a good fragrance has the power to revive your spirit and make every moment special.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Revive yourself with our exclusive collection – because every day deserves an unforgettable fragrance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
