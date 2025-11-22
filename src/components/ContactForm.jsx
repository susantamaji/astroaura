import React from "react";
import contactImg from "../Assets/contact-bgg.jpg";  // ✅ Proper React import

export default function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-[#0B0B0B] text-white py-20 px-6 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full h-full">
          <img
            src={contactImg}                      // ✅ Using imported image
            alt="Astrology"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <h1 className="text-5xl font-serif font-bold mb-2">Get in touch</h1>
          <p className="text-gray-300 mb-8">
            Our friendly team would love to hear from you.
          </p>

          {/* FORM */}
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                placeholder="eg. John"
                className="w-full bg-[#0D0D0D] border border-gray-700 px-4 py-3 rounded-lg 
                focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0D0D0D] border border-gray-700 px-4 py-3 rounded-lg 
                focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 text-gray-300">Contact Number</label>
              <input
                type="text"
                placeholder="+1 (111) 111 1111"
                className="w-full bg-[#0D0D0D] border border-gray-700 px-4 py-3 rounded-lg 
                focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-[#0D0D0D] border border-gray-700 px-4 py-3 rounded-lg 
                resize-none focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 accent-purple-600" />
              <p className="text-gray-300 text-sm">
                You agree to our friendly privacy policy.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg text-lg font-semibold">
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
