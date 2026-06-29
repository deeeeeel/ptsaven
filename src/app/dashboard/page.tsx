'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CalendarDays, 
  LayoutDashboard,
  FolderKanban,
  Scale,
  AlertTriangle,
  FileText,
  Activity,
  Clock,
  Zap,
  FileCheck2,
  TrendingUp,
  MoreVertical,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('executive');

  const menuItems = [
    { id: 'executive', icon: <LayoutDashboard size={20} />, label: 'Executive Board' },
    { id: 'projects', icon: <FolderKanban size={20} />, label: 'Projects' },
    { id: 'legal', icon: <Scale size={20} />, label: 'Legal & Compliance' },
    { id: 'documents', icon: <FileText size={20} />, label: 'Document Center' },
    { id: 'timeline', icon: <CalendarDays size={20} />, label: 'Timeline' },
  ];

  const renderExecutiveBoard = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Executive Monitoring</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time overview of PT SAVEN operations.</p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          System Operational
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Projects', value: '12', sub: '+2 from last month', icon: <FolderKanban size={24} />, color: 'blue' },
          { title: 'Legal Compliance', value: '92%', sub: '3 documents expiring', icon: <FileCheck2 size={24} />, color: 'emerald' },
          { title: 'Total Revenue Pipeline', value: 'Rp 8.5B', sub: 'On negotiation phase', icon: <TrendingUp size={24} />, color: 'amber' },
          { title: 'Critical Deadlines', value: '4', sub: 'Within 7 days', icon: <Clock size={24} />, color: 'red' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                {stat.icon}
              </div>
              <MoreVertical size={20} className="text-slate-300 cursor-pointer hover:text-slate-600" />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1 mb-1">{stat.value}</h3>
              <p className="text-xs font-medium text-slate-400">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div className="flex items-center gap-2 mb-6">
              <Zap size={20} className="text-amber-400" />
              <h3 className="font-bold tracking-wide">AI RECOMMENDATION</h3>
            </div>

            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10 relative z-10 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Vendor Wilmar - Action Required</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Project progress at 85%. Missing critical legal documents: <strong>Sertifikat Halal</strong>, KBLI 49431, and KBLI 45201.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 mt-3">
                <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">AI Suggestion</p>
                <p className="text-sm font-medium">Prioritize legal completion within 30 days to avoid handover delay.</p>
                <button className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold py-2 rounded-lg transition-colors active:scale-95">
                  Escalate to Legal Team
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Activity size={18} className="text-blue-600" /> 
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { text: 'Proposal for ANTAM uploaded', time: '2 hours ago', status: 'Process' },
                { text: 'SBU Certificate Renewed', time: '5 hours ago', status: 'Approved' },
                { text: 'LPSE Requirement updated', time: '1 day ago', status: 'Process' }
              ].map((act, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium">{act.text}</p>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-xs text-slate-400">{act.time}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">{act.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full min-h-[500px]">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Project Monitoring</h3>
              <p className="text-sm text-slate-500">Track running and upcoming projects.</p>
            </div>
            <button className="text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors active:scale-95">
              + New Project
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold border-b border-slate-100">Project Name</th>
                  <th className="p-4 font-semibold border-b border-slate-100">Category</th>
                  <th className="p-4 font-semibold border-b border-slate-100">Progress</th>
                  <th className="p-4 font-semibold border-b border-slate-100">Deadline</th>
                  <th className="p-4 font-semibold border-b border-slate-100">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="p-4">
                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Vendor Wilmar</p>
                    <p className="text-xs text-slate-500">PIC: Legal Team</p>
                  </td>
                  <td className="p-4"><span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Distribusi</span></td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[85%]"></div>
                      </div>
                      <span className="font-bold text-slate-700">85%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-xs bg-amber-50 px-2 py-1 rounded-md w-fit">
                      <Clock size={14} /> 30 Hari
                    </div>
                  </td>
                  <td className="p-4"><span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">Running</span></td>
                </tr>

                <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="p-4">
                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Pengadaan ANTAM</p>
                    <p className="text-xs text-slate-500">Client: ANTAM</p>
                  </td>
                  <td className="p-4"><span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Tender</span></td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[50%]"></div>
                      </div>
                      <span className="font-bold text-slate-700">50%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-red-600 font-semibold text-xs bg-red-50 px-2 py-1 rounded-md w-fit">
                      <Clock size={14} /> 7 Hari
                    </div>
                  </td>
                  <td className="p-4"><span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold">Preparation</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Project Master Data</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track all company projects.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-colors flex items-center gap-2">
          + Add New Project
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50">
          <button className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">All (24)</button>
          <button className="px-4 py-1.5 text-slate-600 hover:bg-slate-200 text-sm font-semibold rounded-md transition-colors">Running (12)</button>
          <button className="px-4 py-1.5 text-slate-600 hover:bg-slate-200 text-sm font-semibold rounded-md transition-colors">Pipeline (5)</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-white border-b border-slate-200 text-slate-500 text-xs uppercase">
            <tr>
              <th className="p-4 font-semibold">Project / Client</th>
              <th className="p-4 font-semibold">Est. Value</th>
              <th className="p-4 font-semibold">PIC / Dept</th>
              <th className="p-4 font-semibold">Progress</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {[
              { name: 'Vendor Distribusi Logistik', client: 'PT Wilmar', val: 'Rp 2.5B', pic: 'M. Naufal', prog: 85, stat: 'Running', color: 'blue' },
              { name: 'Pengadaan Tender', client: 'PT ANTAM', val: 'Rp 5.2B', pic: 'Abu Rahmat', prog: 50, stat: 'Preparation', color: 'amber' },
            ].map((p, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-bold text-slate-900">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.client}</p>
                </td>
                <td className="p-4 font-semibold text-slate-700">{p.val}</td>
                <td className="p-4 text-slate-600">{p.pic}</td>
                <td className="p-4">
                  <div className="w-full bg-slate-200 rounded-full h-1.5 mb-1 max-w-[100px]">
                    <div className={`bg-${p.color}-500 h-1.5 rounded-full`} style={{width: `${p.prog}%`}}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500">{p.prog}%</span>
                </td>
                <td className="p-4"><span className={`px-2.5 py-1 bg-${p.color}-50 text-${p.color}-700 rounded-md text-xs font-bold`}>{p.stat}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLegal = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Legal & Compliance Hub</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor company licenses, certificates, and KBLI compliance.</p>
        </div>
        <div className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-400" /> Score: 92/100
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-l-4 border-emerald-500">
          <p className="text-xs text-slate-500 font-bold uppercase">Active Documents</p>
          <p className="text-2xl font-black text-slate-900 mt-1">18</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-l-4 border-amber-500">
          <p className="text-xs text-slate-500 font-bold uppercase">Expiring Soon</p>
          <p className="text-2xl font-black text-slate-900 mt-1">2</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-l-4 border-red-500">
          <p className="text-xs text-slate-500 font-bold uppercase">Missing</p>
          <p className="text-2xl font-black text-slate-900 mt-1">1</p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center text-slate-500">
        Legal compliance data table implementation...
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Smart Document Center</h1>
          <p className="text-slate-500 text-sm mt-1">AI-powered centralized repository for all corporate files.</p>
        </div>
        <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors flex items-center gap-2">
           Upload File
        </button>
      </div>

      <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex items-center mb-6">
        <div className="pl-4 pr-2 text-blue-600"><Zap size={20} /></div>
        <input type="text" placeholder="Ask AI to find documents (e.g. 'Show me the latest Wilmar contract')" className="w-full py-3 px-2 outline-none text-slate-700 placeholder-slate-400 bg-transparent" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold mr-1">Search AI</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {['Legal & Licensing', 'Financial & Tax', 'Project Contracts', 'Marketing Assets', 'Vendor Database', 'HR & Employee'].map((cat, i) => (
          <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group flex items-start gap-3">
             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FolderKanban size={20} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700">{cat}</h3>
               <p className="text-xs text-slate-400 mt-1">{Math.floor(Math.random() * 50) + 5} files</p>
             </div>
          </div>
        ))}
      </div>
      
      <h3 className="font-bold text-slate-800 mt-8 mb-4">Recently Uploaded</h3>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
        {['Kontrak_Kerjasama_Antam_Draft.pdf', 'Sertifikat_SBU_2026.pdf', 'Invoice_004_Rental.xlsx', 'Company_Profile_SAVEN.pdf'].map((file, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <FileText size={24} className={file.includes('pdf') ? 'text-red-500' : 'text-green-500'} />
              <div>
                <p className="font-semibold text-slate-900 text-sm">{file}</p>
                <p className="text-xs text-slate-500 mt-0.5">Uploaded today by Admin</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-blue-600"><MoreVertical size={18} /></button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Corporate Timeline</h1>
          <p className="text-slate-500 text-sm mt-1">Milestones, deadlines, and project schedules.</p>
        </div>
      </div>

      <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-sm relative">
         <div className="absolute left-[135px] top-8 bottom-8 w-0.5 bg-slate-100"></div>
         <div className="space-y-8 relative z-10">
            {[
              { date: 'Today', title: 'Upload Proposal ANTAM', desc: 'Deadline for tender document submission via LPSE', color: 'red', alert: 'Due Today' },
              { date: 'Jul 05', title: 'ISO 9001 Expiry', desc: 'Quality management certificate needs renewal process completion', color: 'amber', alert: '< 7 Days' },
              { date: 'Jul 15', title: 'Wilmar Legal Handover', desc: 'Target date to complete Halal & KBLI addition for logistics', color: 'blue' },
              { date: 'Aug 12', title: 'SBU Renewal Check', desc: 'Routine check for Konstruksi Gedung licensing', color: 'emerald' },
              { date: 'Oct 20', title: 'LPSE Account Maintenance', desc: 'Password and token refresh for government tender portal', color: 'emerald' },
            ].map((event, i) => (
              <div key={i} className="flex gap-8 items-start">
                 <div className="w-24 text-right pt-1 shrink-0">
                    <span className="text-sm font-bold text-slate-900">{event.date}</span>
                 </div>
                 <div className="relative flex items-center justify-center shrink-0 mt-1.5">
                    <div className={`w-4 h-4 rounded-full bg-${event.color}-100 border-2 border-${event.color}-500 z-10`}></div>
                 </div>
                 <div className="pb-8 border-b border-slate-50 w-full last:border-0 last:pb-0">
                   <div className="flex items-center gap-3 mb-1">
                     <h3 className="font-bold text-slate-900">{event.title}</h3>
                     {event.alert && <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${event.color}-50 text-${event.color}-600 font-bold`}>{event.alert}</span>}
                   </div>
                   <p className="text-sm text-slate-500">{event.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'executive': return renderExecutiveBoard();
      case 'projects': return renderProjects();
      case 'legal': return renderLegal();
      case 'documents': return renderDocuments();
      case 'timeline': return renderTimeline();
      default: return renderExecutiveBoard();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-slate-300 flex flex-col transition-all">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-white tracking-wide">PT SAVEN</span>
          </div>
          
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeMenu === item.id 
                    ? 'bg-blue-800 text-white font-semibold' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-auto p-6 border-t border-slate-800">
          <button 
            onClick={() => router.push('/')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors text-sm font-semibold active:scale-95"
          >
            <ChevronLeft size={16} /> Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
