/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F131C] via-[#151B28] to-[#0A0D14] text-slate-400 p-6 ${className}`}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
          className="mb-3 opacity-70"
        >
          <rect x="2" y="2" width="11" height="11" rx="2" fill="#0037F3" />
          <rect x="15" y="2" width="11" height="11" rx="2" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="2" y="15" width="11" height="11" rx="2" stroke="#475569" strokeWidth="1.5" />
          <rect x="15" y="15" width="11" height="11" rx="2" fill="#E2E8F0" />
        </svg>
        <span className="text-xs font-medium tracking-tight text-slate-300 text-center">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export default SafeImage;
