import React from "react";
import { FaProjectDiagram, FaUserFriends, FaAward, FaEye } from "react-icons/fa";

export default function StatsCounter() {
  const stats = [
    {
      icon: <FaProjectDiagram size={45} />,
      value: "3k+",
      label: "Completed Projects",
    },
    {
      icon: <FaUserFriends size={45} />,
      value: "20k+",
      label: "Happy Customers",
    },
    {
      icon: <FaAward size={45} />,
      value: "13+",
      label: "Award Winning",
    },
    {
      icon: <FaEye size={45} />,
      value: "99%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] py-16">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] border border-[#1f1f1f] p-10 rounded-2xl flex flex-col 
            items-center justify-center text-center text-white shadow-md 
            hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-[1.03] 
            transition-all duration-300"
          >
            <div className="text-purple-400 mb-4">{item.icon}</div>

            <h2 className="text-4xl font-bold mb-2">{item.value}</h2>

            <p className="text-gray-300 text-lg">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
