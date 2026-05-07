'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Photo & Logo */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Glass Morphism Container */}
              <div className="bg-white p-4 rounded-[24px] shadow-xl border border-gray-100 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl overflow-hidden">
                <div className="relative h-[450px] w-full max-w-[350px] rounded-[18px] overflow-hidden">
                  <img 
                    src="/ellie2.jpg" 
                    alt="Ellie" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Logo Overlay */}
                <div className="mt-6 flex justify-center border-t border-gray-50 pt-6">
                  <img 
                    src="/pinnacle2.jpg" 
                    alt="Pinnacle Realty Services" 
                    className="h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio Text */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#000000] text-[40px] font-bold leading-tight">
                About Ellie
              </h2>
              <div className="w-20 h-1 bg-[#FAC332] rounded-full"></div>
            </div>

            <div className="flex flex-col gap-6 text-[#000000] opacity-80 leading-relaxed text-lg">
              <p>
                With over two decades of experience in the real estate industry, I have dedicated my career to helping clients unlock their property's full potential. At Pinnacle Realty Services, we believe in a premium, high-touch approach to every transaction.
              </p>
              <p>
                Whether you're looking for your first home or selling a luxury estate, my commitment remains the same: professional excellence, deep local market knowledge, and an unwavering focus on your success.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FAC332]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span className="font-semibold text-black">Strategic Marketing Expert</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FAC332]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span className="font-semibold text-black">Local Market Specialist</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FAC332]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span className="font-semibold text-black">Client-First Negotiator</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
