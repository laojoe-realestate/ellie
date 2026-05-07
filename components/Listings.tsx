'use client';

import React, { useState } from 'react';

interface Listing {
  id: number;
  photos: string[];
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  description: string;
  shortDesc: string;
}

const listings: Listing[] = [
  {
    id: 1,
    photos: ['/house1.webp', '/house1_2.webp', '/house1_3.webp', '/house1_4.webp'],
    price: '$2,443,400',
    address: '15079 Aramon Pl, San Diego, CA 92127',
    beds: 4,
    baths: 3,
    sqft: '2,813 sqft',
    shortDesc: 'Stunning 4-bedroom home in the heart of 4S Ranch with gourmet kitchen.',
    description: 'Stunning 4-bedroom home in the heart of 4S Ranch. Built in 2016, this single-family residence features a fireplace, solar panels, and a gourmet kitchen. Neighborhood: 4S Ranch, San Diego CA 92127.',
  },
  {
    id: 2,
    photos: ['/house2.webp', '/house2_1.webp', '/house2_2.webp'],
    price: '$1,245,100',
    address: '17868 Valladares Dr, San Diego, CA 92127',
    beds: 4,
    baths: 3,
    sqft: '1,745 sqft',
    shortDesc: 'Charming single-family home in Rancho Bernardo with central air.',
    description: 'Charming single-family home in Rancho Bernardo. Built in 1979, 4 bedrooms, 3 bathrooms, 1,745 sqft. Central air, forced air heating. Neighborhood: Rancho Bernardo, San Diego CA 92127.',
  },
  {
    id: 3,
    photos: ['/house3.webp', '/house3_1.webp', '/house3_2.webp'],
    price: '$675,000',
    address: '17965 Caminito Pinero Unit 181, San Diego, CA 92128',
    beds: 2,
    baths: 2,
    sqft: '1,080 sqft',
    shortDesc: 'Beautiful condominium in Rancho Bernardo with community pool access.',
    description: 'Beautiful condominium in Rancho Bernardo. Built in 1985, featuring a fireplace in the family room, central forced air, and community pool. Neighborhood: Rancho Bernardo, San Diego CA 92128.',
  },
];

const Modal = ({ isOpen, onClose, listing, type, onInquire }: { 
  isOpen: boolean; 
  onClose: () => void; 
  listing?: Listing; 
  type: 'info' | 'contact';
  onInquire?: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-[500px] rounded-[24px] overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {type === 'info' && listing ? (
          <div className="flex flex-col bg-white overflow-y-auto">
            <div className="w-full h-[300px] overflow-hidden shrink-0">
              <img src={listing.photos[0]} alt={listing.address} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-[#000000] font-bold text-[32px] leading-none">{listing.price}</h2>
                <p className="text-[#000000] text-lg font-normal opacity-70">{listing.address}</p>
              </div>

              <div className="flex items-center gap-6 text-[#000000]">
                <div className="flex items-center gap-2 text-[#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v16"/><path d="M2 17h20"/></svg>
                  <span className="font-medium">{listing.beds} bed</span>
                </div>
                <div className="flex items-center gap-2 text-[#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                  <span className="font-medium">{listing.baths} bath</span>
                </div>
                <div className="flex items-center gap-2 text-[#000000]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                  <span className="font-medium">{listing.sqft}</span>
                </div>
              </div>

              <p className="text-[#000000] leading-relaxed text-[16px]">{listing.description}</p>

              <button 
                onClick={onInquire}
                className="w-full bg-[#FAC332] text-[#000000] font-bold py-5 rounded-[12px] hover:bg-[#e5b22d] transition-all shadow-md mt-4 text-[16px] hover:scale-[1.02]"
              >
                Inquire About This Property
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 flex flex-col bg-white">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-[32px] font-bold text-[#000000] leading-tight">Contact Ellie</h2>
              <p className="text-[#000000] opacity-60 text-[16px]">
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
        )}
      </div>
    </div>
  );
};

const ListingCard = ({ listing }: { listing: Listing }) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev + 1) % listing.photos.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev - 1 + listing.photos.length) % listing.photos.length);
  };

  return (
    <>
      <div className="bg-white rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 group hover:scale-[1.02]">
        {/* Photo Carousel */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <img 
            src={listing.photos[currentPhoto]} 
            alt={listing.address} 
            className="w-full h-full object-cover transition-opacity duration-500" 
          />
          
          <div className="absolute top-4 left-4 bg-red-600 text-white text-[12px] font-bold px-[10px] py-[4px] rounded-[20px] uppercase tracking-wider shadow-lg">
            Sold
          </div>

          {/* Carousel Arrows */}
          <button 
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {listing.photos.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentPhoto ? 'bg-white w-3' : 'bg-white/50'}`} 
              />
            ))}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[28px] font-bold text-[#000000] leading-none">{listing.price}</h3>
            <p className="text-[15px] text-[#000000] opacity-60 line-clamp-1">{listing.address}</p>
          </div>
          
          <div className="flex items-center gap-4 text-[#000000] text-[14px] font-medium">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v16"/><path d="M2 17h20"/></svg>
              {listing.beds} bed
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              {listing.baths} bath
            </span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006DC7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
              {listing.sqft}
            </span>
          </div>

          <p className="text-[#000000] text-[14px] leading-relaxed line-clamp-2 opacity-80 italic">
            "{listing.shortDesc}"
          </p>

          <button 
            onClick={() => setIsInfoModalOpen(true)}
            className="mt-auto w-full bg-[#FAC332] text-[#000000] font-bold py-4 rounded-[12px] hover:bg-[#e5b22d] transition-all shadow-sm"
          >
            More Info
          </button>
        </div>
      </div>

      <Modal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
        listing={listing} 
        type="info"
        onInquire={() => {
          setIsInfoModalOpen(false);
          setIsContactModalOpen(true);
        }}
      />
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        type="contact"
      />
    </>
  );
};

const Listings = () => {
  return (
    <section id="listings" className="w-full bg-zinc-50 py-[80px] px-4 md:px-12 scroll-mt-20 border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#000000] text-[40px] font-bold text-center mb-[60px]">
          Listings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
