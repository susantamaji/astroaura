import React from "react";

export default function AboutHeader() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/about-bg.jpg"   // <-- change to your actual image name
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-7xl font-semibold drop-shadow-xl tracking-wide">
          About Us
        </h1>
      </div>

    </section>
  );
}
