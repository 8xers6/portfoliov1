import React from 'react';
import sampleImage from './Assets/fbfb.jpeg';
import 'animate.css';
import myresume from './Assets/myresume.pdf'

function AboutMe() {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="Aboutme" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-6">
      <div className="text-center">
        <div className="pb-12">
          <span className="text-yellow-500 text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">Development to </span>
          <span className="text-green-600 text-6xl font-bold animate__animated animate__fadeIn animate__delay-2s"> Growth to </span>
          <span className="text-red-500 text-7xl font-bold animate__animated animate__fadeIn animate__delay-3s"><b>Success</b></span>
        </div>
        <img
          src={sampleImage}
          alt="Joemarie Jacinto"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-gray-300 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="mt-6">
          <h2 className="text-3xl font-extrabold text-gray-800 animate__animated animate__fadeIn animate__delay-4s">Hello, I'm <b>Joemarie Jacinto</b></h2>
          <p className="mt-3 text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-5s">I recently graduated from Pambayang Dalubhasaan ng Marilao.</p>
          <p className="mt-2 text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-6s">I'm seeking opportunities to showcase my skills and talent.</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => handleScroll('Contactme')}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Contact Me
        </button>
        <a
          href={myresume}
          download
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center justify-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
