import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 opacity-90 z-0"></div>
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2000ms' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-500/30 text-blue-200 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            <Globe2 size={14} className="text-amber-400" />
            National Enterprise
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            End-to-End <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Business Solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
            PT. Savanta Sentra Ultima (PT SAVEN) is your strategic partner for construction, general trading, event management, and industrial support services on a national scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all backdrop-blur-sm flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
