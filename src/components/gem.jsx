import React from "react";

// Import your gemstone banner image
import gemBanner from "../Assets/gem-banner.jpg";

export default function Gem() {
  return (
    <div className="w-full bg-[#0d0d0d]">

      {/* TOP HERO SECTION */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">

        <img
          src={gemBanner}
          alt="Gemstone Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-[95%] mx-auto h-full flex flex-col justify-center">
          <h1 className="text-white font-serif text-4xl md:text-6xl font-bold mb-4">
            Our Exclusive Product
          </h1>

          <p className="text-white text-lg">
            <span className="text-sky-400 font-semibold cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            Contact
          </p>
        </div>
      </section>

      {/* GEMSTONE CONTENT */}
      <section className="w-full bg-[#0d0d0d] text-center py-16 px-6 md:px-20">

        <h2 className="text-white font-serif text-3xl md:text-5xl font-bold uppercase mb-6">
          Our Gemstone Collection
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Explore our collection of authentic gemstones — Emerald, Blue Sapphire, Ruby, Amethyst,
          Red Coral, and more. Each stone is certified and astrologically aligned to bring
          prosperity, harmony, and spiritual growth.
        </p>
      </section>

    </div>
  );
}
