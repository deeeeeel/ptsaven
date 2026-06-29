import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Editorial Style Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-4 font-bold mb-6 tracking-widest text-sm uppercase text-slate-400">
              <div className="w-12 h-0.5 bg-amber-500"></div>
              <span>Area Layanan</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Solusi Terintegrasi <br />
              <span className="text-blue-700">Untuk Industri.</span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-3">
            <p className="text-slate-600 text-lg border-l-4 border-amber-400 pl-5 font-medium leading-relaxed">
              Melayani berbagai kebutuhan bisnis dari hulu ke hilir melalui 6 divisi unggulan perusahaan untuk mendukung kesuksesan operasional Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative bg-slate-50 p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              {/* Magic Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              {/* Watermark Number */}
              <div className="absolute -right-2 -top-6 text-[140px] font-black text-slate-200/50 group-hover:text-white/5 transition-colors duration-500 z-0 select-none pointer-events-none">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full min-h-[280px]">
                {/* Header Card: Icon & Action Arrow */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-16 h-16 rounded-xl bg-white text-blue-700 flex items-center justify-center shadow-sm group-hover:bg-white/10 group-hover:text-amber-400 transition-colors duration-500 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-amber-400/50 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-all duration-500">
                    <ArrowRight size={22} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Animated Progress Line */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-200 group-hover:bg-white/10 transition-colors duration-500">
                <div className="h-full bg-amber-400 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
