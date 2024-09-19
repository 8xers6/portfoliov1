import React from 'react';
import 'animate.css';
import Typing from 'react-typing-effect';

function AboutMeSection() {
  return (
    <div id="Somethingaboutme" className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center animate__animated animate__fadeIn animate__delay-1s">
        About Me
      </h1>
      
      <div className="max-w-4xl text-center mb-12 animate__animated animate__fadeIn animate__delay-2s">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <Typing
            text={["As a recent IT graduate, I am passionate about applying my academic expertise in Web and Mobile Application Development. I have gained valuable experience through coursework and hands-on projects, allowing me to tackle real-world IT challenges effectively. I am eager to contribute to your company's web development initiatives with my skills as a fast learner, adaptable team member, and dedicated professional committed to continuous growth."]}
            speed={50}
            eraseSpeed={50}
            typingDelay={500}
            cursorRenderer={cursor => <span>{cursor}</span>}
          />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
          <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
              <path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-4">Developer</h3>
          <p className="text-gray-700 text-base">As a developer, I thrive on crafting efficient code that solves complex problems elegantly. I am dedicated to creating seamless user experiences through innovative technology solutions.</p>
          <h5 className="font-semibold mt-4">Languages</h5>
          <p className="text-gray-700">ReactJS, C#, CSS, HTML</p>
        </div>

        <div className="flex flex-col justify-center items-center p-6 gap-4 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
          <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
              <path fill="currentColor" d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-4">Gamer</h3>
          <p className="text-gray-700 text-base">As a gamer, I immerse myself in virtual worlds, seeking both thrilling challenges and compelling narratives. I enjoy exploring diverse game genres to experience unique gameplay mechanics and storytelling.</p>
          <h5 className="font-semibold mt-4">Games I’m Playing</h5>
          <p className="text-gray-700">Dota 2, Valorant, CSGO</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
