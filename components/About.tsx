/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  const phases = [
    { id: '01', title: t.phases.p1, desc: t.phases.p1d },
    { id: '02', title: t.phases.p2, desc: t.phases.p2d },
    { id: '03', title: t.phases.p3, desc: t.phases.p3d },
    { id: '04', title: t.phases.p4, desc: t.phases.p4d },
  ];

  return (
    <section id="about" className="bg-[#0a0b0d] py-32 md:py-48 relative overflow-hidden text-start">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0037f3_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start mb-32">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0037f3]/10 border border-[#0037f3]/20 text-[#0037f3] text-[10px] font-black uppercase tracking-[0.4em] mb-12">
               <span className="w-1.5 h-1.5 rounded-full bg-[#0037f3] animate-pulse"></span>
               {t.badge}
            </div>
            <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter mb-10">
                {t.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.accent}</span>
            </h2>
            <p className="text-white/40 text-xl font-medium leading-relaxed max-w-xl">
                {t.sub}
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm group hover:border-[#0037f3]/50 transition-all">
                <div className="text-4xl font-heading font-black text-white mb-3 group-hover:text-[#0037f3] transition-colors tracking-tight">99.9%</div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-6">{t.uptime}</div>
                <p className="text-sm text-white/30 font-medium leading-relaxed">{t.uptimed}</p>
             </div>
             <div className="relative rounded-[2.5rem] overflow-hidden group h-[300px]">
                <img src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=1260" alt="Center" className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8">
                   <div className="text-[9px] font-black text-[#0037f3] uppercase tracking-[0.4em] mb-1">{t.ops}</div>
                   <div className="text-xl font-heading font-black text-white uppercase tracking-tighter">{t.hub}</div>
                </div>
             </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {phases.map((phase) => (
              <div key={phase.id} className="group flex flex-col items-center lg:items-start">
                 <div className="w-16 h-16 rounded-2xl bg-[#111215] border border-white/10 flex items-center justify-center text-white font-mono text-lg font-black mb-8 group-hover:border-[#0037f3] group-hover:bg-[#0037f3]/5 transition-all shadow-xl">
                    {phase.id}
                 </div>
                 <div className="text-center lg:text-start px-4 lg:px-0">
                    <h4 className="text-white text-xl font-heading font-extrabold mb-4 group-hover:text-[#0037f3] transition-colors">{phase.title}</h4>
                    <p className="text-white/30 text-sm font-medium leading-relaxed max-w-[200px]">{phase.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;