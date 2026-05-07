'use client';

import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-[500px] rounded-[24px] overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200 p-8 flex flex-col">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-[32px] font-bold text-[#000000] leading-tight">Contact Ellie</h2>
          <p className="text-[#000000] opacity-60 text-lg">
            Fill out the form below and Ellie will get back to you shortly.
          </p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Full Name</label>
            <input type="text" className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" placeholder="Your name" />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Email Address</label>
            <input type="email" className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" placeholder="you@email.com" />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Phone Number</label>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 bg-gray-50 shrink-0">
                <span className="text-sm font-medium text-black">+1</span>
              </div>
              <input type="tel" className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Which listing are you interested in? (optional)</label>
            <select className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] bg-white appearance-none">
              <option value="">Select a listing</option>
              <option value="15079 Aramon Pl">15079 Aramon Pl</option>
              <option value="17868 Valladares Dr">17868 Valladares Dr</option>
              <option value="17965 Caminito Pinero">17965 Caminito Pinero</option>
              <option value="Other">Other / General Inquiry</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Message</label>
            <textarea className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] h-32 transition-all text-[#000000] resize-none" placeholder="Tell me what you are looking for..."></textarea>
          </div>
          <div className="pt-2">
            <button className="w-full bg-[#FAC332] text-[#000000] font-bold py-5 rounded-xl hover:bg-[#e5b22d] transition-all shadow-md text-[16px] hover:scale-[1.02]">
              Send Ellie a Message
            </button>
            <p className="text-center text-[#000000] opacity-50 text-xs mt-4 font-medium">
              Expect a response within minutes during business hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
