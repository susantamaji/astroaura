import React from "react";

// Import your background image properly
import testimonialBanner from "../Assets/testimonial-bg.jpeg"; 
// ⚠️ Rename this to the actual file name you have in your Assets folder

export default function TaglineTestimonials() {
  return (
    <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={testimonialBanner}
        alt="Testimonials Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">

        {/* Title */}
        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold drop-shadow-xl">
          Testimonials
        </h1>

        {/* Tagline */}
        <p className="text-gray-200 text-lg md:text-xl mt-4 leading-relaxed max-w-2xl">
          We freight to all over the world. The best logistic company,
          <span className="text-blue-400 font-semibold"> FAST </span>
          and
          <span className="text-blue-400 font-semibold"> SAFELY!</span>
        </p>

        {/* Breadcrumb */}
        <div className="mt-4 text-lg">
          <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
            Home
          </span>
          <span className="text-white"> / Testimonials</span>
        </div>
      </div>
    </section>
  );
}
