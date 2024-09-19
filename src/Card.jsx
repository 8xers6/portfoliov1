import React from 'react';

const Card = ({ image, alt }) => {
    return (
        <div className="relative max-w-xs mx-auto mb-6 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl">
            <div className="relative flex items-center justify-center w-full h-56 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 transition-all duration-300 ease-in-out hover:from-gray-500 hover:via-gray-300 hover:to-gray-500">
                <img 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
                    src={image} 
                    alt={alt} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
        </div>
    );
}

export default Card;
