"use client";

import React from "react";
import { whatIBuildPillars } from "@/data/skills";
import { Layers, Terminal, LineChart, Check } from "lucide-react";

export default function WhatIBuild() {
  const icons = [
    <Layers key="fullstack" className="w-5 h-5 text-[#2563EB]" />,
    <Terminal key="swe" className="w-5 h-5 text-[#2563EB]" />,
    <LineChart key="data" className="w-5 h-5 text-[#2563EB]" />,
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#E4E4E7]" id="what-i-build">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              CORE DISCIPLINES
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            What I Build
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
            Bridging responsive user interfaces, robust backend services, and analytical intelligence into complete, reliable software systems.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {whatIBuildPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white rounded-lg border border-[#E4E4E7] p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-[#D4D4D8] hover:shadow-card-hover transition-all duration-300 group"
            >
              <div>
                
                {/* Header Icon & Index */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E4E4E7]/70 mb-5">
                  <div className="w-10 h-10 rounded bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#A1A1AA]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-mono text-xs text-[#71717A] mt-1 font-medium">
                  {pillar.tagline}
                </p>

                <p className="font-sans text-sm text-[#52525B] mt-4 leading-relaxed">
                  {pillar.description}
                </p>

              </div>

              {/* Technologies List */}
              <div className="mt-8 pt-5 border-t border-[#E4E4E7]">
                <span className="font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider block mb-2.5">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono text-[#09090B] bg-[#FAFAF8] border border-[#E4E4E7] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
