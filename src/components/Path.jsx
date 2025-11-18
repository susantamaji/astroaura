import React from "react";
import { ArrowRight } from "lucide-react";

export default function Path() {
  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#1b1b1b] rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center shadow-lg shadow-purple-900/10">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="../src/Assets/discover-img.jpg"  // 🔥 Replace with your image path
              alt="cosmic path"
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-yellow-400 mb-2">We Got You!</p>

            <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
              Discover Your Cosmic Path
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Unlock personalized insights and find clarity in every star.
              Begin your journey with a free horoscope today
            </p>

            {/* BUTTON */}
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-md font-medium text-white">
              Get Started <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
