import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaUser, FaComment, FaEye } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Organic Food for Your Health',
    excerpt: 'Discover how organic food can improve your health and wellbeing with these amazing benefits...',
    date: 'September 15, 2023',
    author: 'Admin',
    comments: 5,
    views: 124,
    image: '/src/assets/blog1.jpg'
  },
  {
    id: 2,
    title: '10 Easy and Healthy Breakfast Recipes',
    excerpt: 'Start your day right with these quick and nutritious breakfast ideas that will keep you energized...',
    date: 'September 10, 2023',
    author: 'Chef Maria',
    comments: 8,
    views: 201,
    image: '/src/assets/blog2.jpg'
  },
  {
    id: 3,
    title: 'Seasonal Fruits and Vegetables: What to Eat This Month',
    excerpt: 'Find out which fruits and vegetables are in season this month and how to incorporate them...',
    date: 'September 5, 2023',
    author: 'Nutritionist John',
    comments: 12,
    views: 315,
    image: '/src/assets/blog3.jpg'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Meal Prepping',
    excerpt: 'Learn how to save time and eat healthy with these meal prepping tips and tricks...',
    date: 'August 28, 2023',
    author: 'Meal Prep Pro',
    comments: 7,
    views: 189,
    image: '/src/assets/blog4.jpg'
  },
  {
    id: 5,
    title: 'Superfoods You Should Add to Your Diet',
    excerpt: 'Discover the top superfoods packed with nutrients that can boost your health and energy levels...',
    date: 'August 20, 2023',
    author: 'Health Expert',
    comments: 15,
    views: 276,
    image: '/src/assets/blog5.jpg'
  },
  {
    id: 6,
    title: 'Sustainable Eating: How to Make a Difference',
    excerpt: 'Learn how your food choices impact the environment and how to eat more sustainably...',
    date: 'August 15, 2023',
    author: 'Eco Warrior',
    comments: 9,
    views: 198,
    image: '/src/assets/blog6.jpg'
  }
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-red-500 text-white py-3 px-10 flex justify-between items-center">
        <span className="font-semibold">Our Blog</span>
        <span className="text-sm">Home / Blog</span>
      </div>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Latest News & Articles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-1" /> {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
                  <span className="flex items-center">
                    <FaComment className="mr-1" /> {post.comments} Comments
                  </span>
                  <span className="flex items-center">
                    <FaEye className="mr-1" /> {post.views} Views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1">
            <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-red-500 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div> */}
      </section>

      {/* Newsletter */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest updates, news and product offers via email</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}