import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTruck, FaShieldAlt, FaHeadset, FaCreditCard, FaRegClock } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' },
  ];

  const customerService = [
    { name: 'My Account', path: '/account' },
    { name: 'Order Tracking', path: '/track-order' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-red-500" />, text: '6391 Elgin St. Celina, Delaware 10299' },
    { icon: <FaPhoneAlt className="text-red-500" />, text: '+84 1102 2703' },
    { icon: <FaEnvelope className="text-red-500" />, text: 'hello@thebox.com' },
    { icon: <FaRegClock className="text-red-500" />, text: '10:00 - 18:00, Mon - Sat' }
  ];

  return (
    <footer className="bg-[#E9E9E9] text-black">
      {/* Contact Info Bar */}
      {/* <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaTruck className="text-green-500 text-2xl mr-3" />
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-black">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <FaShieldAlt className="text-green-500 text-2xl mr-3" />
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-400">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaHeadset className="text-green-500 text-2xl mr-3" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-400">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src="/src/assets/logo.png" alt="logo" />
            <p className="mb-4 text-black">The Home of Fresh Products</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-black hover:text-white transition"><FaFacebook size={20} /></a>
              <a href="#" className="text-black hover:text-white transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-black hover:text-white transition"><FaInstagram size={20} /></a>
              <a href="#" className="text-black hover:text-white transition"><FaYoutube size={20} /></a>
              <a href="#" className="text-black hover:text-white transition"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-black hover:text-white transition inline-block py-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((service, index) => (
                <li key={index}>
                  <a href={service.path} className="text-black hover:text-white transition inline-block py-1">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">{item.icon}</span>
                  <span className="text-black">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">TheBox Company {currentYear}. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
