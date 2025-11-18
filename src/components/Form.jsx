import React from "react";

export default function Form() {
  return (
    <section className="w-full bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="h-full flex justify-center items-center">
          <img
            src="../src/Assets/contact-img.jpg"
            alt="Contact"
            className="w-full h-[650px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-3">Reserve A Slot</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Our friendly team would love to hear from you.
          </p>

          <form className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="eg. John"
                className="w-full bg-[#111] border border-gray-700 px-4 py-3.5 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#111] border border-gray-700 px-4 py-3.5 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="block text-sm mb-2">Contact Number</label>
              <input
                type="text"
                placeholder="+1 (111) 111 111"
                className="w-full bg-[#111] border border-gray-700 px-4 py-3.5 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-[#111] border border-gray-700 px-4 py-3.5 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* SERVICE SELECT */}
            <div>
              <label className="block text-sm mb-2">Service</label>
              <select
                className="w-full bg-[#111] border border-gray-700 px-4 py-3.5 rounded-lg focus:outline-none focus:border-purple-500"
              >
                <option className="bg-[#111]">Tarot Reading</option>
                <option className="bg-[#111]">Palm Reading</option>
                <option className="bg-[#111]">Birth Chart Analysis</option>
                <option className="bg-[#111]">Relationship Guidance</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-lg text-white font-medium text-lg mt-4"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
