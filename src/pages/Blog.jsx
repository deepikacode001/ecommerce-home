 import React from "react";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-500 text-white py-3 px-6 text-lg font-semibold">
        Blog Details
      </header>

      {/* Blog Image */}
      <div className="max-w-5xl mx-auto p-6">
        <img
          src="/src/assets/blog.jpg"
          alt="Blog Main"
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />

        {/* Blog Meta */}
        <div className="mt-6 text-sm text-gray-500">
          <span className="text-red-500 font-semibold">By Admin</span> / 07 Comments / Date - 09.09.2024
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold mt-3 text-gray-800">
          Health Benefits of a Row food
        </h1>

        {/* Blog Content */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia
          aut sunt reprehenderit natus, soluta officia iure enim itaque, hic qui
          exercitationem et odit beatae debitis dolore molestiae quis ullam.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum
          obcaecati nobis rem voluptatum laudantium magni veritatis amet?
          Aspernatur est quisquam modi laudantium. Assumenda neque vitae corrupti
          asperiores, quos vel eligendi hic hic numquam reprehenderit dolorem
          placeat natus est.
        </p>

        {/* Sub Images Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/fresh-juice-glass-apple_144627-24894.jpg"
              alt="Juice"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, dolorum!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/top-view-healthy-foods-arrangement_23-2148723262.jpg"
              alt="Healthy Food"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, dolorum!
              </p>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-6 p-4 border-l-4 border-red-500 bg-gray-100 rounded">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
            saepe odio quos ab officiis deleniti illo numquam? Quam blanditiis
            possimus quae, iure dolorum, est aliquam deserunt pariatur voluptate
            cum iure exercitationem rem.
          </p>
          <p className="mt-3 font-semibold text-red-600">John Martin</p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {['Cabbage', 'Apple', 'Meat Food'].map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
