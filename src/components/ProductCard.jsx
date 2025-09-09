export default function ProductCard({ product }) {
  return (
    <div className=" shadow-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-60 bg-gray-50 flex items-center justify-center p-4">
        {/* Hot Badge */}
        {product.isHot && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-md z-10 shadow-md flex items-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
            HOT
          </span>
        )}
        
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
            {product.discount}% OFF
          </span>
        )}

        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category */}
        {product.category && (
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            {product.category}
          </p>
        )}

        {/* Title */}
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2 h-12">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          {product.rating && (
            <span className="ml-1 text-gray-500 text-sm">({product.rating})</span>
          )}
        </div>

        {/* Seller */}
        {product.seller && (
          <p className="text-sm text-gray-500 mb-3">
            By <span className="text-red-500 font-medium">{product.seller}</span>
          </p>
        )}

        {/* Price + Add Button */}
        <div className="mt-4 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline">
              <span className="text-green-600 font-bold text-xl">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 text-sm line-through ml-2">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <button 
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2.5 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
