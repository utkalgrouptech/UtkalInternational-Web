
import React from 'react';
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '../../asserts/certificates';

const logos = [
  { src: logo1, alt: 'Logo 1' },
 
  { src: logo3, alt: 'Logo 3' },
  { src: logo4, alt: 'Logo 4' },
  { src: logo5, alt: 'Logo 5' },
  { src: logo6, alt: 'Logo 6' },
];

export default function CertificatePage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 animate-fade-in">
        We Are Certified By
      </h1>

      {/* Logos Section */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-52 h-52 sm:w-60 sm:h-60 p-8 flex items-center justify-center bg-white shadow-lg rounded-lg transform hover:scale-110 hover:rotate-3 transition-transform duration-300 ease-in-out animate-slide-up"
          >
            <img
              src={logo.src.src}
              alt={logo.alt}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
