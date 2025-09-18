import React from "react";
import Footer from "../components/Footer";
import heroImg from "../assets/siran__chan_Perfume_set_with_wholesale_for_sale_c88211da-f0f2-4adc-8903-439a0d003f02 1.png";
import bottleMacro from "../assets/dark_redeemer_luxury_perfume_photography_masculine_sandalwood_b_253fc698-f054-467d-b059-b68a0104528a 1.png";
import trioImg from "../assets/dartistana_create_a_professional_product_shoot_of_3_perfume_bot_3e6bf181-e7e3-410a-96fa-977eb5e88c24 1.png";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#0d0f10] text-white">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <p className="text-center text-xs text-gray-400">January 5th • Perfume Collections</p>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3 leading-snug">
          The Art of Curating a Luxury Perfume Collection:
          <br className="hidden sm:block" /> A Symphony of Scents and Stories
        </h1>
        <div className="mt-8 rounded-xl overflow-hidden border border-[#1a1d21]">
          <img src={trioImg} alt="Perfume Trio" className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover" />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-300 leading-7">
          Building a personal perfume library is a celebration of self-expression. Like a fine selection of your
          favorite music, each bottle preserves a memory, mood, or chapter of life. This guide explores how to craft
          a collection that feels intentional and inspiring—curated with quality, story, and style.
        </p>

        <hr className="my-8 border-[#1a1d21]" />

        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl font-semibold text-[#e58e54] mb-3">The Perfume Collection: A Personal Overture</h2>
            <p className="text-gray-300 leading-7">
              Your collection should be a reflection of you. Begin by choosing a few personal “pillars”—daytime freshness,
              evening elegance, and a signature scent. Add seasonal twists or travel finds to broaden your palette without
              losing your unique voice.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-[#1a1d21]">
            <img src={bottleMacro} alt="Citrus and florals" className="w-full h-64 object-cover" />
          </div>
        </section>

        <section className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden border border-[#1a1d21] order-first lg:order-none">
            <img src={heroImg} alt="Exploring notes" className="w-full h-64 object-cover" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#e58e54] mb-3">Exploring the Fragrance Palette</h2>
            <p className="text-gray-300 leading-7">
              From citrus and aromatics to woods, ambers, and gourmands—notes are your colors. Discover which families you
              gravitate toward, then explore flankers and concentrations (EDT/EDP/Parfum) to find your preferred intensity
              and performance.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#e58e54] mb-3">Perfume as an Art Form</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-300 leading-7">
                Presentation is part of the experience—display your favorites on a clean, low-light shelf away from heat.
                Keep boxes for limited editions, and label decants for easy reference. Maintain your bottles by keeping
                sprayers clean and caps secured to preserve longevity.
              </p>
              <p className="text-gray-300 leading-7 mt-4">
                Curating thoughtfully turns a group of bottles into a living gallery of identity and taste.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#1a1d21]">
              <img src={trioImg} alt="Bottle trio" className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-2">
          {["Curating", "Notes", "Longevity", "Display"].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-[#1a1d21] text-gray-300 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPage;
