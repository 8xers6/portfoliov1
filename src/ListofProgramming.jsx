import React from 'react';
import Card from './Card';

function ListofProgramming() {
    const cards = [
        {
            id: 1,
            image: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000',
            alt: 'Image 1'
        },
        {
            id: 2,
            image: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
            alt: 'Image 2'
        },
        {
            id: 3,
            image: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
            alt: 'Image 3'
        },
        {
            id: 4,
            image: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000',
            alt: 'Image 4'
        },
        {
            id: 5,
            image: 'https://img.icons8.com/?size=100&id=NFPVueWvSCNS&format=png&color=000000',
            alt: 'Image 5'
        },
        {
            id: 6,
            image: 'https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000',
            alt: 'Image 6'
        },
        
    ];

    return (
        <div className="flex flex-col items-center min-h-50% bg-gray-100 py-4" >
            <h1 className="text-3xl font-bold mb-4" id="listofknown">Known Languages and Database</h1>
            <span>
            &nbsp;
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        alt={card.alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListofProgramming;
