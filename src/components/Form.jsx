import React from "react";

export default function Form() {
  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/formbg.jpg"  // Replace with your actual image
            alt="Astrology Form Background"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Reserve A Slot</h2>
          <p className="text-gray-300 mb-10">
            Our friendly team would love to hear from you.
          </p>

          <form className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="eg. John"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* CONTACT NUMBER */}
            <div>
              <label className="block text-sm mb-2">Contact Number</label>
              <input
                type="text"
                placeholder="+1 (111) 111 1111"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* SERVICE SELECT */}
            <div>
              <label className="block text-sm mb-2">Service</label>
              <select
                className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-purple-500"
              >
                <option className="bg-[#141414]">Tarot Reading</option>
                <option className="bg-[#141414]">Palm Reading</option>
                <option className="bg-[#141414]">Birth Chart Analysis</option>
                <option className="bg-[#141414]">Relationship Guidance</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-md text-white font-medium mt-4"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
