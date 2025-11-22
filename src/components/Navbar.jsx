import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../Assets/logo.webp"

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
<<<<<<< HEAD

  const isActive = (path) =>
    location.pathname === path ? "text-purple-400 font-semibold" : "";

  const activeUnderline = (path) =>
    location.pathname === path
      ? "scale-x-100 bg-purple-500"
      : "scale-x-0 group-hover:scale-x-100 bg-purple-500";
=======
  const activePath = location.pathname;

  const isServiceActive = ["/service", "/ourexclusive", "/testimonials"].includes(
    activePath
  );
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713

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
<<<<<<< HEAD
              className={`px-2 py-1 rounded-md transition ${isActive("/")}`}
=======
              className={`${activePath === "/" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            >
              Home
            </Link>
            <span
<<<<<<< HEAD
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/"
              )}`}
=======
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                activePath === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            ></span>
          </li>

          {/* About */}
          <li className="relative group cursor-pointer">
            <Link
              to="/about"
<<<<<<< HEAD
              className={`px-2 py-1 rounded-md transition ${isActive("/about")}`}
=======
              className={`${activePath === "/about" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            >
              About Us
            </Link>
            <span
<<<<<<< HEAD
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/about"
              )}`}
=======
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                activePath === "/about" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            ></span>
          </li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">
<<<<<<< HEAD
            <span className="px-2 py-1">Services</span>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left scale-x-0 group-hover:scale-x-100 bg-purple-500`}
=======
            <span className={`${isServiceActive ? "text-purple-400" : ""}`}>
              Services
            </span>
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                isServiceActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            ></span>

            {/* Dropdown */}
            <ul
<<<<<<< HEAD
              className="
              absolute left-0 mt-3 bg-[#222] text-white rounded-lg shadow-lg opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-300 
              w-40 p-2 space-y-2"
=======
              className="absolute left-0 mt-3 bg-[#222] text-white rounded-lg shadow-lg opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible transition-all duration-300 
                w-40 p-2 space-y-2"
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
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
<<<<<<< HEAD
              className={`px-2 py-1 rounded-md transition ${isActive("/blog")}`}
=======
              className={`${activePath === "/blog" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            >
              Blogs
            </Link>
            <span
<<<<<<< HEAD
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/blog"
              )}`}
=======
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                activePath === "/blog" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            ></span>
          </li>

          {/* Contact */}
          <li className="relative group cursor-pointer">
            <Link
              to="/contact"
<<<<<<< HEAD
              className={`px-2 py-1 rounded-md transition ${isActive("/contact")}`}
=======
              className={`${activePath === "/contact" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            >
              Contact
            </Link>
            <span
<<<<<<< HEAD
              className={`absolute left-0 -bottom-1 h-0.5 w-full transition origin-left ${activeUnderline(
                "/contact"
              )}`}
=======
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-purple-500 transition origin-left ${
                activePath === "/contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            ></span>
          </li>
        </ul>

<<<<<<< HEAD
        {/* Hamburger Menu */}
=======
        {/* Mobile Menu Button */}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
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
<<<<<<< HEAD
            className={`py-2 rounded-md ${isActive("/")}`}
=======
            className={`${activePath === "/" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
<<<<<<< HEAD

          <Link
            to="/about"
            className={`py-2 rounded-md ${isActive("/about")}`}
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>

=======

          <Link
            to="/about"
            className={`${activePath === "/about" ? "text-purple-400" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Dropdown */}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
          <details className="group">
            <summary
              className={`cursor-pointer py-2 ${
                isServiceActive ? "text-purple-400" : ""
              }`}
            >
              Services
            </summary>

            <div className="pl-4 flex flex-col gap-2 mt-2">
<<<<<<< HEAD

              <Link
                to="/service"
                className={`py-2 rounded-md ${isActive("/service")}`}
=======
              <Link
                to="/service"
                className={`${activePath === "/service" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/ourexclusive"
<<<<<<< HEAD
                className={`py-2 rounded-md ${isActive("/ourexclusive")}`}
=======
                className={`${activePath === "/ourexclusive" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
                onClick={() => setMobileOpen(false)}
              >
                OurExclusive
              </Link>

              <Link
                to="/testimonials"
<<<<<<< HEAD
                className={`py-2 rounded-md ${isActive("/testimonials")}`}
=======
                className={`${activePath === "/testimonials" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
                onClick={() => setMobileOpen(false)}
              >
                Testimonials
              </Link>
            </div>
          </details>

          <Link
            to="/blog"
<<<<<<< HEAD
            className={`py-2 rounded-md ${isActive("/blog")}`}
=======
            className={`${activePath === "/blog" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            onClick={() => setMobileOpen(false)}
          >
            Blogs
          </Link>

          <Link
            to="/contact"
<<<<<<< HEAD
            className={`py-2 rounded-md ${isActive("/contact")}`}
=======
            className={`${activePath === "/contact" ? "text-purple-400" : ""}`}
>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
<<<<<<< HEAD
=======

>>>>>>> 114e18dd342971389c35875bd9b9cc5fe4915713
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
