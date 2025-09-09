import React from 'react'
import Footer from '../components/Footer';


export default function AboutUs() {
    return (
      <div className="bg-white">
        {/* Top Banner */}
        <div className="bg-red-500 text-white py-3 px-10 flex justify-between items-center">
          <span className="font-semibold">About Us</span>
          <span className="text-sm">Home / About Us</span>
        </div>
  
        {/* About Section with Image */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About The Carrot</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
                recusandae perspiciatis. Sequi incidunt dolore cupiditate pariatur
                earum iste beatae assumenda rerum quas temporibus magni cumque
                voluptatibus neque.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At non rerum
                cum ducimus magnam consequuntur architecto, ipsam deleniti dolorem
                doloribus suscipit voluptatibus quas provident amet.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                maxime amet architecto est exercitationem optio eum molestias corporis
                dolores, distinctio doloribus libero nesciunt quis illum? Voluptates
                deserunt adipisci voluptatibus magni sunt sed blanditiis quod
                aspernatur iusto?
              </p>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2">
              <img 
                src="/src/assets/aboutus.jpg" 
                alt="Fresh groceries" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
  
        </section>

        {/* Stats Section with Image */}
        <section className="bg-gray-50 py-16">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="lg:w-1/2">
                <img 
                  src="/src/assets/aboutus.jpg" 
                  alt="Fresh vegetables" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              {/* Stats */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <p className="text-red-500 text-3xl font-bold mb-2">0.1k</p>
                  <p className="text-gray-600 font-medium">Vendors</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <p className="text-red-500 text-3xl font-bold mb-2">23k</p>
                  <p className="text-gray-600 font-medium">Customers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <p className="text-red-500 text-3xl font-bold mb-2">2k</p>
                  <p className="text-gray-600 font-medium">Products</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <p className="text-red-500 text-3xl font-bold mb-2">5+</p>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
  
          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Product Packing</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">24X7 Support</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Delivery in 5 Days</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-2">Payment Secure</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }