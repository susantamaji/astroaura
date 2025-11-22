import React from "react";
import ServicesCard from "./ServicesCard";
import ServicesBlog from "./ServicesBlog";

// Import your banner image correctly
import servicesBanner from "../Assets/title-banner.jpg";

export default function Service() {
  return (
    <section className="w-full bg-[#0d0d0d] py-10">
      <div className="w-[95%] mx-auto rounded-[40px] overflow-hidden relative shadow-xl">

        {/* Background Image */}
        <img
          src={servicesBanner}
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Text */}
        <div className="relative z-10 flex items-center justify-center h-[220px] md:h-[300px]">
          <h1 className="font-serif text-white text-4xl md:text-6xl font-semibold tracking-wide">
            Services
          </h1>
        </div>
      </div>

      <ServicesCard />
      <ServicesBlog />
    </section>
  );
}
