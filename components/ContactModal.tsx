'use client';

import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      fullName: form.fullName.value,
      emailAddress: form.emailAddress.value,
      phoneNumber: '+1' + form.phoneNumber.value,
      listing: form.listing.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://n8n.mybotnest.ai/webhook/8ecdcf22-b2bf-435d-82c1-62798c1861d2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          form.reset();
        }, 2000);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-[500px] rounded-[24px] overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200 p-8 flex flex-col">
        {!isSuccess && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        )}

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-2">Message Sent!</h2>
            <p className="text-gray-600">Ellie will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-[32px] font-bold text-[#000000] leading-tight">Contact Ellie</h2>
              <p className="text-[#000000] opacity-60 text-lg">
                Fill out the form below and Ellie will get back to you shortly.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Full Name</label>
                <input 
                  name="fullName"
                  type="text" 
                  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" 
                  placeholder="Your name" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Email Address</label>
                <input 
                  name="emailAddress"
                  type="email" 
                  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" 
                  placeholder="you@email.com" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 bg-gray-50 shrink-0">
                    <span className="text-sm font-medium text-black">+1</span>
                  </div>
                  <input 
                    name="phoneNumber"
                    type="tel" 
                    className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000]" 
                    placeholder="(555) 000-0000" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Which listing are you interested in? (optional)</label>
                <select 
                  name="listing"
                  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] transition-all text-[#000000] bg-white appearance-none"
                >
                  <option value="">Select a listing</option>
                  <option value="15079 Aramon Pl">15079 Aramon Pl</option>
                  <option value="17868 Valladares Dr">17868 Valladares Dr</option>
                  <option value="17965 Caminito Pinero">17965 Caminito Pinero</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-bold text-[#000000] uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-[#FAC332] h-32 transition-all text-[#000000] resize-none" 
                  placeholder="Tell me what you are looking for..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FAC332] text-[#000000] font-bold py-5 rounded-xl hover:bg-[#e5b22d] transition-all shadow-md text-[16px] hover:scale-[1.02] disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Ellie a Message'}
                </button>
                <p className="text-center text-[#000000] opacity-50 text-xs mt-4 font-medium">
                  Expect a response within minutes during business hours.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
