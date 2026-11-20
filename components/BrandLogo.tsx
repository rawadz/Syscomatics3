/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '' }) => {
  const isLightText = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="2" y="2" width="11" height="11" rx="2" fill="#0037F3" />
        <rect
          x="15"
          y="2"
          width="11"
          height="11"
          rx="2"
          stroke={isLightText ? '#FFFFFF' : '#0A0B0D'}
          strokeWidth="2"
        />
        <rect
          x="2"
          y="15"
          width="11"
          height="11"
          rx="2"
          stroke={isLightText ? 'rgba(255,255,255,0.45)' : 'rgba(10,11,13,0.35)'}
          strokeWidth="2"
        />
        <rect x="15" y="15" width="11" height="11" rx="2" fill={isLightText ? '#FFFFFF' : '#0A0B0D'} />
      </svg>
      <span
        className={`font-heading text-lg font-bold tracking-tight ${
          isLightText ? 'text-white' : 'text-[#0A0B0D]'
        }`}
      >
        Syscomatics
      </span>
    </span>
  );
};

export default BrandLogo;
