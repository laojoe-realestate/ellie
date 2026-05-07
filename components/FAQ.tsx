'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get started with buying a home?",
    answer: "Start by checking your credit score and setting a budget. Then get pre-approved for a mortgage to know what you can afford. Working with a local agent early on will help you understand the market and find homes that fit your needs."
  },
  {
    question: "What do I need to know before selling my home?",
    answer: "First, get a free market analysis to price your home right. Then make small repairs, declutter, and clean up the space. Your agent can help with staging and marketing to attract buyers quickly."
  },
  {
    question: "How long does it usually take to sell a home?",
    answer: "It depends on the local market, but most homes sell within a few weeks to a few months. Pricing correctly and having good photos can help speed up the process."
  },
  {
    question: "Do I need an agent to buy or sell a home?",
    answer: "While you don’t legally need one, an agent will guide you through paperwork, negotiate offers, and handle issues that come up. Their experience can save you time and stress."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-24 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-[#000000] text-[40px] font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#FAC332] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-zinc-50 transition-colors group"
              >
                <span className="text-lg md:text-xl font-bold text-black transition-colors group-hover:text-[#006DC7]">
                  {faq.question}
                </span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-[#000000] opacity-70 leading-relaxed text-lg border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
