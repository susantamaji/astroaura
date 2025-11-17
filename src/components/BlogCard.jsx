import React, { useState } from "react";

export default function BlogCard() {
  const blogs = [
    {
      date: "June 01, 2025",
      title: "Personal Palm Reading",
      desc: "Discover how palm lines reveal emotional depth, life direction, and hidden strengths. Perfect for those seeking clarity about their future.",
      img: "https://images.pexels.com/photos/8370404/pexels-photo-8370404.jpeg",
    },
    {
      date: "June 03, 2025",
      title: "Cosmic Insight Chronicles",
      desc: "A deep look into zodiac energies and how your planetary placements shape your personality, choices, and spiritual growth.",
      img: "https://images.pexels.com/photos/6801084/pexels-photo-6801084.jpeg",
    },
    {
      date: "June 03, 2025",
      title: "Self-Growth with Astrology",
      desc: "Learn how moon phases, planetary movements, and zodiac traits influence daily moods, decisions, and personal development.",
      img: "https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg",
    },
    {
      date: "June 05, 2025",
      title: "The Power of Moon Rituals",
      desc: "Full moons bring release, while new moons spark manifestations. Explore rituals to align your intentions with cosmic cycles.",
      img: "https://images.pexels.com/photos/6472345/pexels-photo-6472345.jpeg",
    },
    {
      date: "June 05, 2025",
      title: "Tarot for Beginners",
      desc: "An introduction to the Major and Minor Arcana — understand how tarot cards reflect energies, guidance, and future possibilities.",
      img: "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
    },
    {
      date: "June 06, 2025",
      title: "Astrology & Career Path",
      desc: "Your birth chart reveals natural talents and ideal career paths. Discover what zodiac signs succeed in leadership or creativity.",
      img: "https://images.pexels.com/photos/4056833/pexels-photo-4056833.jpeg",
    },
    {
      date: "June 06, 2025",
      title: "Understanding Planet Retrogrades",
      desc: "Retrogrades often bring reflection and change. Learn how Mercury, Venus, and Mars retrogrades influence your relationships and growth.",
      img: "https://images.pexels.com/photos/4947168/pexels-photo-4947168.jpeg",
    },
    {
      date: "June 08, 2025",
      title: "Love Compatibility Secrets",
      desc: "Explore zodiac compatibility — how fire signs love passionately, water signs bond deeply, and earth signs remain loyal and stable.",
      img: "https://images.pexels.com/photos/1666073/pexels-photo-1666073.jpeg",
    },
    {
      date: "June 08, 2025",
      title: "Crystal Energy Healing",
      desc: "Crystals like Amethyst, Citrine, and Rose Quartz balance your energy fields and attract positivity, healing, and spiritual clarity.",
      img: "https://images.pexels.com/photos/4792739/pexels-photo-4792739.jpeg",
    },
  ];

  // PAGINATION LOGIC
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

        {/* Prev Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="border border-gray-500 text-white px-3 py-1 rounded-lg disabled:opacity-40 hover:bg-white/10 transition"
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-lg border 
              ${
                currentPage === i + 1
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-gray-500 text-white hover:bg-white/10"
              }
              transition`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
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
