import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <span className="text-xl font-semibold dark:text-white"></span>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-white"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 ${isOpen ? 'hidden' : 'block'}`}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg
            className={`w-5 h-5 ${isOpen ? 'block' : 'hidden'}`}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'} md:flex md:items-center`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row p-2 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 md:border-0 dark:border-gray-700 md:space-x-4 rtl:space-x-reverse">
            <li>
              <a
                href="#Aboutme"
                className="block py-1 px-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-1 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Somethingaboutme"
                className="block py-1 px-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-1 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#listofknown"
                className="block py-1 px-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-1 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Languages
              </a>
            </li>
            <li>
              <a
                href="#Contactme"
                className="block py-1 px-2 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-1 dark:text-white md:dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
