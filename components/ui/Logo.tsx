'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  lightText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  lightText = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const subTitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[11px] sm:text-[12px]',
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* SVG Icon of Crescent Moon, Star & Building Silhouette */}
      <div className={`relative shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Crescent Moon Arc */}
          <path
            d="M 50 8 A 42 42 0 1 0 90 65 A 35 35 0 1 1 50 8 Z"
            fill="url(#goldGradient)"
          />
          {/* Star at Top Center */}
          <polygon
            points="50,15 54,28 67,28 56,36 60,49 50,40 40,49 44,36 33,28 46,28"
            fill="url(#goldGradient)"
          />
          {/* Hotel Building Silhouette */}
          <path
            d="M 38 78 L 38 52 L 46 52 L 46 45 L 54 45 L 54 52 L 62 52 L 62 78 Z"
            fill="url(#goldGradient)"
          />
          {/* Windows */}
          <rect x="41" y="55" width="3" height="4" fill="#0B0E12" />
          <rect x="56" y="55" width="3" height="4" fill="#0B0E12" />
          <rect x="41" y="62" width="3" height="4" fill="#0B0E12" />
          <rect x="56" y="62" width="3" height="4" fill="#0B0E12" />
          <rect x="48" y="48" width="4" height="4" fill="#0B0E12" />
          <rect x="47" y="70" width="6" height="8" fill="#0B0E12" />

          {/* Curved Base Line */}
          <path d="M 20 84 Q 50 92 80 84" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7F2E6" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B59458" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text Branding */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold tracking-wider ${titleSizes[size]} ${
            lightText ? 'text-white' : 'text-obsidian-950'
          }`}
        >
          MOON STAR
        </span>
        <span
          className={`uppercase tracking-[0.22em] font-semibold text-gold-400 ${subTitleSizes[size]} -mt-1`}
        >
          Restaurant & Lodge
        </span>
        {showTagline && (
          <span className="text-[10px] italic text-gold-300 font-serif mt-0.5 tracking-wide">
            "Hospitality with a Heart"
          </span>
        )}
      </div>
    </Link>
  );
};
