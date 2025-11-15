import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen text-white bg-[#0A0A0A]">

      {/* 🔥 HERO SECTION */}
      <section className="w-full px-4 py-10 flex items-center justify-center">
        <div
          className="w-full max-w-[95%] md:max-w-[90%] mx-auto rounded-2xl h-[350px] md:h-[420px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1500&q=80')`,
          }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>

    </div>
  );
}
