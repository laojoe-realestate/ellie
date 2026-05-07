'use client';

import React from 'react';

const Sellers = () => {
  return (
    <section id="sellers" className="w-full py-24 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-16 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          
          {/* Left Side: Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#000000] text-[40px] font-bold leading-tight">
                Get a Free Comparative Market Analysis
              </h2>
              <div className="w-20 h-1 bg-[#FAC332] rounded-full"></div>
            </div>

            <ul className="flex flex-col gap-6 text-[#000000] opacity-80 text-lg">
              <li className="flex gap-4">
                <span className="text-[#FAC332] font-bold text-xl">•</span>
                <span>Access up-to-date MLS data from Ellie’s local market</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FAC332] font-bold text-xl">•</span>
                <span>Compare recent sales, pending homes, and active listings in your area</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FAC332] font-bold text-xl">•</span>
                <span>Understand current prices and trends to price your home competitively</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Lead Form */}
          <div className="flex-1 bg-zinc-50 rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-inner">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider opacity-60">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] shadow-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider opacity-60">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] shadow-sm"
                  placeholder="you@email.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider opacity-60">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] shadow-sm"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#000000] uppercase tracking-wider opacity-60">Property Address (Optional)</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] shadow-sm"
                  placeholder="123 Main St, City, State"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#FAC332] text-[#000000] font-bold py-5 rounded-xl hover:bg-[#e5b22d] transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] mt-2 text-[16px]"
              >
                Request My Free CMA
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sellers;
