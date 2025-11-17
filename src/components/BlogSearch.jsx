import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";

export default function BlogSearch() {
  return (
    <section className="w-full bg-[#0d0d0d] py-12">
      <div className="w-[95%] mx-auto">

        {/* Title */}
        <div className="mb-8">
          <p className="text-yellow-400 font-semibold mb-1">
            See what new about your day!
          </p>

          <h1 className="text-white font-serif text-4xl md:text-6xl font-bold">
            Our Latest Insights
          </h1>
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Filters + Count */}
          <div className="flex items-center gap-6">

            {/* Filter Button */}
            <button className="flex items-center gap-3 border border-gray-400 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition">
              <FiFilter size={20} />
              Filters
            </button>

            {/* Result Count */}
            <p className="text-gray-300">
              Showing <span className="text-white font-medium">01 - 12</span> of{" "}
              <span className="text-white font-medium">20</span> Results
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden max-w-md w-full bg-transparent">
            <input
              type="text"
              placeholder="Search Here..."
              className="bg-transparent text-white px-4 py-2 w-full outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 flex items-center justify-center transition">
              <FiSearch size={20} className="text-white" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
