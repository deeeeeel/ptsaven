import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mari Berdiskusi.</h2>
            <div className="w-16 h-1.5 bg-amber-400 rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg mb-12">
              Hubungi tim kami untuk mendiskusikan peluang proyek, kemitraan strategis, atau kebutuhan bisnis korporasi Anda.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Kantor Pusat</h4>
                  <p className="text-slate-600">Jl. Sungai Bambu No.3B<br/>Tanjung Priok, Jakarta Utara</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Telepon</h4>
                  <p className="text-slate-600">0852 - 8601 - 2002</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Email</h4>
                  <p className="text-slate-600">savantasentraultima@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Kirim Pesan</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Perusahaan / Institusi</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                  placeholder="PT / CV Anda" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                  placeholder="email@perusahaan.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Deskripsi Kebutuhan</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none" 
                  placeholder="Jelaskan detail proyek atau kebutuhan Anda..."
                ></textarea>
              </div>
              <button type="button" className="w-full active:scale-95 bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2">
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
