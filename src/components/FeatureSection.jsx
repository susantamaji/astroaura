import React from "react";

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#141414] text-white py-20 px-6">

      {/* TOP 3 FEATURE ICONS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center mb-20">

        <div>
          <img src="/icon1.png" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Privacy</h3>
          <p className="text-gray-400 mt-2">
            Unique and intriguing for those considering travel or relocation.
          </p>
        </div>

        <div>
          <img src="/icon2.png" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Result Guaranteed</h3>
          <p className="text-gray-400 mt-2">
            For travelers chasing happiness and new beginnings.
          </p>
        </div>

        <div>
          <img src="/icon3.png" className="w-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Competence</h3>
          <p className="text-gray-400 mt-2">
            Representing a transformative journey around the world.
          </p>
        </div>

      </div>

      {/* MAIN DISCOVER SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-400 mb-3 tracking-wide uppercase">
            Ancient wisdom meets modern insights
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Discover the Art <br /> of Astrology
          </h2>

          <p className="text-gray-300 mb-5 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers to life’s most 
            profound questions. Astrology is not just about predicting the future; 
            it’s a tool for self-awareness, growth, and understanding the cosmic forces 
            that shape our lives.
          </p>

          <p className="text-gray-300 mb-5 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers to life’s most 
            profound questions. Astrology is not just about predicting the future.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            At Astro Aura, we believe that the universe holds answers to life’s most 
            profound questions. Astrology is not just about predicting the future; it’s 
            a tool for self-awareness, growth, and understanding the cosmic forces that 
            shape our lives.
          </p>

          <button className="border border-gray-300 px-8 py-3 rounded-md hover:bg-white hover:text-black transition font-medium">
            Read More
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* Card 1 */}
          <img
            src="/card1.png"
            className="w-72 md:w-96 rotate-[-8deg] absolute top-8 left-8 shadow-xl rounded-lg"
          />

          {/* Card 2 */}
          <img
            src="/card2.png"
            className="w-72 md:w-96 rotate-[0deg] z-10 shadow-2xl rounded-lg"
          />

          {/* Card 3 */}
          <img
            src="/card3.png"
            className="w-72 md:w-96 rotate-[8deg] absolute top-12 right-8 shadow-xl rounded-lg"
          />

        </div>

      </div>

    </section>
  );
}
