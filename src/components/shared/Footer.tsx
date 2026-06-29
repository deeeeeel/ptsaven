import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          <span className="font-bold text-white tracking-wide">PT SAVEN</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} PT Savanta Sentra Ultima. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
