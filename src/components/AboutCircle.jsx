import React from "react";
import { FaUsers, FaLightbulb, FaBriefcase } from "react-icons/fa";

export default function AboutCircle() {
  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="../src/Assets/about-circle-img-3.png"
            alt="Astrology Wheel"
            className="w-[420px] md:w-[520px] lg:w-[600px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Astrology is just a finger <br /> pointing
          </h2>

          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            At Astro Aura, we believe that the universe holds answers to life’s
            most profound questions. Astrology is not just about predicting the
            future; it’s a tool for self-awareness, growth, and understanding
            the cosmic forces that shape our lives.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-10">

            {/* 1 - General Consultation */}
            <div className="flex items-start gap-4">
              <FaUsers className="text-yellow-400 text-4xl mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">General Consultation</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create a world where the wisdom of astrology empowers individuals to 
                  unlock their true potential, navigate life’s challenges, and connect deeply 
                  with the cosmic rhythm.
                </p>
              </div>
            </div>

            {/* 2 - Personal Advice */}
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-400 text-4xl mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Personal Life Advice</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide personalized, accurate, and accessible astrological insights 
                  that combine ancient knowledge with guiding users toward 
                  self-discovery and clarity.
                </p>
              </div>
            </div>

            {/* 3 - Work Career */}
            <div className="flex items-start gap-4">
              <FaBriefcase className="text-yellow-400 text-4xl mt-1" />
              <div>
                <h3 className="text-2xl font-semibold">Work, Career & Finance</h3>
                <p className="text-gray-300 leading-relaxed">
                  We are committed to authenticity, delivering astrology with 
                  integrity and depth; empowerment, helping individuals align 
                  with their stars.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
