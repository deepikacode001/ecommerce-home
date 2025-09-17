// Minimal footer with newsletter, links row, and copyright

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Single row of footer links like the reference
  const footerLinks = [
    { name: 'ABOUT', path: '/about-us' },
    { name: 'PRODUCT', path: '/products' },
    { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact-us' }
  ];

  return (
    <footer className="bg-[#0d0f10] text-white">
      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h3 className="text-lg tracking-wide mb-6">GET OUR NEWSLETTER</h3>
        <div className="mx-auto max-w-md">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent text-sm placeholder-gray-400 text-white border-0 border-b border-gray-600 focus:ring-0 focus:border-white outline-none pb-2"
          />
          <div className="w-6 h-1 bg-[#7fd4be] mx-auto mt-4 rounded"></div>
        </div>
      </div>

      {/* Links Row */}
      <div className="border-t border-[#1a1d21]">
        <nav className="max-w-5xl mx-auto px-6 py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-wide text-gray-300">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1a1d21]">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <p className="text-xs text-gray-400">© {currentYear} PerfumeBrand — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
