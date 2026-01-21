
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
// Fix: Import TRANSLATIONS from the correct translations file instead of constants
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

type LabModule = 'ERP' | 'CRM' | 'Ecommerce' | 'Cyber';

interface InteractiveLabsProps {
  language: Language;
}

const InteractiveLabs: React.FC<InteractiveLabsProps> = ({ language }) => {
  const t = (TRANSLATIONS[language]?.labs) || TRANSLATIONS.en.labs;
  
  const [activeTab, setActiveTab] = useState<LabModule>('ERP');
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState(t.archVal);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  const runSimulation = () => {
    setIsProcessing(true);
    setStatusText(t.processing);
    setActiveNodes([]);
    
    // Simulate multi-stage processing
    const stages = activeTab === 'ERP' ? [0, 1, 2] : activeTab === 'Ecommerce' ? [0, 1, 2, 3] : [0];
    
    stages.forEach((s, i) => {
      setTimeout(() => {
        setActiveNodes(prev => [...prev, s]);
        if (i === stages.length - 1) {
            setStatusText('SEQUENCE_COMPLETE');
            setTimeout(() => setIsProcessing(false), 1000);
        }
      }, (i + 1) * 600);
    });
  };

  useEffect(() => {
    setStatusText(`MODULE_${activeTab}_READY`);
    setActiveNodes([]);
    setIsProcessing(false);
  }, [activeTab]);

  return (
    <section id="labs" className="py-32 bg-[#0a0b0d] overflow-hidden selection:bg-[#0037f3] selection:text-white text-start">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          <div className="lg:w-[35%] flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0037f3]/10 text-[#0037f3] text-[10px] font-black uppercase tracking-[0.4em] mb-10 rounded-full border border-[#0037f3]/20 self-start">
              <span className="w-2 h-2 rounded-full bg-[#0037f3] animate-pulse"></span>
              {t.badge}
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
                {t.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.accent}</span>
            </h2>
            <p className="text-white/40 text-lg font-medium mb-12 max-w-sm">
              {t.sub}
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {t.modules.map((tab: any) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as LabModule)}
                  className={`group relative text-left p-6 transition-all duration-500 rounded-2xl border-2 ${
                    activeTab === tab.id 
                      ? 'border-[#0037f3] bg-[#0037f3]/5 shadow-[0_0_30px_rgba(0,55,243,0.1)]' 
                      : 'border-white/5 bg-white/0 hover:border-white/20'
                  }`}
                >
                  <div className={`text-[9px] font-black uppercase tracking-[0.3em] mb-2 transition-colors duration-500 ${activeTab === tab.id ? 'text-[#0037f3]' : 'text-white/20 group-hover:text-white/40'}`}>
                    {tab.desc}
                  </div>
                  <div className="text-white font-heading font-bold text-lg">{tab.label}</div>
                  {activeTab === tab.id && (
                    <div className={`absolute ${language === 'ar' ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2`}>
                        <svg className={`w-5 h-5 text-[#0037f3] ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-[65%] w-full min-h-[600px] flex flex-col">
            <div className="flex-1 relative bg-[#0d0e11] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-3xl overflow-hidden group">
              
              {/* Lab Interface Header */}
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.4)]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                    </div>
                    <div className="text-[10px] font-mono text-white/20 tracking-[0.1em]">SYSCOMATICS_CORE_V4.02</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className={`text-[11px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 transition-colors duration-300 ${isProcessing ? 'text-[#0037f3] border-[#0037f3]/40' : 'text-white/40'}`}>
                        {statusText}
                    </div>
                    <div className="text-[9px] font-mono text-white/20">MEM_STABLE: 94.2GB</div>
                </div>
              </div>

              {/* Visualization Container */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                
                {/* ERP VISUALIZATION: Node Map */}
                {activeTab === 'ERP' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-[400px] h-[400px] border border-[#0037f3]/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-[300px] h-[300px] border border-[#0037f3]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    
                    <div className="flex gap-12 md:gap-20 items-center relative z-10">
                        {[
                            { name: 'Finance', icon: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z' },
                            { name: 'Logistics', icon: 'M5 13l4 4L19 7' },
                            { name: 'Inventory', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
                        ].map((node, i) => (
                            <div key={node.name} className="flex flex-col items-center group/node">
                                <div className={`w-16 h-16 md:w-24 md:h-24 rounded-3xl border-2 flex items-center justify-center transition-all duration-700 ${activeNodes.includes(i) ? 'border-[#0037f3] bg-[#0037f3]/20 shadow-[0_0_40px_rgba(0,55,243,0.3)] rotate-12 scale-110' : 'border-white/10 bg-white/5'}`}>
                                    <svg className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${activeNodes.includes(i) ? 'text-white' : 'text-white/20'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={node.icon} />
                                    </svg>
                                </div>
                                <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${activeNodes.includes(i) ? 'text-[#0037f3]' : 'text-white/30'}`}>{node.name}</div>
                            </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* CRM VISUALIZATION: Intelligence Radar */}
                {activeTab === 'CRM' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0037f30a_0%,transparent_70%)]"></div>
                    <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full relative flex items-center justify-center">
                        <div className="absolute inset-0 border border-[#0037f3]/20 rounded-full animate-ping opacity-20"></div>
                        <div className="absolute inset-[15%] border border-[#0037f3]/10 rounded-full"></div>
                        <div className="absolute inset-[30%] border border-[#0037f3]/10 rounded-full"></div>
                        
                        {/* Radar Sweep */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-[#0037f3]/20 animate-[spin_4s_linear_infinite]"></div>
                        
                        {/* Center Hub */}
                        <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-[#0037f3]/30 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ${isProcessing ? 'scale-110 bg-[#0037f3]/10 border-[#0037f3]' : ''}`}>
                            <div className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter mb-1">
                                {isProcessing ? '...' : '98.4'}
                            </div>
                            <div className="text-[9px] font-black text-[#0037f3] uppercase tracking-widest">Prediction Accuracy</div>
                        </div>

                        {/* Floating Data Points */}
                        {[
                            { top: '20%', left: '30%' },
                            { top: '70%', left: '80%' },
                            { top: '40%', left: '75%' },
                            { top: '15%', left: '60%' }
                        ].map((pos, i) => (
                            <div key={i} className="absolute w-1.5 h-1.5 bg-[#0037f3] rounded-full" style={{ ...pos, opacity: activeNodes.includes(0) ? 1 : 0.2 }}></div>
                        ))}
                    </div>
                  </div>
                )}

                {/* ECOMMERCE VISUALIZATION: Checkout Pipeline */}
                {activeTab === 'Ecommerce' && (
                  <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 w-full">
                    {[
                        { name: 'Discovery', label: 'Item Found' },
                        { name: 'Checkout', label: 'Payment API' },
                        { name: 'Verify', label: 'Blockchain' },
                        { name: 'Fulfill', label: 'Ops Notified' }
                    ].map((step, i) => (
                        <React.Fragment key={step.name}>
                            <div className="flex flex-col items-center">
                                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 relative ${activeNodes.includes(i) ? 'border-[#0037f3] bg-[#0037f3]/10 text-[#0037f3]' : 'border-white/10 text-white/20'}`}>
                                    <div className="text-sm font-black tracking-tighter">{i + 1}</div>
                                    {activeNodes.includes(i) && <div className="absolute inset-[-4px] border border-[#0037f3]/30 rounded-full animate-ping"></div>}
                                </div>
                                <div className={`mt-4 text-[9px] font-black uppercase tracking-widest text-center transition-colors ${activeNodes.includes(i) ? 'text-white' : 'text-white/20'}`}>{step.name}</div>
                                <div className={`text-[7px] font-mono mt-1 opacity-40 ${activeNodes.includes(i) ? 'text-[#0037f3]' : 'text-white'}`}>{step.label}</div>
                            </div>
                            {i < 4 && (
                                <div className="w-0.5 h-12 md:w-16 md:h-0.5 bg-white/5 relative overflow-hidden rounded-full">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#0037f3] to-transparent transition-all duration-[800ms] ${activeNodes.includes(i + 1) ? 'translate-x-full' : '-translate-x-full'}`}></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                  </div>
                )}

                {/* CYBER VISUALIZATION: Defense Shield */}
                {activeTab === 'Cyber' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                        {/* Hex Grid Background */}
                        <div className="absolute inset-0 opacity-10 flex flex-wrap gap-2 justify-center items-center">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-16 h-16 border border-[#0037f3]/50 clip-hex"></div>
                            ))}
                        </div>
                        
                        {/* Main Shield Arc */}
                        <div className={`absolute inset-0 border-4 rounded-full border-t-[#0037f3] border-r-transparent border-b-transparent border-l-transparent transition-all duration-1000 ${isProcessing ? 'rotate-[360deg] border-t-white scale-110 shadow-[0_0_50px_rgba(0,55,243,0.4)]' : 'rotate-45'}`}></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <svg className={`w-20 h-20 md:w-32 md:h-32 transition-all duration-700 ${isProcessing ? 'text-[#0037f3] scale-110 drop-shadow-[0_0_20px_rgba(0,55,243,0.5)]' : 'text-white/20'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div className={`mt-6 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 ${isProcessing ? 'text-[#0037f3] tracking-[0.6em]' : 'text-white/40'}`}>
                                {isProcessing ? 'SHIELD_ACTIVE' : 'SYSTEM_SECURE'}
                            </div>
                        </div>

                        {/* Incoming "threats" being deflected */}
                        {isProcessing && [1, 2, 3].map(i => (
                            <div key={i} className={`absolute w-1 h-8 bg-red-500/80 rounded-full animate-deflect-${i}`}></div>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Lab Footer / Action */}
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-center justify-between gap-8 z-20">
                 <div className="flex gap-4">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">{t.arch}</span>
                        <span className="text-[11px] font-heading font-bold text-white/60">{t.archVal}</span>
                    </div>
                    <div className="w-px h-8 bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">{t.latency}</span>
                        <span className="text-[11px] font-heading font-bold text-white/60">{t.latencyVal}</span>
                    </div>
                 </div>

                 <button 
                    onClick={runSimulation}
                    disabled={isProcessing}
                    className="group relative px-12 py-5 bg-[#0037f3] text-white text-[11px] font-black uppercase tracking-[0.3em] overflow-hidden shadow-2xl shadow-[#0037f3]/40 transition-all active:scale-95 disabled:opacity-50"
                   >
                     <span className="relative z-10">{isProcessing ? t.processing : t.button}</span>
                     <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference"></div>
                 </button>
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .clip-hex {
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        @keyframes deflect-1 {
            0% { transform: translate(100px, -100px) rotate(45deg); opacity: 0; }
            50% { transform: translate(40px, -40px) rotate(45deg); opacity: 1; }
            100% { transform: translate(150px, -150px) rotate(-135deg); opacity: 0; }
        }
        @keyframes deflect-2 {
            0% { transform: translate(-100px, 100px) rotate(45deg); opacity: 0; }
            50% { transform: translate(-40px, 40px) rotate(45deg); opacity: 1; }
            100% { transform: translate(-150px, 150px) rotate(225deg); opacity: 0; }
        }
        @keyframes deflect-3 {
            0% { transform: translate(150px, 50px) rotate(90deg); opacity: 0; }
            50% { transform: translate(60px, 20px) rotate(90deg); opacity: 1; }
            100% { transform: translate(200px, 80px) rotate(0deg); opacity: 0; }
        }
        .animate-deflect-1 { animation: deflect-1 1s infinite; }
        .animate-deflect-2 { animation: deflect-2 1.2s infinite 0.2s; }
        .animate-deflect-3 { animation: deflect-3 0.8s infinite 0.4s; }
      `}</style>
    </section>
  );
};

export default InteractiveLabs;
