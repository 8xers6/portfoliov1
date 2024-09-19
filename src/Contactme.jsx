import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="Contactme">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out through the following contacts:</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
            <p className="text-gray-600">jacintojoemarie.pdm@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Phone:</h3>
            <p className="text-gray-600">+639219318175</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Address:</h3>
            <p className="text-gray-600">#1482 Lambakin, Marilao Bulacan</p>
          </div>
        </div>
        <p className="text-gray-600 mt-6">I look forward to hearing from you!</p>
      </div>
      <hr className="my-8 border-gray-300" />
    </div>
  );
}

export default Contact;
