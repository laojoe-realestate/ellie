'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Listings', href: '#listings', active: false },
    { name: 'Know Your Market', href: '#', isDropdown: true },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#footer', active: false },
  ];

  const dropdownItems = [
    { name: 'For Sellers', href: '#sellers' },
    { name: 'For Buyers', href: '#buyers' },
  ];

  return (
    <header className="sticky top-0 z-[60] w-full h-[80px] bg-white border-b border-gray-100 flex items-center px-6 md:px-12 backdrop-blur-md bg-white/90 font-sans">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Left: Logo */}
        <div className="w-[180px] h-[65px] flex items-center justify-center shrink-0 overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
          <img
            src="/pinnacle2.jpg"
            alt="Pinnacle Realty Services"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Nav Links and Agent Photo */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.isDropdown ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer py-1 text-[15px] font-medium text-[#000000]/70 hover:text-[#006DC7] transition-all"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-3 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      {dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2 text-sm text-[#000000]/70 hover:text-[#006DC7] hover:bg-gray-50 transition-all"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`text-[15px] font-medium transition-all hover:text-[#006DC7] relative py-1 ${
                      link.active ? 'text-[#000000]' : 'text-[#000000]/70'
                    }`}
                  >
                    {link.name}
                    {link.active && (
                      <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#FAC332]"></span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Agent Photo */}
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0 cursor-pointer border-2 border-[#FAC332]/20 transition-all hover:scale-110 hover:border-[#FAC332]">
            <img
              src="/ellie2.jpg"
              alt="Ellie"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-black transition-transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.isDropdown ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold text-black opacity-40 uppercase tracking-widest text-[10px]">Know Your Market</span>
                    {dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-semibold py-1 text-black"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-semibold py-2 ${
                      link.active ? 'text-[#006DC7]' : 'text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;