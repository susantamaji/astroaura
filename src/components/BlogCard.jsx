import React, { useState } from "react";

// Local image imports
import img1 from "../Assets/blog1.jpg";
import img2 from "../Assets/blog2.jpg";
import img3 from "../Assets/blog3.jpg";
import img4 from "../Assets/blog4.jpg";
import img5 from "../Assets/blog5.jpg";
import img6 from "../Assets/blog6.jpg";

export default function BlogCard() {
  const blogs = [
    {
      date: "June 01, 2025",
      title: "Personal Palm Reading",
      desc: "Discover how palm lines reveal emotional depth, life direction, and hidden strengths. Perfect for those seeking clarity about their future.",
      img: img1,
    },
    {
      date: "June 03, 2025",
      title: "Cosmic Insight Chronicles",
      desc: "A deep look into zodiac energies and how your planetary placements shape your personality, choices, and spiritual growth.",
      img: img2,
    },
    {
      date: "June 03, 2025",
      title: "Self-Growth with Astrology",
      desc: "Learn how moon phases, planetary movements, and zodiac traits influence daily moods, decisions, and personal development.",
      img: img3,
    },
    {
      date: "June 05, 2025",
      title: "The Power of Moon Rituals",
      desc: "Full moons bring release, while new moons spark manifestations. Explore rituals to align your intentions with cosmic cycles.",
      img: img4,
    },
    {
      date: "June 05, 2025",
      title: "Tarot for Beginners",
      desc: "An introduction to the Major and Minor Arcana — understand how tarot cards reflect energies, guidance, and future possibilities.",
      img: img5,
    },
    {
      date: "June 06, 2025",
      title: "Astrology & Career Path",
      desc: "Your birth chart reveals natural talents and ideal career paths. Discover what zodiac signs succeed in leadership or creativity.",
      img: img6,
    },
  ];

  // PAGINATION
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const getCurrentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return blogs.slice(start, end);
  };

  return (
    <section className="w-full bg-[#0d0d0d] py-12">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {getCurrentData().map((item, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-3xl shadow-lg 
                       hover:shadow-purple-500/20 transition-all duration-500 
                       cursor-pointer hover:-translate-y-2 hover:scale-[1.02]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-3xl mb-6 w-full h-[220px] object-cover"
            />

            <p className="text-gray-400 text-sm mb-2">{item.date}</p>

            <h2 className="text-white font-serif text-2xl font-semibold mb-3">
              {item.title}
            </h2>

            <p className="text-gray-300 mb-4">{item.desc}</p>

            <a href="#" className="text-purple-400 font-medium hover:underline">
              See Details
            </a>
          </div>
        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center mt-10 gap-3">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="border border-gray-500 text-white px-3 py-1 rounded-lg disabled:opacity-40 hover:bg-white/10 transition"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === i + 1
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-gray-500 text-white hover:bg-white/10"
            } transition`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="border border-gray-500 text-white px-3 py-1 rounded-lg disabled:opacity-40 hover:bg-white/10 transition"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
