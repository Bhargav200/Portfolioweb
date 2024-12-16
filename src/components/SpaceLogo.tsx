import React from 'react';
import logo from '../assets/apbrt-logo.png';

export function SpaceLogo() {
  return (
    <div className="flex items-center">
      <img 
        src={logo}
        alt="APBRT Logo" 
        className="h-28 w-auto hover:opacity-80 transition-opacity ml-[-10px]"
      />
    </div>
  );
}