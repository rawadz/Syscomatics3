
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

type LabModule = 'ERP' | 'CRM' | 'Ecommerce' | 'Cyber';

const InteractiveLabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabModule>('ERP');
  const [isProcessing, setIsProcessing] = useState(false);

  const runSimulation = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <section id="labs" className="py-24 bg-[#0a0b0d] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <div className="inline-block px-4 py-2 bg-[#0037f3]/20 text-[#0037f3] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-full border border-[#0037f3]/30">
              Interactive Lab
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-6">
              Test the <span className="text-[#0037f3]">Engine.</span>
            </h2>
            <p className="text-white/50 font-medium mb-10">
              Explore how Syscomatics infrastructure handles high-concurrency operations in real-time. Select a module to begin simulation.
            </p>
            
            <div className="space-y-4">
              {[
                { id: 'ERP', label: 'Enterprise ERP', desc: 'Resource Synchronization' },
                { id: 'CRM', label: 'Predictive CRM', desc: 'Customer Intelligence' },
                { id: 'Ecommerce', label: 'Ecom Flow', desc: 'Transaction Logic' },
                { id: 'Cyber', label: 'Cyber Shield', desc: 'Threat Mitigation' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as LabModule)}
                  className={`w-full text-left p-6 transition-all duration-300 border-l-4 ${
                    activeTab === tab.id 
                      ? 'border-[#0037f3] bg-white/5' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`text-xs font-black uppercase tracking-widest mb-1 ${activeTab === tab.id ? 'text-[#0037f3]' : 'text-white/40'}`}>
                    {tab.desc}
                  </div>
                  <div className="text-white font-heading font-bold">{tab.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative aspect-video bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Dynamic Content based on Tab */}
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                    Syscomatics Cloud OS // {activeTab}_MGR
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                  {activeTab === 'ERP' && (
                    <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
                      {['Finance', 'Logistics', 'Inventory'].map((mod, i) => (
                        <div key={mod} className={`p-6 border border-white/10 rounded-xl text-center transition-all duration-500 ${isProcessing ? 'translate-y-[-10px] border-[#0037f3] shadow-[0_0_30px_rgba(0,55,243,0.2)]' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
                          <div className={`w-10 h-10 mx-auto mb-4 rounded-lg flex items-center justify-center ${isProcessing ? 'bg-[#0037f3] text-white' : 'bg-white/10 text-white/40'}`}>
                            {i === 0 ? '$' : i === 1 ? '✈' : '⚓'}
                          </div>
                          <div className="text-[10px] font-black text-white uppercase tracking-widest">{mod}</div>
                          <div className="h-1 w-full bg-white/5 mt-4 overflow-hidden rounded-full">
                            <div className={`h-full bg-[#0037f3] transition-all duration-[2000ms] ${isProcessing ? 'w-full' : 'w-1/3'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'CRM' && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                       <div className="w-48 h-48 border border-[#0037f3]/30 rounded-full flex items-center justify-center animate-[pulse_4s_infinite]">
                          <div className="w-32 h-32 bg-[#0037f3]/10 rounded-full flex items-center justify-center text-[#0037f3] text-4xl font-black">
                            {isProcessing ? 'AI' : '84%'}
                          </div>
                       </div>
                       <div className="mt-8 text-white/40 text-xs font-mono uppercase tracking-widest">Sentiment Analysis Active</div>
                    </div>
                  )}

                  {activeTab === 'Ecommerce' && (
                    <div className="flex items-center gap-12 w-full max-w-xl">
                      {['Cart', 'Order', 'Ship'].map((step, i) => (
                        <React.Fragment key={step}>
                          <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-black text-xs transition-all duration-500 ${isProcessing && i <= 1 ? 'border-[#0037f3] text-[#0037f3] bg-[#0037f3]/10' : 'border-white/10 text-white/30'}`}>
                            {i + 1}
                          </div>
                          {i < 2 && <div className={`flex-1 h-0.5 bg-white/10 overflow-hidden`}>
                             <div className={`h-full bg-[#0037f3] transition-all duration-[1000ms] ${isProcessing ? 'w-full' : 'w-0'}`} style={{ transitionDelay: `${i * 500}ms` }}></div>
                          </div>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {activeTab === 'Cyber' && (
                    <div className="w-full flex flex-col gap-4 max-w-md">
                      {[1, 2, 3].map(layer => (
                        <div key={layer} className={`h-12 border border-white/10 rounded flex items-center px-6 transition-all duration-300 ${isProcessing ? 'bg-[#0037f3]/5 border-[#0037f3]/50' : ''}`}>
                          <div className={`w-2 h-2 rounded-full mr-4 ${isProcessing ? 'bg-[#0037f3] animate-ping' : 'bg-white/20'}`}></div>
                          <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">Encryption Layer 00{layer} Verified</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-10 flex justify-center">
                   <button 
                    onClick={runSimulation}
                    disabled={isProcessing}
                    className="px-10 py-4 bg-white text-[#0a0b0d] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0037f3] hover:text-white transition-all disabled:opacity-50"
                   >
                     {isProcessing ? 'Executing Logic...' : `Run ${activeTab} Simulation`}
                   </button>
                </div>
              </div>

              {/* Grid Decoration */}
              <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLabs;
