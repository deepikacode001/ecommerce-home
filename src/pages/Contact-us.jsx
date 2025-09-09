import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-red-500 text-white py-3 px-10 flex justify-between items-center">
        <span className="font-semibold">Contact Us</span>
        <span className="text-sm">Home / Contact Us</span>
      </div>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full text-red-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Our Location</h4>
                  <p className="text-gray-600">123 Grocery Street, Food City, FC 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full text-red-500">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                  <p className="text-gray-600">+1 (987) 654-321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full text-red-500">
                  <FaEnvelope size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Email Address</h4>
                  <p className="text-gray-600">info@thebox.com</p>
                  <p className="text-gray-600">support@thebox.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full text-red-500">
                  <FaClock size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-600">Saturday: 10:00 - 16:00</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152561500004!2d-73.9878446845938!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}