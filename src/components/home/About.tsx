import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      {/* Floating Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative -mt-32 mb-20 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <h4 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">10+</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Industries</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">100%</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Compliant</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">NAT</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Scale</p>
            </div>
            <div className="text-center px-4">
              <h4 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">PMDN</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Entity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold mb-4">
              <ShieldCheck size={20} />
              <span>Tentang Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Membangun ekosistem bisnis yang kuat dan terpercaya.
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 rounded-full mb-8"></div>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              <strong>PT. SAVANTA SENTRA ULTIMA (PT. SAVEN)</strong> adalah perusahaan nasional (PMDN) tersertifikasi yang berdedikasi untuk memberikan layanan prima di berbagai sektor. Mulai dari pembangunan infrastruktur hingga penyediaan kebutuhan logistik dan manajemen.
            </p>
            <ul className="space-y-4">
              {[
                'Terdaftar resmi dengan NIB 1106260057016',
                'Kepatuhan hukum (Legal Compliance) terjamin',
                'Pusat kendali proyek berbasis teknologi cerdas',
                'Mitra strategis untuk BUMN, Pemerintahan, dan Swasta'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Corporate Visuals with Effects */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            {/* Background Blob Effects */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            {/* Main Image (Top Right) */}
            <div className="absolute top-0 right-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 group transition-all duration-500 hover:z-30 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                alt="Corporate Office" 
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Secondary Image (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 group transition-all duration-500 hover:scale-105 hover:-translate-y-2">
               <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                alt="Business Meeting" 
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="pr-4">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Terverifikasi</p>
                <p className="text-lg font-bold text-slate-900 leading-none">100% Legal</p>
              </div>
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2Mzg0ZTIiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
