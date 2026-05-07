'use client';
import React, { useEffect, useState } from 'react';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  listing: string;
  message: string;
}

interface AgentDashboardViewProps {
  lead: LeadData;
  agentEmailHtml: string;
  agentSmsText: string;
  onClose: () => void;
}

const AgentDashboardView = ({
  lead,
  agentEmailHtml,
  agentSmsText,
  onClose,
}: AgentDashboardViewProps) => {
  const [showContent, setShowContent] = useState(false);
  const [highlightRow, setHighlightRow] = useState(true);

  useEffect(() => {
    const fadeIn = setTimeout(() => setShowContent(true), 100);
    const stopHighlight = setTimeout(() => setHighlightRow(false), 3000);
    return () => {
      clearTimeout(fadeIn);
      clearTimeout(stopHighlight);
    };
  }, []);

  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const dateString = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
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
          <div className="inline-flex items-center gap-3 bg-[#FAC332]/20 px-5 py-2 rounded-full mb-6">
            <div className="w-8 h-8 bg-[#FAC332] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-black font-semibold">Lead captured. You are notified.</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">
            What you see on your end
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every inquiry is logged automatically and sent to you instantly — by email and SMS.
          </p>
        </div>

        {/* Google Sheet style table */}
        <div className="max-w-6xl w-full mb-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Sheet header bar */}
            <div className="bg-[#0f9d58] px-5 py-3 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z"/>
              </svg>
              <div className="text-white font-semibold">Pinnacle Realty — Leads</div>
              <div className="text-white/70 text-xs ml-auto">Live sheet</div>
            </div>
            {/* Sheet content */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f8f9fa] border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">Timestamp</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">Phone</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">Email</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-r border-gray-200">Listing</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className={`border-b border-gray-100 transition-colors duration-1000 ${
                      highlightRow ? 'bg-yellow-100' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-800 border-r border-gray-100 whitespace-nowrap">
                      {dateString} {timeString}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-medium border-r border-gray-100">{lead.name}</td>
                    <td className="px-4 py-3 text-gray-800 border-r border-gray-100 whitespace-nowrap">{lead.phone}</td>
                    <td className="px-4 py-3 text-gray-800 border-r border-gray-100">{lead.email}</td>
                    <td className="px-4 py-3 text-gray-800 border-r border-gray-100">{lead.listing || 'Not specified'}</td>
                    <td className="px-4 py-3 text-gray-800">{lead.message || '—'}</td>
                  </tr>
                  {/* Empty rows for sheet feel */}
                  {[...Array(4)].map((_, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="px-4 py-3 border-r border-gray-100">&nbsp;</td>
                      <td className="px-4 py-3 border-r border-gray-100">&nbsp;</td>
                      <td className="px-4 py-3 border-r border-gray-100">&nbsp;</td>
                      <td className="px-4 py-3 border-r border-gray-100">&nbsp;</td>
                      <td className="px-4 py-3 border-r border-gray-100">&nbsp;</td>
                      <td className="px-4 py-3">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Two columns: Agent Email and Agent SMS */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 mb-10">
          {/* Email mockup — Gmail style */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-[#f6f8fc] px-5 py-3 border-b border-gray-200 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-gray-500 font-medium ml-2">Inbox — Priority</div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-5 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#FAC332] font-bold text-lg shrink-0">
                  PR
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="font-semibold text-black truncate">Pinnacle Realty Lead Alerts</div>
                    <div className="text-xs text-gray-500 shrink-0">{timeString}</div>
                  </div>
                  <div className="text-sm text-gray-600 truncate">to Ellie@pinnaclerealtyservices.net</div>
                  <div className="text-xs text-gray-500 mt-1">Auto-notification</div>
                </div>
              </div>
              <div className="text-base font-semibold text-black mb-3">
                New Lead Alert
              </div>
              <div
                className="text-gray-800 leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: agentEmailHtml }}
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
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#FAC332] font-bold mx-auto mb-1">
                    PR
                  </div>
                  <div className="text-sm font-semibold text-black">Pinnacle Lead Alert</div>
                  <div className="text-xs text-gray-500">SMS</div>
                </div>
                <div className="bg-white px-4 py-6 min-h-[280px]">
                  <div className="text-center text-xs text-gray-400 mb-4">{timeString}</div>
                  <div className="flex justify-start mb-2">
                    <div className="bg-[#e5e5ea] text-black rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[260px] text-sm leading-relaxed">
                      {agentSmsText}
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

        {/* Back to website button */}
        <button
          onClick={onClose}
          className="bg-[#FAC332] text-black font-bold px-10 py-4 rounded-xl hover:bg-[#e5b22d] transition-all shadow-lg text-base hover:scale-[1.02]"
        >
          Back to website
        </button>
        <p className="text-xs text-gray-500 mt-4">
          This was a live demo. Real inquiries trigger the same flow — instantly.
        </p>
      </div>
    </div>
  );
};

export default AgentDashboardView;
