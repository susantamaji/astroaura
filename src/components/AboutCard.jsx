import React from "react";

// Import image properly
import aboutImg from "../Assets/about-img.png";

export default function AboutCard() {
  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <div>
          <p className="text-yellow-400 mb-3 text-lg">
            Ancient wisdom meets modern insights
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Discover the Art of Astrology
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers
            to life’s most profound questions. Astrology is not just 
            about predicting the future; it’s a tool for self-awareness, 
            growth, and understanding the cosmic forces that shape our lives.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers
            to life’s most profound questions. Astrology is not just 
            about predicting the future.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers
            to life’s most profound questions. Astrology is not just 
            about predicting the future; it’s a tool for self-awareness 
            and growth.
          </p>

          <button className="px-8 py-3 border border-gray-300 rounded-md hover:bg-white hover:text-black transition">
            Read More
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full">
          <img src={aboutImg} className="w-full rounded-lg" />
        </div>

      </div>
    </section>
  );
}
