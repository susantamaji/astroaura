import React from "react";

// Import all images correctly
import consultation from "../Assets/cunsulation.png";
import personalAdvice from "../Assets/personal-advice.png";
import career from "../Assets/career.png";
import aboutImg2 from "../Assets/about-img-2.png";

export default function Circle() {
  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Astrology is just a finger <br /> pointing
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            At Astro Aura, we believe that the universe holds answers to life’s most
            profound questions. Astrology is not just about predicting the future;
            it’s a tool for self-awareness, growth, and understanding the cosmic forces
            that shape our lives.
          </p>

          {/* FEATURE LIST */}
          <div className="space-y-8">

            {/* 1 - General Consultation */}
            <div className="flex gap-5">
              <img src={consultation} className="w-14 h-14" />

              <div>
                <h3 className="text-xl font-semibold mb-1">General Consultation</h3>
                <p className="text-gray-400 text-sm max-w-lg">
                  To create a world where the wisdom of astrology empowers individuals
                  to unlock their true potential, navigate life’s challenges, and
                  connect deeply with the cosmic rhythm.
                </p>
              </div>
            </div>

            {/* 2 - Personal Life Advice */}
            <div className="flex gap-5">
              <img src={personalAdvice} className="w-14 h-14" />

              <div>
                <h3 className="text-xl font-semibold mb-1">Personal Life Advice</h3>
                <p className="text-gray-400 text-sm max-w-lg">
                  To provide personalized, accurate, and accessible astrological insights
                  that combine ancient knowledge with guiding users toward
                  self-discovery and clarity.
                </p>
              </div>
            </div>

            {/* 3 - Work, Career & Finance */}
            <div className="flex gap-5">
              <img src={career} className="w-14 h-14" />

              <div>
                <h3 className="text-xl font-semibold mb-1">Work, Career & Finance</h3>
                <p className="text-gray-400 text-sm max-w-lg">
                  We are committed to authenticity, delivering astrology with integrity
                  and depth; empowerment, helping individuals align with their stars.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img src={aboutImg2} className="w-[450px] md:w-[600px]" />
        </div>

      </div>
    </section>
  );
}
