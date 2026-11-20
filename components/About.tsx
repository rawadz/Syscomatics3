/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import SafeImage from './SafeImage';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.about || TRANSLATIONS.en.about;
  const steps = t.steps || [];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="about" className="bg-[#090B10] text-white py-20 md:py-28 px-6 md:px-12 text-start">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#4F7BFF] mb-3">{t.kicker}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]">
              {t.title}{' '}
              <span className="text-slate-400">{t.accent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Interactive 2-Column Stretched Methodology Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Interactive Stage List */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {steps.map((step: any, idx: number) => {
              const isSelected = idx === activeStepIndex;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-start p-6 md:p-7 rounded-xl border transition-colors duration-200 ${
                    isSelected
                      ? 'bg-[#11141D] border-[#0037F3]/70'
                      : 'bg-transparent border-white/10 hover:border-white/25 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono tabular-nums text-sm font-semibold ${
                          isSelected ? 'text-[#4F7BFF]' : 'text-slate-500'
                        }`}
                      >
                        {step.number}.
                      </span>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <span className="font-mono tabular-nums text-xs text-slate-400 whitespace-nowrap shrink-0">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Phase Visual & Deliverables */}
          {activeStep && (
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-xl border border-white/10 bg-[#11141D] overflow-hidden flex flex-col">
                <div className="relative h-64 md:h-72 lg:flex-1 min-h-[240px] bg-[#0D1017] overflow-hidden">
                  <SafeImage
                    src={activeStep.img}
                    alt={activeStep.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11141D] via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-8 border-t border-white/10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-medium text-[#4F7BFF]">
                      {t.deliverablesLabel}
                    </span>
                    <span className="font-mono tabular-nums text-xs text-slate-400">
                      {activeStep.number} · {activeStep.duration}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activeStep.deliverables?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                        <span className="text-[#4F7BFF] font-mono text-xs mt-1">0{idx + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Regional Delivery Proof Bar (Claim-to-Proof Adjacency) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          {t.trustProof?.map((item: { region: string; label: string }, idx: number) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-xs font-mono text-slate-400">{item.region}</span>
              <span className="text-sm md:text-base font-medium text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
