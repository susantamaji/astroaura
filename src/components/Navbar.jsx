import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1a1a1a] py-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-white text-2xl font-semibold">AstroAura</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">

          <li className="relative group cursor-pointer">
            <Link to="/">Home</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-100"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link to="/about">About Us</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
          </li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">
            <span>Services</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>

            {/* Dropdown */}
            <ul className="
              absolute left-0 mt-3 bg-[#222] text-white rounded-lg shadow-lg opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-300 
              w-40 p-2 space-y-2"
            >
              <li className="hover:bg-[#333] rounded-md px-3 py-2 transition">
                <Link to="/service">Services</Link>
              </li>
              <li className="hover:bg-[#333] rounded-md px-3 py-2 transition">
                <Link to="/ourexclusive">OurExclusive</Link>
              </li>
              <li className="hover:bg-[#333] rounded-md px-3 py-2 transition">
                <Link to="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <Link to="/blog">Blogs</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
          </li>

          <li className="relative group cursor-pointer">
            <Link to="/contact">Contact</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
          </li>

        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1a1a1a] text-white absolute w-full left-0 transition-all duration-500 
        ${mobileOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">

          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>

          {/* Mobile Services Dropdown */}
          <details className="group">
            <summary className="cursor-pointer py-2">Services</summary>
            <div className="pl-4 flex flex-col gap-2 mt-2">
              <Link to="/service" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link to="/ourexclusive" onClick={() => setMobileOpen(false)}>OurExclusive</Link>
              <Link to="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
            </div>
          </details>

          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
