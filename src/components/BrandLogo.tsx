"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export default function BrandLogo({ className = "", size = 34 }: BrandLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden group shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.04] ${className}`}
      style={{ width: size, height: size }}
      title="Vinayak Pawate — Engineering & Software"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="compLogoBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>

          <linearGradient id="compVGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="compPGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="compRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Squircle Base */}
        <rect
          x="8"
          y="8"
          width="104"
          height="104"
          rx="26"
          fill="url(#compLogoBg)"
          stroke="#27272A"
          strokeWidth="1.5"
        />

        {/* Ambient Rim */}
        <rect
          x="9.5"
          y="9.5"
          width="101"
          height="101"
          rx="24.5"
          fill="none"
          stroke="url(#compRimGrad)"
          strokeWidth="1.2"
          className="group-hover:stroke-opacity-100 transition-opacity"
        />

        {/* Letter 'V' (Electric Blue) */}
        <path
          d="M 26 40 L 43.5 80 L 61 40"
          stroke="url(#compVGrad)"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Letter 'P' (Titanium White) */}
        <path
          d="M 72 40 L 72 80"
          stroke="url(#compPGrad)"
          strokeWidth="8.5"
          strokeLinecap="round"
        />
        <path
          d="M 72 40 H 83 C 90.5 40, 94.5 44.5, 94.5 51 C 94.5 57.5, 90.5 62, 83 62 H 72"
          stroke="url(#compPGrad)"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Terminal Accent Node */}
        <circle cx="89" cy="78" r="3.5" fill="#38BDF8" className="animate-pulse" />
      </svg>
    </div>
  );
}
