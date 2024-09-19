import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center py-1">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">&copy; 2024 Joemarie Jacinto</p>
        <p className="text-sm mb-4">I made this website using React JS and Tailwind CSS with the help of Chat GPT</p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/8xers6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/joemariejacintoo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
