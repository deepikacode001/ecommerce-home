import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import products from "../data/products";

// Fallback hero if a product isn't found
// Use product image as-is; no static fallback import to avoid missing asset issues

const formatINR = (n: number) =>
  `Rs. ${Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function ProductDetails() {
  const params = useParams();
  const idParam = params?.id as string | undefined;
  const product = useMemo(() => {
    const pid = Number(idParam);
    return products.find((p) => p.id === pid) ?? products[0];
  }, [idParam]);

  const [qty, setQty] = useState<number>(1);
  const inc = () => setQty((q) => Math.min(q + 1, 9));
  const dec = () => setQty((q) => Math.max(1, q - 1));

  const thumbnails = useMemo(() => {
    // Reuse product image 3 times for a simple gallery mock
    return [product.image, product.image, product.image];
  }, [product.image]);

  return (
    <div className="min-h-screen bg-[#0d0f10] text-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-sm text-gray-400">
        <Link to="/" className="hover:text-white">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-white">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{product.title}</span>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div>
          <div className="bg-[#0f1113] border border-[#2b2f35] rounded-xl p-4 flex items-center justify-center min-h-[520px]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[480px] w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {thumbnails.map((src, idx) => (
              <button key={idx} className={`h-20 w-20 rounded-md border ${idx === 0 ? "border-[#E58E54]" : "border-[#2b2f35]"} bg-[#121416] flex items-center justify-center overflow-hidden`}>
                <img src={src} alt={`thumb-${idx}`} className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{product.title || "Luxurious Elixir"}</h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base max-w-prose">
            Step into a world of unparalleled opulence with this exquisite fragrance featuring a symphony of golden and
            warm notes. Crafted with dedication and sophistication, it reveals new layers as the day unfolds, leaving an
            unforgettable trail.
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = (product.rating || 0) >= i + 1;
              return (
                <Star key={i} size={16} className={filled ? "text-[#E58E54]" : "text-gray-600"} fill={filled ? "currentColor" : "none"} />
              );
            })}
            {product.reviews ? (
              <span className="text-xs text-gray-400 ml-2">{product.reviews} reviews</span>
            ) : null}
          </div>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-3">
            <div className="text-2xl font-semibold text-[#E58E54]">{formatINR(product.price)}</div>
            {product.oldPrice ? (
              <div className="text-gray-500 line-through">{formatINR(product.oldPrice)}</div>
            ) : null}
            {product.volume ? (
              <div className="text-gray-400 text-sm ml-2">{product.volume}</div>
            ) : null}
          </div>

          {/* Quantity + Wishlist + Add to Bag */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center bg-[#121416] border border-[#2b2f35] rounded-md">
              <button onClick={dec} className="px-3 py-2 text-lg leading-none">-</button>
              <span className="px-4 py-2 border-x border-[#2b2f35]">{qty}</span>
              <button onClick={inc} className="px-3 py-2 text-lg leading-none">+</button>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#121416] border border-[#2b2f35] rounded-md text-gray-200">
              <Heart size={16} />
              Wishlist
            </button>
          </div>

          <button className="mt-4 w-full sm:w-auto px-6 py-3 bg-[#E58E54] hover:bg-[#cf7b42] text-black font-medium rounded-md transition">Add to Bag</button>

          <p className="mt-2 text-xs text-gray-500">Free shipping on orders over Rs. 2,499</p>
        </div>
      </div>

      {/* Descriptions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <section className="py-6 border-t border-[#1a1d21]">
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <p className="text-gray-300 leading-7 max-w-4xl">
            This piece is crafted to evoke confidence and grace. As it settles, subtle layers unfold—offering a refined
            presence from morning to dusk. A perfect companion for celebrations and everyday moments alike.
          </p>
        </section>

        <section className="py-6">
          <h3 className="text-lg font-semibold mb-2">The Golden Overture</h3>
          <p className="text-gray-300 leading-7 max-w-4xl">
            Opening with bright citrus and sun-kissed fruits, the heart unveils golden roses and delicate blooms, while
            the base glows with amber, vanilla, and sandalwood—balancing warmth and sophistication.
          </p>
        </section>

        {/* Key Notes */}
        <section className="py-6">
          <h3 className="text-lg font-semibold mb-4">Key Notes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Top Note", desc: "Citrus Accord, Sun-kissed Fruits" },
              { title: "Heart Note", desc: "Golden Roses, Rare Blooms" },
              { title: "Base Note", desc: "Amber, Vanilla, Sandalwood" },
            ].map((n, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto h-28 w-28 rounded-full bg-[#121416] border border-[#2b2f35]"></div>
                <div className="mt-3 text-sm text-gray-400">{n.title}</div>
                <div className="text-gray-200">{n.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h3 className="text-lg font-semibold mb-2">The Heart of Elegance</h3>
          <p className="text-gray-300 leading-7 max-w-4xl">
            Designed for the discerning, this fragrance is a statement of poise and presence. With every spritz, experience
            a tapestry of gleaming gold and opulent warmth that endures.
          </p>
        </section>

        <section className="py-6">
          <h3 className="text-lg font-semibold mb-2">The Ultimate Expression of Luxury</h3>
          <p className="text-gray-300 leading-7 max-w-4xl">
            Elevate your ritual with a signature that reflects your taste and ambition—crafted to be noticed and never
            forgotten.
          </p>
        </section>
      </div>
    </div>
  );
}

