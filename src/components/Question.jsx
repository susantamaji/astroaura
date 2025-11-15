import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Question() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "Volutpat feugiat adipiscing placerat amet odio?",
      a: "Arcu maecenas magnis blandit viverra sed nisi nec elit. Mauris in id nibh diam ut feugiat nisi faucibus mauris. Auctor et aenean sed commodo quam odio vivamus ut tortor. Orci in lectus lobortis nisi nulla. Cras at nunc semper neque. Hendrerit lectus mauris velit pulvinar id. Ipsum viverra morbi viverra pellentesque sed. Enim pellentesque magna viverra magna interdum faucibus. Pellentesque sagittis tellus velit sed commodo enim vestibulum porta eget.",
    },
    {
      q: "Sapien vestibulum odio nec at euismod?",
      a: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas euismod.",
    },
    {
      q: "Tortor tristique pulvinar orci platea?",
      a: "Mauris sed enim ut sem viverra aliquet eget aenean diam.",
    },
    {
      q: "Vitae donec leo nibh a quisque?",
      a: "Morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      q: "Sapien vestibulum odio nec at euismod?",
      a: "Suspendisse potenti fusce ut placerat orci nulla pellentesque dignissim enim.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#141414] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <p className="text-yellow-400 text-sm mb-2">What’s on your mind!</p>
        <h2 className="text-5xl font-bold mb-12">Frequently Asked Questions</h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-lg p-6 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              {/* QUESTION ROW */}
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === index ? "text-purple-400" : "text-white"
                  }`}
                >
                  {faq.q}
                </h3>

                {/* ICON */}
                {activeIndex === index ? (
                  <Minus className="text-purple-400" />
                ) : (
                  <Plus className="text-gray-300" />
                )}
              </div>

              {/* ANSWER */}
              {activeIndex === index && (
                <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
