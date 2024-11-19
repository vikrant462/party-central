import React from 'react';
import partyImage from './party.webp';

interface PartyThemeProps {
  children: React.ReactNode;
}

const PartyTheme: React.FC<PartyThemeProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-pink-800/50 z-10" />

      {/* Party background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${partyImage})`, // Using the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content wrapper */}
      <div className="z-20 w-full lg:w-3/4 xl:w-2/3 p-8 rounded-xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 bg-opacity-90 bg-gradient-to-r from-purple-800/90 to-pink-800/90 mt-4 mb-4">
        {children}
      </div>
    </div>
  );
};

export default PartyTheme;
