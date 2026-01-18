
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#0a0b0d] pt-32 pb-12 px-6 text-white/60">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        <div className="md:col-span-5">
          <div className="font-heading text-3xl font-extrabold text-white tracking-tighter mb-8">
            Sy<span className="text-[#0037f3]">/</span>scomatics
          </div>
          <p className="max-w-sm text-lg font-medium leading-relaxed mb-10">
            Designing the digital nervous systems for the world's most ambitious organizations. 
            Trusted by enterprises, built by experts.
          </p>
          <div className="flex gap-4">
             {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#0037f3] hover:text-[#0037f3] transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                </a>
             ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-heading font-bold text-white mb-8 tracking-widest text-xs uppercase">Expertise</h4>
          <ul className="space-y-4 text-sm font-bold tracking-tight">
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">ERP Systems</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">CRM Platforms</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">Blockchain</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">Cybersecurity</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-5">
          <h4 className="font-heading font-bold text-white mb-8 tracking-widest text-xs uppercase">Strategy Insights</h4>
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium">Join 5,000+ executives getting our bi-weekly architectural report.</p>
            <div className="flex bg-white/5 p-1 border border-white/10">
                <input 
                  type="email" 
                  placeholder="corporate@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-white font-medium" 
                />
                <button 
                  onClick={handleSubscribe}
                  disabled={subscribeStatus !== 'idle' || !email}
                  className="bg-[#0037f3] px-6 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#0a0b0d] transition-all"
                >
                  {subscribeStatus === 'idle' && 'Join'}
                  {subscribeStatus === 'loading' && '...'}
                  {subscribeStatus === 'success' && '✓'}
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
        <p>&copy; 2025 Syscomatics Global. All Rights Reserved.</p>
        <p>Strategic IT Consulting & Implementation</p>
      </div>
    </footer>
  );
};

export default Footer;
