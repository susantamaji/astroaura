import React, { useState } from "react";

export default function ServicesSection() {

  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Astrological Birth Chart Analysis",
      img: "/service1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      title: "Personalized Tarot Reading",
      img: "/service2.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      title: "Personalized Palm Reading",
      img: "/service3.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      title: "Astrological Birth Chart Analysis",
      img: "/service1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      title: "Personalized Palm Reading",
      img: "/service3.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      title: "Astrological Birth Chart Analysis",
      img: "/service1.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-yellow-400 mb-1 text-sm tracking-wide">
              We Got You Covered!
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-gray-400 px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-xl p-10 hover:-translate-y-2 transition shadow-lg shadow-purple-900/10"
            >
              <img src={service.img} className="w-20 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {service.desc}
              </p>

              <a className="text-purple-400 font-medium cursor-pointer">
                See Details
              </a>
            </div>
          ))}
        </div>

        {/* SLIDER DOTS (only on collapsed view) */}
        {!showAll && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <div className="w-16 h-3 rounded-full bg-purple-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
        )}
      </div>
    </section>
  );
}
