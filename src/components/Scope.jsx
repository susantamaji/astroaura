import React, { useState } from "react";

// Import Images Properly
import aries from "../Assets/aries.png";
import taurus from "../Assets/Taurus.png";
import gemini from "../Assets/gemini.png";
import cancer from "../Assets/cancer.png";
import leo from "../Assets/leo.png";
import virgo from "../Assets/virgo.png";
import libra from "../Assets/libra.png";
import scorpio from "../Assets/scorpio.png";
import sagittarius from "../Assets/sagitarius.png";
import capricorn from "../Assets/capricorn.png";
import aquarius from "../Assets/aquarius.png";
import pisces from "../Assets/pices.png";

export default function Scope() {
  const [showAll, setShowAll] = useState(false);

  const zodiacData = [
    { name: "ARIES", date: "March 21 - April 19", img: aries },
    { name: "TAURUS", date: "April 20 - May 20", img: taurus },
    { name: "GEMINI", date: "May 21 - June 20", img: gemini },
    { name: "CANCER", date: "June 22 - July 22", img: cancer },
    { name: "LEO", date: "July 23 - Aug 22", img: leo },
    { name: "VIRGO", date: "Aug 23 - Sep 22", img: virgo },
    { name: "LIBRA", date: "Sep 23 - Oct 22", img: libra },
    { name: "SCORPIO", date: "Oct 23 - Nov 21", img: scorpio },
    { name: "SAGITTARIUS", date: "Nov 22 - Dec 21", img: sagittarius },
    { name: "CAPRICORN", date: "Dec 22 - Jan 19", img: capricorn },
    { name: "AQUARIUS", date: "Jan 20 - Feb 18", img: aquarius },
    { name: "PISCES", date: "Feb 19 - Mar 20", img: pisces },
  ];

  const visibleCards = showAll ? zodiacData : zodiacData.slice(0, 4);

  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-yellow-400 text-sm mb-1">
              See what new about your day!
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Daily Horoscope</h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-gray-400 px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* ZODIAC GRID */}
        <div className="grid md:grid-cols-4 gap-8">
          {visibleCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] p-10 rounded-xl text-center hover:-translate-y-2 transition shadow-lg shadow-purple-900/10"
            >
              <img src={item.img} className="w-24 mx-auto mb-6" />

              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>

              <p className="text-gray-400 mb-4 text-sm">{item.date}</p>

              <span className="text-purple-400 font-medium cursor-pointer">
                Read More
              </span>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        {!showAll && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <div className="w-10 h-3 rounded-full bg-purple-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
        )}
      </div>
    </section>
  );
}
