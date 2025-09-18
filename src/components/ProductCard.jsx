import React from "react";

// Paths to the images that were provided in the conversation
const bookImg = "/mnt/data/3f042b3e-d79a-41a0-bf6f-6ca2ddfbea9d.png";
const perfumeImg = "/mnt/data/9d3c00ec-c3da-49b6-b1d1-4fd74599613e.png";

export default function ProductCardMatch() {
  const products = [
    {
      image: bookImg,
      title: "Book Discovering the Last God",
      category: "by Prabhuji (Paperback - English)",
      price: 1700.0,
    },
    {
      image: perfumeImg,
      title: "Mystic Oud",
      category: "Premium fragrance",
      price: 2999.0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {products.map((product, idx) => (
          <article
            key={idx}
            className="bg-black text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[50px] w-full"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="bg-gray-900 rounded-lg overflow-hidden h-[420px] w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="mt-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{product.category}</p>
                <p className="mt-4 font-medium text-amber-300">
                  Rs. {Number(product.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>

                <button className="mt-auto w-full bg-amber-400 text-black py-3 rounded-md font-semibold hover:opacity-95">
                  Add to cart
                </button>

                <div className="mt-3 text-xs text-gray-400">♡ Add to Wishlist</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}