
import React from 'react';
import { logo1, logo2, logo3, logo4, logo5, logo6 ,logo8,logo9,logo10, logo11,logo12} from '../../asserts/certificates';

const logos = [
  { src: logo8, alt: 'Logo 8' },
  { src: logo9, alt: 'Logo 9' },
  { src: logo10, alt: 'Logo 10' },
  { src: logo11, alt: 'Logo 11' },
  { src: logo12, alt: 'Logo 12' },
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
            className="w-56 h-64 sm:w-64 sm:h-72 p-4 flex items-center justify-center bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
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
