import React from "react";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";

export default function Support() {
  return (
    <div className="w-full py-20 px-6 bg-[#0B0B0B] flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Phone */}
        <div className="bg-[#111111] rounded-xl py-12 flex flex-col items-center justify-center shadow-lg">
          <FiPhoneCall size={50} className="text-purple-500 mb-4" />
          <p className="text-xl text-white font-medium">+1 234 567 8900</p>
        </div>

        {/* Address */}
        <div className="bg-[#111111] rounded-xl py-12 flex flex-col items-center justify-center shadow-lg">
          <FiMapPin size={50} className="text-purple-500 mb-4" />
          <p className="text-xl text-white font-medium">
            Main Boulevard, Leicester
          </p>
        </div>

        {/* Email */}
        <div className="bg-[#111111] rounded-xl py-12 flex flex-col items-center justify-center shadow-lg">
          <FiMail size={50} className="text-purple-500 mb-4" />
          <p className="text-xl text-white font-medium">
            aura@company.com
          </p>
        </div>

      </div>
    </div>
  );
}
