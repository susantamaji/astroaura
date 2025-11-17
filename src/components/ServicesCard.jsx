import React, { useState } from "react";

export default function ServicesCard() {
  const services = [
    {
      title: "Personalized Tarot Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/tarot.svg",
      details:
        "A personalized tarot reading helps you gain clarity on love, career, and life decisions through intuitive card guidance.",
    },
    {
      title: "Personalized Palm Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/palm.svg",
      details:
        "Palmistry reveals your strengths, emotional patterns, and future possibilities through the lines and mounts on your hand.",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
      details:
        "A birth chart reveals personality, destiny, strengths, weaknesses, and planetary influences based on your exact birth time.",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
      details:
        "We provide deep insight into planetary positions and how they shape your life journey, relationships, and decisions.",
    },
    {
      title: "Personalized Palm Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/palm.svg",
      details:
        "Palm reading uncovers hidden talents, future trends, emotional health, and direction of your life path.",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
      details:
        "Unlock the secrets of your cosmic blueprint and understand your life purpose with a deep birth chart analysis.",
    },
  ];

  // Modal state
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section className="w-[95%] mx-auto py-12">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-yellow-400 font-semibold">We Got You Covered!</p>
          <h1 className="text-white font-serif text-5xl md:text-6xl font-bold">
            Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] p-8 rounded-3xl shadow-md hover:shadow-purple-500/20 transition-all"
            >
              <img src={item.icon} alt={item.title} className="w-20 mb-6" />

              <h2 className="text-white font-serif text-2xl font-semibold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-300 mb-4">{item.desc}</p>

              <button
                onClick={() => setSelectedService(item)}
                className="text-purple-400 font-medium hover:underline"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl shadow-2xl max-w-lg w-full animate-fadeIn">

            {/* Title */}
            <h2 className="text-white font-serif text-3xl font-bold mb-4">
              {selectedService.title}
            </h2>

            {/* Details */}
            <p className="text-gray-300 mb-6">
              {selectedService.details}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animation Class */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
