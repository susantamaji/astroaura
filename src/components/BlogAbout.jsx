import React, { useState } from "react";

export default function BlogList() {
  const blogs = [
    {
      id: 1,
      date: "June 03, 2025",
      title: "Cosmic Insight Chronicles",
      desc: "Aries individuals are known for their energetic and assertive nature, making bold and dynamic outfits a perfect match.",
      img: "/insight1.jpg",
    },
    {
      id: 2,
      date: "June 03, 2025",
      title: "Self-Growth with Astrology",
      desc: "Incorporate astrology into everyday activities, from planning your day around the moon phase to using planetary.",
      img: "/insight2.jpg",
    },
    {
      id: 3,
      date: "June 01, 2025",
      title: "Personal Palm Reading",
      desc: "Lectus nisi quam tellus in eu elementum. Tempus lorem arcu quis diam at. Massa lacus at morbi vel curabitur sed vitae.",
      img: "/insight3.jpg",
    },
    {
      id: 4,
      date: "June 05, 2025",
      title: "Zodiac Energy Forecast",
      desc: "Discover how today’s cosmic energy influences your mood, intentions, and actions.",
      img: "/insight4.jpg",
    },
    {
      id: 5,
      date: "June 06, 2025",
      title: "Love Compatibility Guide",
      desc: "See which zodiac signs match your romantic energy and which ones challenge you.",
      img: "/insight5.jpg",
    },
    {
      id: 6,
      date: "June 08, 2025",
      title: "Moon Phase Rituals",
      desc: "Unlock the power of moon phases through rituals for peace, clarity, and manifestation.",
      img: "/insight6.jpg",
    },
  ];

  // ---------- STATES ----------
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  const postsPerPage = 3;

  // ---------- PAGINATION LOGIC ----------
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogs.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // ---------- TOGGLE VIEW ALL ----------
  const displayedBlogs = viewAll ? blogs : currentPosts;

  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Our Latest Insights</h2>

          <button
            onClick={() => setViewAll(!viewAll)}
            className="border border-gray-400 px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {viewAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* GRID */}
        <div className={`grid gap-12 ${viewAll ? "md:grid-cols-3" : "md:grid-cols-3"}`}>
          {displayedBlogs.map((blog) => (
            <div key={blog.id} className="group">
              <img
                src={blog.img}
                className="w-full h-72 object-cover rounded-xl mb-6 group-hover:opacity-90 transition"
              />

              <p className="text-gray-400 text-sm">{blog.date}</p>

              <h3 className="text-2xl font-semibold mt-2 mb-4">{blog.title}</h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {blog.desc}
              </p>

              <a className="text-purple-400 hover:underline cursor-pointer">
                See Details
              </a>
            </div>
          ))}
        </div>

        {/* PAGINATION — ONLY IF NOT VIEW ALL */}
        {!viewAll && (
          <div className="flex justify-center gap-4 mt-16">

            {/* Prev */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-4 py-2 rounded-md border border-gray-400 
            ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-black"} `}
            >
              ‹
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-purple-600 text-white"
                    : "border border-gray-400 hover:bg-white hover:text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 py-2 rounded-md border border-gray-400 
            ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-white hover:text-black"} `}
            >
              ›
            </button>

          </div>
        )}
      </div>
    </section>
  );
}
