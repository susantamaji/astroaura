import React from "react";

export default function ServicesCard() {
  const services = [
    {
      title: "Personalized Tarot Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/tarot.svg",
    },
    {
      title: "Personalized Palm Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/palm.svg",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
    },
    {
      title: "Personalized Palm Reading",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/palm.svg",
    },
    {
      title: "Astrological Birth Chart Analysis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
      icon: "/icons/star.svg",
    },
  ];

  return (
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
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 mb-6"
            />

            {/* Title */}
            <h2 className="text-white font-serif text-2xl font-semibold mb-4">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-4">
              {item.desc}
            </p>

            {/* Link */}
            <a className="text-purple-400 font-medium hover:underline" href="#">
              See Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
