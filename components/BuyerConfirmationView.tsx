'use client';
import React, { useEffect, useState } from 'react';

interface BuyerConfirmationViewProps {
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  emailHtml: string;
  smsText: string;
  onComplete: () => void;
}

const BuyerConfirmationView = ({
  buyerName,
  buyerPhone,
  buyerEmail,
  emailHtml,
  smsText,
  onComplete,
}: BuyerConfirmationViewProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fadeIn = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(fadeIn);
  }, []);

  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
      <div
        className={`min-h-screen flex flex-col items-center justify-start px-6 py-12 transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Header */}
        <div className="max-w-6xl w-full text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-green-100 px-5 py-2 rounded-full mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-green-800 font-semibold">Inquiry received in under 1 second</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
            What your buyer sees
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The moment {buyerName || 'your buyer'} hits Send, they receive both an email and an SMS — automatically.
          </p>
        </div>

        {/* Two columns: Email and SMS */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
          {/* Email mockup — Gmail style */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-[#f6f8fc] px-5 py-3 border-b border-gray-200 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-gray-500 font-medium ml-2">Inbox</div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-5 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#FAC332] flex items-center justify-center text-black font-bold text-lg shrink-0">
                  E
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="font-semibold text-black truncate">Ellie Mohseni</div>
                    <div className="text-xs text-gray-500 shrink-0">{timeString}</div>
                  </div>
                  <div className="text-sm text-gray-600 truncate">to {buyerEmail || 'you'}</div>
                  <div className="text-xs text-gray-500 mt-1">Pinnacle Realty Services</div>
                </div>
              </div>
              <div className="text-base font-semibold text-black mb-3">
                We received your inquiry
              </div>
              <div
                className="text-gray-800 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: emailHtml }}
              />
            </div>
          </div>

          {/* SMS mockup — iPhone style */}
          <div className="flex justify-center">
            <div className="bg-black rounded-[40px] p-3 shadow-2xl w-full max-w-[340px]">
              <div className="bg-white rounded-[32px] overflow-hidden">
                <div className="bg-white pt-3 pb-2 px-6 flex items-center justify-between text-xs font-semibold text-black relative">
                  <span>{timeString}</span>
                  <div className="absolute left-1/2 -translate-x-1/2 top-3 w-24 h-5 bg-black rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <span>•••</span>
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="bg-[#f6f6f6] border-b border-gray-200 py-3 px-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAC332] flex items-center justify-center text-black font-bold mx-auto mb-1">
                    E
                  </div>
                  <div className="text-sm font-semibold text-black">Ellie Mohseni</div>
                  <div className="text-xs text-gray-500">Pinnacle Realty</div>
                </div>
                <div className="bg-white px-4 py-6 min-h-[280px]">
                  <div className="text-center text-xs text-gray-400 mb-4">{timeString}</div>
                  <div className="flex justify-start mb-2">
                    <div className="bg-[#e5e5ea] text-black rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[260px] text-sm leading-relaxed">
                      {smsText}
                    </div>
                  </div>
                </div>
                <div className="bg-[#f6f6f6] py-2 px-4 flex items-center gap-2 border-t border-gray-200">
                  <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                    iMessage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={onComplete}
            className="group bg-[#FAC332] text-black font-bold px-10 py-5 rounded-xl hover:bg-[#e5b22d] transition-all shadow-lg text-base hover:scale-[1.03] flex items-center gap-3 animate-pulse-subtle"
            style={{
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          >
            <span>Show me what I receive</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Click to see the agent side of the same lead
          </p>
        </div>

        <style jsx>{`
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 10px 25px -5px rgba(250, 195, 50, 0.4), 0 4px 6px -2px rgba(250, 195, 50, 0.1);
            }
            50% {
              box-shadow: 0 20px 40px -5px rgba(250, 195, 50, 0.7), 0 8px 12px -2px rgba(250, 195, 50, 0.3);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BuyerConfirmationView;
