import React from "react";
import { NavLink } from "react-router-dom";
import img from ".././Assets/hero-img.png"

export default function Hero() {
  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2  items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Unlock the Secrets of <br /> the Stars
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-xl">
            Discover how the universe shapes your life. Dive into your zodiac
            insights, celestial forecasts, and personalized astrological
            guidance for a balanced and meaningful existence.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10">
            <button className="bg-purple-600 hover:bg-purple-700  px-8 py-3 rounded-md font-medium flex items-center gap-2 cursor-pointer transition origin-left">
              Get Started →
            </button>

           <NavLink to={"/contact"}> <button className="border border-gray-300 px-8 py-3 rounded-md hover:bg-white hover:text-black transition font-medium cursor-pointer">
              Contact Us
            </button> </NavLink>
          </div>

          {/* CLIENTS */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              <img
                src="../src/Assets/student-1.png"
                className="w-10 h-10 rounded-full border border-white"
              />
              <img
                src="../src/Assets/student-2.png"
                className="w-10 h-10 rounded-full border border-white"
              />
              <img
                src="../src/Assets/student-3.png"
                className="w-10 h-10 rounded-full border border-white"
              />
              <img
                src="../src/Assets/student-4.png"
                className="w-10 h-10 rounded-full border border-white"
              />
            </div>

            <p className="text-yellow-400 font-semibold text-lg">
              50,000+ Clients
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className=" w[100%]">
          <img src={img} className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}
