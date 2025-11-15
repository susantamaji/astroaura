import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Faqabout() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Volutpat feugiat adipiscing placerat amet odio?",
      answer:
        "Arcu maecenas magnis blandit viverra sed nisi nec elit. Mauris in id nibh quam ut feugiat nisi et suscipit nibh mauris. Auctor et aenean sed commodo quam odio vivamus ut tortor. Orci en lectus lobortis nisi nulla. Cras at nunc semper neque. Hendrerit lectus mauris velit pulvinar id. Ipsum viverra morbi viverra pellentesque sed. Enim pellentesque magna viverra massa augue ultricies faucibus elementum porta eget."
    },
    { question: "Sapien vestibulum odio nec at euismod?", answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus odio ut at accusamus, molestias eaque atque hic accusantium cumque alias, maiores soluta praesentium autem." },
    { question: "Tortor tristique pulvinar orci platea?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse velit optio possimus fuga. Corrupti ducimus necessitatibus explicabo voluptatum aspernatur vero dolorum voluptatem incidunt!" },
    { question: "Vitae donec leo nibh a quisque?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam fuga temporibus eligendi nesciunt corrupti, sed esse molestiae. Voluptas dolorum ipsa consectetur illum saepe accusantium excepturi labore molestias deleniti. Asperiores?" },
    { question: "Sapien vestibulum odio nec at euismod?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, itaque expedita tempora porro vitae similique fuga maiores vel provident commodi sit laudantium eius ex quia facilis sunt magnam assumenda hic velit. Nostrum consectetur iusto totam. Sapiente ipsam maxime aliquid assumenda eius incidunt dignissimos illo est, eligendi reprehenderit cum nostrum reiciendis?" },
  ];

  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-16 lg:px-28">

      {/* Heading */}
      <p className="text-yellow-400 text-lg">What’s on your mind!</p>
      <h2 className="text-5xl md:text-6xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#222] rounded-lg px-6 py-5 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            {/* Top Row — Question */}
            <div className="flex justify-between items-center">
              <h3
                className={`text-lg md:text-xl font-medium ${
                  openIndex === index ? "text-purple-400" : "text-white"
                }`}
              >
                {faq.question}
              </h3>

              {/* Plus / Minus Icon */}
              {openIndex === index ? (
                <FaMinus className="text-purple-400" />
              ) : (
                <FaPlus className="text-gray-300" />
              )}
            </div>

            {/* Answer */}
            {openIndex === index && faq.answer !== "" && (
              <p className="text-gray-300 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
