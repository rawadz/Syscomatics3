
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-32 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="inline-block px-4 py-2 bg-[#0037f3]/10 text-[#0037f3] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                      The Methodology
                  </div>
                  <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-[#0a0b0d] leading-[0.9] tracking-tighter mb-8">
                      Engineering <br/>
                      <span className="text-[#0037f3]">Synergy.</span>
                  </h2>
                  <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">
                      Syscomatics builds the bridge between legacy infrastructure and hyper-growth potential. We create systems that don't just work—they evolve.
                  </p>
                  
                  <div className="space-y-12">
                    {[
                        { title: "01 / Architectural Discovery", desc: "We map every dependency in your current stack to ensure a seamless migration or integration path." },
                        { title: "02 / Implementation Labs", desc: "Software is tested in isolated staging environments mimicking real-world heavy traffic before deployment." },
                        { title: "03 / Continuous Optimization", desc: "Our AI-driven monitoring ensures your ERP and CRM systems grow more efficient over time." }
                    ].map((step) => (
                        <div key={step.title} className="group cursor-default">
                            <h4 className="text-[#0a0b0d] text-lg font-heading font-extrabold mb-3 group-hover:text-[#0037f3] transition-colors tracking-tight">{step.title}</h4>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                  </div>
                </div>
            </div>
            
            <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative rounded-2xl overflow-hidden h-[600px] mt-24">
                        <img 
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1260" 
                            alt="Syscomatics Innovation Hub" 
                            className="w-full h-full object-cover grayscale brightness-110 hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-[#0037f3]/20 mix-blend-multiply opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    <div className="space-y-8">
                        <div className="relative rounded-2xl overflow-hidden h-[400px]">
                            <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                                alt="Modern Glass Architecture" 
                                className="w-full h-full object-cover grayscale brightness-110 hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 text-white z-10">
                                <div className="text-[10px] font-black uppercase tracking-widest bg-[#0037f3] px-3 py-1 inline-block mb-2">Ops Center</div>
                                <div className="text-xl font-heading font-extrabold">Frankfurt Labs</div>
                            </div>
                        </div>
                        <div className="bg-[#0a0b0d] p-10 rounded-2xl text-white">
                            <div className="text-4xl font-heading font-extrabold text-[#0037f3] mb-4 tracking-tighter">99.9%</div>
                            <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6">Uptime Guaranteed</div>
                            <p className="text-sm text-white/60 leading-relaxed font-medium">
                                Our redundant multi-cloud orchestration ensures your business stays online during global outages. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
