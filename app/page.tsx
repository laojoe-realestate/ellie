'use client';

import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Listings from "@/components/Listings";
import Reviews from "@/components/Reviews";
import Sellers from "@/components/Sellers";
import Buyers from "@/components/Buyers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Listings />
        <Reviews />
        <Sellers />
        <Buyers />
        <FAQ />
        
        {/* Contact Footer Section */}
        <section id="contact" className="py-24 px-6 bg-zinc-50 border-t border-gray-100 scroll-mt-20">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-black">Ready to unlock your property's potential?</h2>
              <p className="text-lg text-black/60 max-w-[600px]">Whether you are buying, selling, or just curious about the market, Ellie is here to guide you every step of the way.</p>
            </div>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#FAC332] text-black font-bold py-5 px-12 rounded-xl hover:bg-[#e5b22d] transition-all shadow-xl hover:scale-105 active:scale-95 text-lg"
            >
              Contact Ellie Today
            </button>
          </div>
        </section>
      </main>

      {/* Global Sticky Contact Button */}
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-8 right-8 z-[50] bg-[#FAC332] text-black font-bold py-4 px-6 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-2 border-2 border-white/20 backdrop-blur-sm md:bottom-12 md:right-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span className="hidden md:inline">Contact Ellie</span>
      </button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-[50] bg-white text-black p-3 rounded-full shadow-xl border border-gray-100 transition-all hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-4 md:right-12 md:bottom-28"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </button>
      )}

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <Footer />
    </div>
  );
}
