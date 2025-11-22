import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

// IMPORT IMAGES CORRECTLY
import student4 from "../Assets/student-4.png";
import student3 from "../Assets/student-3.png";
import student2 from "../Assets/student-2.png";
import mainTestimonialImg from "../Assets/testimonial-img.jpg";

// TESTIMONIAL DATA
const testimonials = [
  {
    text:
      "The natal chart reading I received was incredibly enlightening! It seemed as though the astrologer understood me more deeply than I understood myself. The revelations highlighted my strengths and weaknesses, leaving me more assured about my choices.",
    name: "Sophia Rose",
    role: "CEO Unboxing.co",
    image: student4,
  },
  {
    text:
      "AstroAura provided clarity I didn’t know I needed. The insights were spot on, guiding me toward decisions that aligned with my life's purpose. Truly transformative!",
    name: "Maya Patel",
    role: "Entrepreneur",
    image: student3,
  },
  {
    text:
      "Absolutely incredible experience! I felt so seen, understood, and guided. This helped me unlock emotional clarity and confidence in my journey.",
    name: "Aarushi Sharma",
    role: "Creative Director",
    image: student2,
  },
];

export default function AboutTestimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-16 lg:px-28">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-yellow-400 text-lg">We got People’s Trust</p>
        <h2 className="text-5xl md:text-6xl font-bold mt-2">Testimonials</h2>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — TEXT SLIDER */}
        <div className="space-y-8">
          <FaQuoteLeft className="text-pink-400 text-6xl" />

          <div key={index} className="transition-all duration-700 opacity-100">
            <p className="text-lg leading-relaxed w-[90%]">
              {testimonials[index].text}
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={testimonials[index].image}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonials[index].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[index].role}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === i ? "bg-purple-500 w-8" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — STATIC IMAGE */}
        <div>
          <img
            src={mainTestimonialImg}
            className="w-full rounded-xl shadow-lg object-cover h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
