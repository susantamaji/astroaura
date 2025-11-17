import React, { useState } from "react";

export default function Stone() {
  const [selectedStone, setSelectedStone] = useState(null);

  const stones = [
    {
      name: "Violet Stone",
      color: "text-purple-400",
      img: "https://images.pexels.com/photos/1769359/pexels-photo-1769359.jpeg",
      desc: "A stone of peace and creativity. Violet stones amplify spiritual awareness and intuition.",
      details: `✨ **Astrological Benefits**
- Enhances spiritual vision and psychic abilities  
- Connects you with higher consciousness  
- Helps balance Sahasrara (Crown chakra)  
- Best for: Pisces, Aquarius  
- Planet Influence: Neptune & Jupiter`,
    },
    {
      name: "Panna (Emerald)",
      color: "text-green-400",
      img: "https://images.pexels.com/photos/918599/pexels-photo-918599.jpeg",
      desc: "Associated with Mercury, Emerald enhances wisdom, communication, and financial growth.",
      details: `✨ **Astrological Benefits**
- Ruled by Mercury (Budh)  
- Increases intelligence, clarity & business success  
- Helps in speech, communication, and memory  
- Best for: Gemini, Virgo  
- Strengthens heart chakra`,
    },
    {
      name: "Amethyst Stone",
      color: "text-purple-300",
      img: "https://images.pexels.com/photos/1452992/pexels-photo-1452992.jpeg",
      desc: "A calming stone ruled by Jupiter. Provides clarity, intuition, and emotional healing.",
      details: `✨ **Astrological Benefits**
- Ruled by Jupiter (Guru)  
- Helps overcome stress, anxiety & confusion  
- Powerful meditation stone  
- Best for: Pisces, Sagittarius  
- Boosts intuition & spiritual growth`,
    },
    {
      name: "Red Coral (Moonga)",
      color: "text-red-400",
      img: "https://images.pexels.com/photos/942534/pexels-photo-942534.jpeg",
      desc: "Ruled by Mars, Red Coral boosts courage, energy, and confidence.",
      details: `✨ **Astrological Benefits**
- Ruled by Mars (Mangal)  
- Boosts courage, confidence & willpower  
- Helps overcome fear & laziness  
- Best for: Aries, Scorpio  
- Good for athletes & leaders`,
    },
    {
      name: "Blue Sapphire (Neelam)",
      color: "text-blue-400",
      img: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
      desc: "Ruled by Saturn, brings fast success, discipline, and protection.",
      details: `✨ **Astrological Benefits**
- Ruled by Saturn (Shani)  
- Brings instant success & wealth  
- Enhances focus, discipline & justice  
- Best for: Capricorn, Aquarius  
- Extremely powerful stone`,
    },
    {
      name: "Ruby (Manikya)",
      color: "text-red-500",
      img: "https://images.pexels.com/photos/1153600/pexels-photo-1153600.jpeg",
      desc: "Ruby enhances confidence, leadership, and personal power.",
      details: `✨ **Astrological Benefits**
- Ruled by the Sun (Surya)  
- Gives courage, fame & vitality  
- Strengthens leadership qualities  
- Best for: Leo  
- Balances self-esteem and life force`,
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] py-16">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {stones.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] rounded-3xl shadow-md hover:shadow-purple-500/20 
            transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="rounded-t-3xl w-full h-[260px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className={`text-2xl font-bold mb-3 ${item.color}`}>
                {item.name}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                {item.desc}
              </p>

              <button
                onClick={() => setSelectedStone(item)}
                className="text-purple-400 font-semibold hover:underline"
              >
                EXPLORE →
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedStone && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-[#111] text-white max-w-lg w-full rounded-2xl p-6 shadow-xl border border-purple-500/30">

            <h2 className="text-3xl font-bold mb-4">{selectedStone.name}</h2>

            <img
              src={selectedStone.img}
              alt={selectedStone.name}
              className="rounded-xl w-full h-[250px] object-cover mb-4"
            />

            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {selectedStone.details}
            </p>

            <button
              onClick={() => setSelectedStone(null)}
              className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 
              rounded-xl font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
