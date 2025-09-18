import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";
import whyChooseImg from "../assets/megaerica_Carbonated_perfume_in_a_bottle_6a49a0c4-198a-4f33-a2d6-a0c8eee0c9d8ddef 1.png";
import bgImage from "../assets/H-1.png";
import coll1 from "../assets/about-us-banner.jpg";
import coll2 from "../assets/blog.jpg";
import coll3 from "../assets/perfume-bottle.jpg";
import coll4 from "../assets/perfume-bottle-nature.jpg";
import coll5 from "../assets/hero.jpg";
import coll6 from "../assets/Group 4.png";

const sampleProducts = [
  {
    id: 1,
    title: "Luxurious Elixir Rough",
    price: 220.0,
    image: "/src/assets/Old_fashion_balck_and_gold_color_perfume__3_-removebg-preview 1.png",
  },
  {
    id: 2,
    title: "The Golden Legacy",
    price: 160.0,
    discount: 20,
    image: "src/assets/Old_fashion_balck_and_gold_color_perfume_png_image-removebg-preview (1) 1.png",
  },
  {
    id: 3,
    title: "Luxurious Elixir",
    price: 250.0,
    image: "src/assets/Old_fashion_balck_and_gold_color_perfume-removebg-preview 1.png",
  },
  {
    id: 4,
    title: "Luxurious Essence",
    price: 260.0,
    discount: 17,
    image: "src/assets/Old_fashion_gold_color_perfume__1_-removebg-preview 1.png",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [isHover, setIsHover] = useState(false);
  const tabs = ["All", "Featured", "Top Selling", "Sale", "New"];
  // Carousel ref and scroll handler
  const sliderRef = useRef(null);
  const scrollBy = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const amount = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  // Autoplay loop
  useEffect(() => {
    if (isHover) return; // pause when hovering
    const el = sliderRef.current;
    if (!el) return;
    const tick = () => {
      const card = el.querySelector('[data-card]');
      const amount = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - amount - 2;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' });
      }
    };
    const id = setInterval(tick, 2500);
    return () => clearInterval(id);
  }, [isHover]);

  const getFilteredProducts = () => {
    if (activeTab === "All") return sampleProducts;
    if (activeTab === "Featured") return sampleProducts.slice(0, 8);
    if (activeTab === "Top Selling")
      return sampleProducts.filter((p) => p.discount);
    if (activeTab === "Sale") return sampleProducts.filter((p) => p.discount);
    if (activeTab === "New") return sampleProducts.slice(-8);
    return sampleProducts;
  };

  const filteredProducts = getFilteredProducts().slice(0, 8);

  return (
    <div className="bg-white">
      <Hero />

      {/* Hero-style Promo banner with responsive height */}
      <section
        className="relative w-full text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-28 flex flex-col items-center justify-center text-center gap-4 min-h-[360px] md:min-h-[500px] lg:min-h-[660px]">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#AB572D] mb-4 md:mb-6">
            Welcome to Local Face
          </h2>
          <p className="text-sm md:text-base leading-7 text-gray-200 max-w-3xl md:max-w-4xl mx-auto">
            Welcome to Local Face Perfumes, where the spirit of victory and
            triumph come alive through scents that empower and inspire. Our
            curated collection, aptly named "Victory Scented," is a celebration
            of success and elegance, designed to unleash your victorious
            essence. Indulge in the sweet taste of triumph with captivating
            fragrances that tell the tale of your achievements. At Local Face,
            we believe that every victory deserves a signature scent, and we are
            dedicated to providing unforgettable fragrances that elevate your
            spirit and empower your journey.
          </p>
        </div>
      </section>

      {/* Values/Why Us section - auto height with consistent paddings */}
      <section className="py-16 bg-[#1C1C1C] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-white mb-6">
              At Local Face, our perfume retail store is built on a foundation
              of passion and authenticity. We believe in celebrating the
              individuality of every customer, providing a diverse collection of
              scents that resonate with their unique personality and style. Our
              dedicated team of fragrance enthusiasts is committed to creating a
              welcoming and inclusive environment, where connections are forged,
              and inspiration thrives. Embracing sustainability and continuous
              learning, Local Face strives to be more than just a shopping
              destination; we are a community that inspires and empowers
              individuals on their fragrance journey.
            </p>
          </div>
        </div>
      </section>

      {/* Best selling products - Carousel */}
      <section className="bg-black py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#AB572D]">Best selling products</h2>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 sm:px-8 no-scrollbar"
              style={{ scrollbarWidth: 'none' }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              {[...sampleProducts, ...sampleProducts].map((p, idx) => (
                <article
                  key={`${p.id}-${idx}`}
                  data-card
                  className="min-w-[240px] sm:min-w-[260px] lg:min-w-[300px] snap-start bg-gradient-to-b from-[#3D3D3D] to-[#858585] rounded-xl overflow-hidden shadow-lg flex flex-col items-center"
                >
                  <div className="w-full h-64 sm:h-72 flex items-center justify-center bg-[#3D3D3D]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-56 sm:h-64 w-auto object-contain drop-shadow-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="w-full px-5 pb-5 bg-[#3D3D3D]">
                    <h3 className="text-white text-base font-medium mb-1">{p.title}</h3>
                    <div className="flex items-center justify-start gap-4">
                      <span className="text-[#E58E54] font-semibold">
                        ${p.price?.toFixed ? p.price.toFixed(2) : p.price}
                      </span>
                      <span className="text-gray-200 text-sm">100ml</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Collections - image gallery */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-[#AB572D] mb-10">Our Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Designer Delights Collection', img: coll1 },
              { title: 'Travel Essentials Collection', img: coll2 },
              { title: 'Special Occasions Collection', img: coll3 },
              { title: 'Seasonal Sensations Collection', img: coll4 },
              { title: 'Vintage Treasures Collection', img: coll5 },
              { title: 'Modern Classics Collection', img: coll6 },
            ].map(({ title, img }, idx) => (
              <div key={title} className={`relative rounded-xl overflow-hidden group`}>
                <img src={img} alt={title} className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white text-sm sm:text-base drop-shadow">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
