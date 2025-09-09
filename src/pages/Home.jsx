import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const sampleProducts = [
  {
    id: 1,
    title: "Fresh Organic Apples",
    price: 3.99,
    oldPrice: 4.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1567306226416-4f2896ce0971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
    category: "Fruits",
    rating: 4.5,
    seller: "FreshFarm",
    isHot: true
  },
  {
    id: 2,
    title: "Juicy Watermelon",
    price: 5.99,
    oldPrice: 7.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Fruits",
    rating: 4.8,
    seller: "FruitMaster",
    isHot: true
  },
  {
    id: 3,
    title: "Organic Carrots",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Vegetables",
    rating: 4.3,
    seller: "VeggieLand"
  },
  {
    id: 4,
    title: "Fresh Salad Mix",
    price: 4.99,
    oldPrice: 6.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWQlMjBtaXh8ZW58MHx8MHx8fDA%3D",
    category: "Salads",
    rating: 4.6,
    seller: "GreenLeaf",
    isHot: true
  },
  {
    id: 5,
    title: "Organic Bananas",
    price: 1.99,
    oldPrice: 2.49,
    discount: 20,
    image: "https://images.unsplash.com/photo-1571771894820-9b6b5c3e8c6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Fruits",
    rating: 4.7,
    seller: "TropicalFruits",
    isHot: true
  },
  {
    id: 6,
    title: "Cherry Tomatoes",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1591620755675-f3f93589d4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwdG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
    category: "Vegetables",
    rating: 4.4,
    seller: "TomatoKing"
  },
  {
    id: 7,
    title: "Fresh Avocados",
    price: 2.99,
    oldPrice: 3.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Fruits",
    rating: 4.6,
    seller: "AvocadoLovers",
    isHot: true
  },
  {
    id: 8,
    title: "Strawberries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww",
    category: "Berries",
    rating: 4.9,
    seller: "BerryBest"
  },
  {
    id: 9,
    title: "Organic Spinach",
    price: 3.29,
    oldPrice: 3.99,
    discount: 18,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Leafy Greens",
    rating: 4.5,
    seller: "GreenHarvest",
    isHot: true
  },
  {
    id: 10,
    title: "Red Bell Peppers",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwYmVsbCUyMHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Vegetables",
    rating: 4.6,
    seller: "PepperFarm"
  },
  {
    id: 11,
    title: "Organic Blueberries",
    price: 5.49,
    oldPrice: 6.99,
    discount: 21,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8fDA%3D",
    category: "Berries",
    rating: 4.8,
    seller: "BerryBest",
    isHot: true
  },
  {
    id: 12,
    title: "Fresh Broccoli",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY29jbGl8ZW58MHx8MHx8fDA%3D",
    category: "Vegetables",
    rating: 4.4,
    seller: "VeggieLand"
  }
];

const bestSellers = [
  {
    id: 5,
    title: "Organic Bananas",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1571771894820-9b6b5c3e8c6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Fruits",
    rating: 4.7,
    seller: "TropicalFruits"
  },
  {
    id: 6,
    title: "Cherry Tomatoes",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1591620755675-f3f93589d4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwdG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
    category: "Vegetables",
    rating: 4.4,
    seller: "TomatoKing",
    isHot: true
  },
  {
    id: 7,
    title: "Avocado",
    price: 2.99,
    oldPrice: 3.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Fruits",
    rating: 4.6,
    seller: "AvocadoLovers"
  },
  {
    id: 8,
    title: "Strawberries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww",
    category: "Berries",
    rating: 4.9,
    seller: "BerryBest",
    isHot: true
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Popular Products */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Popular Products</h2>
          <p className="mt-4 text-lg text-gray-500">Check out our most popular products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Daily Best Sells */}
      <section className="bg-gray-50 py-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Daily Best Sells</h2>
            <p className="mt-4 text-lg text-gray-500">Top selling products today</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Deals of the Day</h2>
          <p className="mt-4 text-lg text-gray-500">Limited time offers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...sampleProducts, ...bestSellers]
            .filter(product => product.discount)
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
      </section>
      <Footer />
    </div>
  );
}
