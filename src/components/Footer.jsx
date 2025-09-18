// Multi-column footer with newsletter, social icons, link groups, and copyright

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer columns content
  const columns = [
    {
      title: 'Categories',
      links: ['Fashion', 'Jewelry', 'Sports', 'Electronics', 'Indoor'],
    },
    {
      title: 'Shopping',
      links: ['Payments', 'Delivery options', 'Buyer protection'],
    },
    {
      title: 'Pages',
      links: ['About Us', 'Shop', 'Contact Us', 'Services', 'Blog'],
    },
  ];

  return (
    <footer className="bg-[#0d0f10] text-white">
      {/* Top content: Newsletter + Link Columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16">
          {/* Newsletter column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-wide mb-3">BORCELLE PERFUME</h2>
            <h3 className="text-lg font-medium mb-2">Subscribe to Our Newsletter:</h3>
            <p className="text-sm text-gray-300 mb-5 max-w-md">Receive updates on new arrivals and special promotions!</p>

            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md">
              <input
                type="email"
                required
                placeholder="Your email here"
                className="flex-1 rounded-l-md bg-[#131618] text-sm placeholder-gray-400 text-white border border-[#2a2e33] focus:outline-none focus:ring-1 focus:ring-[#e58e54] px-4 py-3"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-r-md bg-[#e58e54] text-black font-medium hover:bg-[#f09b61] transition-colors"
              >
                Submit
              </button>
            </form>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'Twitter', href: '#', icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.162 5.656c-.74.328-1.536.55-2.372.65a4.11 4.11 0 0 0 1.804-2.27 8.2 8.2 0 0 1-2.607.996 4.098 4.098 0 0 0-6.98 3.74A11.63 11.63 0 0 1 3.17 4.67a4.095 4.095 0 0 0 1.27 5.465 4.072 4.072 0 0 1-1.858-.513v.052a4.098 4.098 0 0 0 3.286 4.017c-.45.122-.924.141-1.384.053a4.102 4.102 0 0 0 3.83 2.847A8.22 8.22 0 0 1 2 18.408 11.61 11.61 0 0 0 8.29 20.25c7.545 0 11.675-6.252 11.675-11.67 0-.178-.004-.355-.012-.53.802-.579 1.5-1.3 2.06-2.094Z"/></svg>
                ) },
                { label: 'Facebook', href: '#', icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.026 3.657 9.2 8.438 10.005v-7.08H7.898v-2.925h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.239.196 2.239.196v2.47h-1.261c-1.244 0-1.632.776-1.632 1.571v1.887h2.773l-.443 2.926h-2.33v7.08C18.343 21.26 22 17.085 22 12.06Z"/></svg>
                ) },
                { label: 'LinkedIn', href: '#', icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.942v5.663H9.353V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM3.56 20.452h3.556V9H3.56v11.452Z"/></svg>
                ) },
                { label: 'Instagram', href: '#', icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.8A5.2 5.2 0 1 0 17.2 13 5.2 5.2 0 0 0 12 7.8Zm0 8.4A3.2 3.2 0 1 1 15.2 13 3.2 3.2 0 0 1 12 16.2ZM18 6.6a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 6.6Z"/></svg>
                ) },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[#131618] text-gray-300 hover:text-white hover:bg-[#1a1d21] border border-[#2a2e33] flex items-center justify-center transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="text-sm">
              <h4 className="text-gray-200 font-medium mb-4">{col.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {col.links.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a1d21]"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <p className="text-center text-xs text-gray-400">© {currentYear} Local Face Inc. All rights reserved</p>
      </div>
    </footer>
  );
}
