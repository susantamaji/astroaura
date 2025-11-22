import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../Assets/logo.webp";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-purple-400 font-semibold" : "";

  const activeUnderline = (path) =>
    location.pathname === path
      ? "scale-x-100 bg-purple-500"
      : "scale-x-0 group-hover:scale-x-100 bg-purple-500";

  const activePath = location.pathname;

  const isServiceActive = ["/service", "/ourexclusive", "/testimonials"].includes(
    activePath
  );

  return (
    <nav className="w-full bg-[#1a1a1a] py-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-white text-2xl font-semibold">AstroAura</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">

          {/* Home */}
          <li className="relative group cursor-pointer">
            <Link
              to="/"
              className={`px-2 py-1 rounded-md transition ${isActive("/")}`}
            >
              Home
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/"
              )}`}
            ></span>
          </li>

          {/* About */}
          <li className="relative group cursor-pointer">
            <Link
              to="/about"
              className={`px-2 py-1 rounded-md transition ${isActive("/about")}`}
            >
              About Us
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/about"
              )}`}
            ></span>
          </li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">
            <span className={`${isServiceActive ? "text-purple-400" : ""}`}>
              Services
            </span>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                isServiceActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>

            {/* Dropdown */}
            <ul
              className="absolute left-0 mt-3 bg-[#222] text-white rounded-lg shadow-lg opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible transition-all duration-300 
                w-40 p-2 space-y-2"
            >
              <li>
                <Link
                  to="/service"
                  className={`block px-3 py-2 rounded-md transition hover:bg-[#333] ${isActive(
                    "/service"
                  )}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ourexclusive"
                  className={`block px-3 py-2 rounded-md transition hover:bg-[#333] ${isActive(
                    "/ourexclusive"
                  )}`}
                >
                  OurExclusive
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className={`block px-3 py-2 rounded-md transition hover:bg-[#333] ${isActive(
                    "/testimonials"
                  )}`}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </li>

          {/* Blogs */}
          <li className="relative group cursor-pointer">
            <Link
              to="/blog"
              className={`px-2 py-1 rounded-md transition ${isActive("/blog")}`}
            >
              Blogs
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/blog"
              )}`}
            ></span>
          </li>

          {/* Contact */}
          <li className="relative group cursor-pointer">
            <Link
              to="/contact"
              className={`px-2 py-1 rounded-md transition ${isActive("/contact")}`}
            >
              Contact
            </Link>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/contact"
              )}`}
            ></span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
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

          <Link
            to="/"
            className={`py-2 rounded-md ${isActive("/")}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`py-2 rounded-md ${isActive("/about")}`}
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <details className="group">
            <summary
              className={`cursor-pointer py-2 ${
                isServiceActive ? "text-purple-400" : ""
              }`}
            >
              Services
            </summary>

            <div className="pl-4 flex flex-col gap-2 mt-2">
              <Link
                to="/service"
                className={`py-2 rounded-md ${isActive("/service")}`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/ourexclusive"
                className={`py-2 rounded-md ${isActive("/ourexclusive")}`}
                onClick={() => setMobileOpen(false)}
              >
                OurExclusive
              </Link>

              <Link
                to="/testimonials"
                className={`py-2 rounded-md ${isActive("/testimonials")}`}
                onClick={() => setMobileOpen(false)}
              >
                Testimonials
              </Link>
            </div>
          </details>

          <Link
            to="/blog"
            className={`py-2 rounded-md ${isActive("/blog")}`}
            onClick={() => setMobileOpen(false)}
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className={`py-2 rounded-md ${isActive("/contact")}`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
