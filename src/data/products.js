// Centralized products dataset for Products page and other sections
// Prices are numeric to work with ProductCard's price.toFixed(2)

import img1 from "../assets/1 (1).png";
import img2 from "../assets/1 (2).png";
import img3 from "../assets/1 (3).png";
import img4 from "../assets/1 (4).png";
import img5 from "../assets/1 (5).png";
import img6 from "../assets/1 (6).png";
import img7 from "../assets/1 (7).png";
import img8 from "../assets/1 (8).png";


const products = [
  { id: 1, title: "Luxurious Elixir Rough", price: 2300, oldPrice: 2590, image: img1, category: "him", rating: 4.7, reviews: 1134, volume: "100ml" },
  { id: 2, title: "The Golden Legacy", price: 1600, oldPrice: 1890, image: img3, category: "him", rating: 4.6, reviews: 985, volume: "100ml" },
  { id: 3, title: "Luxurious Elixir", price: 2500, oldPrice: 2790, image: img2, category: "him", rating: 4.8, reviews: 1561, volume: "100ml" },
  { id: 4, title: "Luxurious Essence", price: 2600, oldPrice: 2890, image: img4, category: "him", rating: 4.7, reviews: 1272, volume: "100ml" },

  { id: 5, title: "Aurum Aura", price: 3000, oldPrice: 3290, image: img5, category: "her", rating: 4.9, reviews: 1104, volume: "100ml" },
  { id: 6, title: "Gleaming Glint", price: 1600, oldPrice: 1890, image: img6, category: "her", rating: 4.6, reviews: 1141, volume: "100ml" },
  { id: 7, title: "Gilded Elixir Rough", price: 1700, oldPrice: 1990, image: img7, category: "her", rating: 4.7, reviews: 1026, volume: "100ml" },
  { id: 8, title: "Golden Luminary", price: 1200, oldPrice: 1490, image: img8, category: "her", rating: 4.5, reviews: 890, volume: "100ml" },

  { id: 9, title: "Decadent Opal", price: 1800, oldPrice: 2090, image: img1, category: "him", rating: 4.6, reviews: 1001, volume: "100ml" },
  { id: 10, title: "Gilded Elixir", price: 2000, oldPrice: 2290, image: img2, category: "her", rating: 4.8, reviews: 1168, volume: "100ml" },
  { id: 11, title: "Glamourous Glit", price: 1600, oldPrice: 1890, image: img3, category: "her", rating: 4.6, reviews: 1044, volume: "100ml" },
  { id: 12, title: "Luxury Enigma", price: 1900, oldPrice: 2090, image: img4, category: "him", rating: 4.7, reviews: 1008, volume: "100ml" }
];

export default products;
