'use client';

import React from 'react';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('listings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image with slight zoom effect on load */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ 
          backgroundImage: 'url("/hero.jpg")',
        }}
      />

      {/* Centered Content (No Overlay) */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-[900px]">
          <h1 
            className="text-[#000000] font-bold leading-tight"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              textShadow: '0 2px 15px rgba(255,255,255,0.9)'
            }}
          >
            Find your next home here
          </h1>
          
          <p 
            className="text-[#000000] mt-6 leading-relaxed max-w-[600px]"
            style={{ 
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 500,
              textShadow: '0 1px 10px rgba(255,255,255,0.8)'
            }}
          >
            Unlock your property's full Potential with Pinnacle Realty Services.
          </p>

          <button
            onClick={handleScroll}
            className="mt-10 bg-[#FAC332] text-[#000000] font-bold py-5 px-10 rounded-[12px] hover:bg-[#e5b22d] transition-all shadow-xl hover:scale-105 active:scale-95 text-lg"
          >
            View My Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
