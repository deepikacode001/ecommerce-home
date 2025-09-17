// Centralized products dataset for Products page and other sections
// Prices are numeric to work with ProductCard's price.toFixed(2)

import img1 from "../assets/perfume-bottle-nature.jpg";
import img2 from "../assets/parfum.jpg";
import img3 from "../assets/perfume-bottle.jpg";
import img4 from "../assets/hero.jpg";

const products = [
  { id: 1, title: "Mystic Oud", price: 2999, oldPrice: 3499, image: img1, category: "him" },
  { id: 2, title: "Amber Night", price: 3299, oldPrice: 3999, image: img3, category: "him" },
  { id: 3, title: "Cedar Wood", price: 2799, oldPrice: 3299, image: img2, category: "him" },
  { id: 4, title: "Ocean Breeze", price: 1899, oldPrice: 2299, image: img4, category: "him" },

  { id: 5, title: "Rose Bloom", price: 1999, oldPrice: 2499, image: img1, category: "her" },
  { id: 6, title: "Vanilla Essence", price: 2499, oldPrice: 2999, image: img3, category: "her" },
  { id: 7, title: "Jasmine Delight", price: 2199, oldPrice: 2699, image: img2, category: "her" },
  { id: 8, title: "Lavender Calm", price: 1999, oldPrice: 2399, image: img1, category: "her" }
];

export default products;
