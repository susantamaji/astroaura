import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Astrological Birth Chart Analysis",
      img: "/service1.png",
      desc: "Deep analysis of your cosmic identity based on your birth chart.",
      fullText:
        "Your birth chart reveals personality, future trends, strengths, weaknesses, and soul purpose. It's a celestial map guiding your entire life path.",
    },
    {
      title: "Personalized Tarot Reading",
      img: "/service2.png",
      desc: "Tarot insights reveal clarity, direction & hidden energies.",
      fullText:
        "Tarot readings help uncover hidden emotions, pathways, future opportunities, and intuitive guidance.",
    },
    {
      title: "Personalized Palm Reading",
      img: "/service3.png",
      desc: "Understand destiny, strengths & love life through palm lines.",
      fullText:
        "Palm reading reveals health, love life, emotional energy, destiny flow, career path, and spiritual alignment.",
    },
    {
      title: "Numerology Life Insights",
      img: "/service1.png",
      desc: "Explore your life path through numbers.",
      fullText:
        "Numerology helps decode personality traits, destiny, and future events using your name and birth date.",
    },
    {
      title: "Future Prediction Session",
      img: "/service3.png",
      desc: "One-on-one session for future clarity.",
      fullText:
        "A prediction session gives you clarity about love, career, finances, and major upcoming events.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-yellow-400 mb-1 text-sm tracking-wide">
              We Got You Covered!
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          </div>

          {/* VIEW ALL BUTTON */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-gray-400 px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              animate={{ x: [0, -10, 10, 0] }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="bg-[#1b1b1b] rounded-xl p-8 shadow-lg hover:shadow-purple-700/20 transition-all duration-500"
            >
              <img src={service.img} className="w-20 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <p className="text-gray-400 text-sm mb-6">{service.desc}</p>

              <button
                onClick={() => setSelectedService(service)}
                className="text-purple-400 font-medium hover:underline"
              >
                See Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* SEE DETAILS POPUP */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1e1e1e] w-[90%] max-w-lg p-8 rounded-2xl shadow-xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-bold mb-4">
                  {selectedService.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {selectedService.fullText}
                </p>

                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
