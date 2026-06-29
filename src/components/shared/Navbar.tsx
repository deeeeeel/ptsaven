'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className={`font-bold text-xl tracking-wide ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              PT SAVEN
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => router.push('/dashboard')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl ${
              isScrolled 
                ? 'bg-blue-800 text-white hover:bg-blue-900' 
                : 'bg-white text-blue-900 hover:bg-slate-50'
            }`}>
              Command Center <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-slate-100">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-slate-700 font-medium py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              router.push('/dashboard');
            }}
            className="bg-blue-800 text-white px-4 py-3 rounded-lg text-sm font-medium mt-2 w-full text-center flex justify-center items-center gap-2 active:scale-95 transition-all"
          >
            Login Command Center <ChevronRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};
