import React from "react";
// About page for Local Face
import aboutUsImage from "../assets/aboutusbanner.png";
import aboutBanner from "../assets/g1.png";
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
    <div className="bg-[#0d0f10] text-white">
      {/* Hero Section */}
      <div
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl md:max-w-4xl p-6 md:p-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-sm md:text-base text-gray-200">
              At Local Face, we believe that perfumes are more than just scents;
              they are expressions of one's individuality and style. Our passion
              for exquisite fragrances led us to curate a collection that
              captures the essence of diverse personalities, bringing you an
              unparalleled olfactory experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 w-full h-[450px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#e58e54] mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Local Face Perfumes was founded by a group of scent enthusiasts,
            with a shared vision to celebrate individuality through fragrances.
            From our earliest blends to our latest creations, we’ve remained
            devoted to craftsmanship and quality—designing perfumes that speak
            to the heart and tell a story of culture, memory, and art of
            perfumery.
          </p>
        </div>
      </section>

      {/* Showcase Image */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img
              src={aboutUsImage}
              alt="Perfume bottles"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#e58e54] mb-10">
            What Makes Us Unique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">
                Locally Inspired
              </h4>
              <p>
                Our creations draw from meaningful cultural influences,
                resulting in fragrances that feel intimate, elegant, and true to
                you.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">
                High Quality Ingredients
              </h4>
              <p>
                We select premium, ethically sourced materials to ensure
                long-lasting, well-balanced scents with exceptional sillage.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">
                Personalized Service
              </h4>
              <p>
                From thoughtful recommendations to attentive customer care,
                we’re dedicated to making your fragrance journey memorable.
              </p>
            </div>
          </div>
          <p className="text-start text-gray-400 mt-10 max-w-4xl mx-auto">
            Join us on this olfactory adventure as we celebrate the diverse
            tapestry of scents from around the world. Discover the captivating
            aromas that embrace the essence of local cultures and connect with
            the beauty of our shared humanity.
            <br />
            <br />
            <br />
            Thank you for being a part of our
            <br />
            <br />
            <br />
            journey. With love and gratitude, The Local Face Perfumes Team
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
