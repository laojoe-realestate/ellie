'use client';

import React from 'react';

const Buyers = () => {
  const features = [
    {
      title: 'Newest Listings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      text: 'Get the latest homes on the market directly from the MLS database.'
    },
    {
      title: 'Local Market Trends',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      text: 'Weekly updated stats to understand local market direction.'
    },
    {
      title: 'Latest Transactions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>
        </svg>
      ),
      text: 'See recent sales and final prices to gauge market value.'
    }
  ];

  return (
    <section id="buyers" className="w-full py-24 px-6 md:px-12 bg-zinc-50 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[#000000] text-[40px] font-bold leading-tight">
            Know Your Market as a Buyer
          </h2>
          <div className="w-20 h-1 bg-[#FAC332] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 rounded-[24px] p-10 flex flex-col items-center text-center gap-6 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:bg-white/80 group"
            >
              <div className="w-20 h-20 rounded-full bg-[#FAC332]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FAC332]/20">
                {feature.icon}
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#000000]">
                  {feature.title}
                </h3>
                <p className="text-[#000000] opacity-70 leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Buyers;
