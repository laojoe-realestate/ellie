'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  isLong?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ashley L.',
    rating: 5,
    text: 'We had an exceptional experience working with our realtor, Ellie Mohseni, from start to finish. During what could have been a very stressful and uncertain time, she was a true advocate for us every step of the way. Her communication was consistently clear, timely, and thorough—ensuring we always felt informed and supported throughout the entire process.',
    isLong: true,
  },
  {
    id: 2,
    name: 'Philip N.',
    rating: 5,
    text: 'I appreciate all you done and found our dream home. You are caring, sharp and a go getter when it comes to buying and selling homes. I would refer you to my friends and families anytime. Thanks again',
  },
  {
    id: 3,
    name: 'Turkan Moinizand',
    rating: 5,
    text: 'Wonderful experience with Ellie Selling my home, I highly recommend her. Thank you Ellie!!!!',
  },
];

const ReviewCard = ({ review, isActive, isPeek }: { review: Review; isActive: boolean; isPeek: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`w-full max-w-[800px] mx-auto bg-white/40 backdrop-blur-md border border-white/20 rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col gap-6 transition-all duration-700 h-full
        ${isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-90 blur-[2px]'}
      `}
    >
      {/* 5 Stars */}
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FAC332" stroke="#FAC332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <p className={`text-[#000000] text-lg md:text-xl leading-relaxed transition-all duration-300 ${!isExpanded && review.isLong ? 'line-clamp-3' : ''}`}>
          "{review.text}"
        </p>
        
        {review.isLong && isActive && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[#006DC7] font-semibold text-sm hover:underline w-fit"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-black/5 mt-auto">
        <div className="w-12 h-12 rounded-full bg-[#FAC332] flex items-center justify-center text-black font-bold text-lg">
          {review.name.charAt(0)}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-bold text-black">{review.name}</span>
          <span className="text-black/50 text-sm">Verified Google Review</span>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getReviewIndex = (offset: number) => {
    const index = (currentIndex + offset + reviews.length) % reviews.length;
    return index;
  };

  return (
    <section id="testimonials" className="w-full py-24 bg-zinc-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4 px-6">
          <h2 className="text-[#000000] text-[40px] font-bold leading-tight">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#FAC332] rounded-full"></div>
        </div>

        <div 
          className="relative px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Track */}
          <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
            {/* Previous Peek */}
            <div className="absolute left-0 w-[80%] md:w-[60%] lg:w-[40%] transition-all duration-700 ease-in-out transform -translate-x-[75%] md:-translate-x-[85%] pointer-events-none hidden sm:block">
              <ReviewCard 
                review={reviews[getReviewIndex(-1)]} 
                isActive={false} 
                isPeek={true} 
              />
            </div>

            {/* Active Slide */}
            <div className="relative w-full max-w-[800px] z-10 transition-all duration-700 ease-in-out">
              <ReviewCard 
                review={reviews[currentIndex]} 
                isActive={true} 
                isPeek={false} 
              />
            </div>

            {/* Next Peek */}
            <div className="absolute right-0 w-[80%] md:w-[60%] lg:w-[40%] transition-all duration-700 ease-in-out transform translate-x-[75%] md:translate-x-[85%] pointer-events-none hidden sm:block">
              <ReviewCard 
                review={reviews[getReviewIndex(1)]} 
                isActive={false} 
                isPeek={true} 
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FAC332] w-8' 
                    : 'bg-black/10 hover:bg-black/20'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
