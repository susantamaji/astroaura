import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LOGO + TEXT */}
        <div>
          <h2 className="text-2xl font-semibold text-white">AstroAura</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Explore your zodiac insights, celestial forecasts, and personalized 
            astrological guidance for a balanced and meaningful existence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-purple-400">Services</Link></li>
            <li><Link to="/blog" className="hover:text-purple-400">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Horoscope Reading</li>
            <li>Zodiac Compatibility</li>
            <li>Daily Predictions</li>
            <li>Tarot Guidance</li>
            <li>Spiritual Consulting</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@astroaura.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AstroAura. All Rights Reserved.
      </div>
    </footer>
  );
}
