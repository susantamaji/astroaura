import React from "react";

export default function Feedback() {
  const feedbacks = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Smith",
      role: "Client",
      comment:
        "The gemstone recommendation was incredibly accurate. It helped me gain clarity and confidence in difficult times.",
      astrology:
        "⭐ Recommended Stone: Emerald — For clarity, communication & balanced energy.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Miley Cyrus",
      role: "Supervisor",
      comment:
        "The astrology consultation helped me understand my strengths and weaknesses deeply. Life-changing insights!",
      astrology:
        "⭐ Suggested Planet Study: Jupiter — For wisdom, growth & spiritual expansion.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "Thomas Walter",
      role: "Customer",
      comment:
        "Excellent guidance on planetary influences. My career decisions have improved significantly after the session.",
      astrology:
        "⭐ Birth Chart Insight: Saturn alignment improving discipline & focus.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "William Watt",
      role: "Client",
      comment:
        "The gemstone selection has enhanced my emotional balance. Feeling more centered and positive.",
      astrology:
        "⭐ Recommended Stone: Amethyst — For mental peace & emotional grounding.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "James Scott",
      role: "Supervisor",
      comment:
        "I received accurate predictions and remedies for my upcoming months. Truly a professional astrology service.",
      astrology:
        "⭐ Astrological Focus: Mars remedy strengthening confidence & action.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sally Watson",
      role: "Customer",
      comment:
        "The consultation session helped me align with my spiritual path. Extremely satisfied with the experience.",
      astrology:
        "⭐ Alignment Insight: Moon influence enhancing intuition & creativity.",
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] py-16">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {feedbacks.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-3xl p-6 shadow-md 
            hover:shadow-purple-500/30 hover:-translate-y-2 hover:scale-[1.02]
            transition-all duration-300 cursor-pointer border border-[#1b1b1b]"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h2 className="text-white text-xl font-semibold">{item.name}</h2>
                <p className="text-blue-400 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-300 mt-5 leading-relaxed">{item.comment}</p>

            {/* Astrology Details */}
            <p className="text-purple-400 text-sm mt-3 italic">
              {item.astrology}
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-5 text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐ <span className="text-white text-sm ml-2">5.0</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
