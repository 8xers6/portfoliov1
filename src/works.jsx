import React, { useState } from 'react';
import { motion } from 'framer-motion';
import weabits from './Assets/weabits.jpeg';

function Works() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cards = [
    {
      image: weabits,
      text: ["WeABITS: A Web and Mobile Application of Barangay Information System"],
      language: "Javascript, HTML, CSS, Bootstrap, PHP",
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023",
      text: [
        "My Staging Expertise",
        "Unclutter and organize your home",
        "Neatly arrange drawers and cabinets",
        "Keep pets outdoors or off the premises",
        "Play soft music",
      ],
      language: "HTML, CSS, JavaScript",
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 ">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-64 perspective"
            onClick={() => setFlippedIndex(index === flippedIndex ? null : index)}
          >
            <div
              className={`card ${flippedIndex === index ? 'flipped' : ''}`}
            >
              {/* Front of the card */}
              <div className="card-face card-front">
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={card.image}
                    alt={`card-${index}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Text overlay at the bottom-left for language */}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm rounded">
                    {card.language}
                  </div>
                </motion.div>
              </div>
              
              {/* Back of the card with text only when flipped */}
              <div className={`card-face card-back flex items-center justify-center p-6 bg-gray-800 ${flippedIndex === index ? 'block' : 'hidden'}`}>
                <div className="text-center text-white">
                  {card.text.map((line, i) => (
                    <p key={i} className="text-lg font-medium mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-10 border-gray-300" />
    </div>
  );
}

export default Works;
