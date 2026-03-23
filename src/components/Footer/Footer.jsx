import logo from "../../assets/logo-footer.png";
import NewsLetter from "../Newsletter/NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-white pt-45 mt-40 md:mt-70 relative">
      {/* Newsletter */}
      <NewsLetter extraClass="absolute -top-25 right-0 left-0" />
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 " >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="Cricket Logo" className="h-25 object-contain" />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-base font-semibold mb-3">About Us</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <span className="text-gray-500 text-xs">◆</span>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-base font-semibold mb-3">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex items-center rounded-lg overflow-hidden border border-gray-600">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none"
              />
              <button className="px-4 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <p className="text-center text-sm text-gray-500 py-4">
          &copy;{new Date().getFullYear()} Abdur Rahman Adil - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
