
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Service } from '../types';

interface CheckoutProps {
  items: Service[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2EB] p-6 text-center">
        <div className="max-w-md animate-fade-in-up">
          <h1 className="text-4xl font-serif text-[#2C2A26] mb-6">Strategy Brief Received.</h1>
          <p className="text-[#5D5A53] mb-12">Our Solutions Architect is reviewing your requirements. Expect a high-level feasibility report within 24 business hours.</p>
          <button onClick={onBack} className="text-sm font-medium uppercase tracking-widest underline underline-offset-8">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Solutions
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] mb-4">Project Inquiry</h1>
            <p className="text-sm text-[#5D5A53] mb-12">Submit your requirements for professional assessment.</p>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Lead Contact</h2>
                <div className="space-y-4">
                   <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]" />
                   <input type="email" placeholder="Corporate Email" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]" />
                   <input type="text" placeholder="Organization" className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] mb-6">Project Context</h2>
                <textarea 
                  placeholder="Describe your current infrastructure challenges..." 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26] resize-none"
                />
              </div>

              <div>
                <button 
                    onClick={() => setSubmitted(true)}
                    className="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors"
                >
                    Submit Brief for Review
                </button>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 className="text-xl font-serif text-[#2C2A26] mb-8">Selected Scopes</h2>
            <div className="space-y-6">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE]">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#2C2A26] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                 </div>
               ))}
               {items.length === 0 && <p className="text-[#A8A29E] font-light">No services selected.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
