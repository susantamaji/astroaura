import React, { useState, useEffect } from "react";
import ceo from "../Assets/testimonial-img.jpg";
import Lead from "../Assets/student-1.png";
import Product from "../Assets/student-2.png";
import test from "../Assets/testimonial-img.jpg";

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      text:
        "The natal chart reading I got was truly insightful! It felt like the astrologer knew me even better than I knew myself. The guidance helped me recognize my strengths and weaknesses, and now I feel more confident in my decisions.",
      name: "Alex Jonathan",
      role: "CEO Unboxing.co",
      img: ceo,
      sideImg: "/starside1.jpg",
    },
    {
      id: 2,
      text:
        "I was amazed at how accurate the reading was! It gave me clarity on my relationships and career choices. Definitely recommend this experience.",
      name: "Priya Sharma",
      role: "Marketing Lead",
      img: Lead,
      sideImg: "/starside2.jpg",
    },
    {
      id: 3,
      text:
        "Absolutely transformative! I walked away feeling deeply understood and aware of my purpose. The best astrology session I've ever had.",
      name: "Daniel Cruz",
      role: "Product Designer",
      img: Product,
      sideImg: "/starside3.jpg",
    },
  ];

  const current = testimonials[active];

  // 🌟 AUTO PLAY LOGIC
  useEffect(() => {
    if (paused) return; // stop autoplay when manually clicked

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [active, paused]);

  const handleDotClick = (index) => {
    setActive(index);
    setPaused(true); // stop autoplay when user interacts
    setTimeout(() => setPaused(false), 6000); // resume after 6 sec
  };

  return (
    <section className="w-full bg-[#141414] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-400 text-sm mb-1">We got People's Trust</p>
          <h2 className="text-5xl font-bold mb-10">Testimonials</h2>

          <div className="text-6xl text-pink-500 mb-6">“</div>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            {current.text}
          </p>

          {/* USER INFO */}
          <div className="flex items-center gap-4">
            <img
              src={current.img}
              className="w-12 h-12 rounded-full object-cover border border-purple-500"
            />
            <div>
              <h4 className="font-semibold text-lg">{current.name}</h4>
              <p className="text-gray-400 text-sm">{current.role}</p>
            </div>
          </div>

          {/* SLIDER DOTS */}
          <div className="flex items-center gap-4 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  active === index
                    ? "bg-purple-500 w-10"
                    : "bg-gray-500 w-3"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={test}
            className="w-full rounded-xl shadow-lg shadow-purple-900/20 object-cover"
          />
        </div>

      </div>
    </section>
  );
}
