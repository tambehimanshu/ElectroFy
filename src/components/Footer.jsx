import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "LinkedIn", href: "#", icon: "💼" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + Contact */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Beyond Why</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering young minds through science, creativity, and
                curiosity. <br /> Join our global community of young researchers
                and thinkers.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✉️</span> hello@beyondwhy.com
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">📞</span> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">📍</span> New York, NY
              </div>
            </div>
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="py-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition"
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Beyond Why.</span>
              <span className="text-green-600">💚</span>
              <span>Made for young minds</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
