"use client";

import React from "react";
import { achievementsList } from "@/data/certifications";
import { Trophy, Star, ArrowUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <section className="w-full py-16 sm:py-20 bg-transparent border-t border-[#E4E4E7]" id="achievements">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              COMPETITIVE RECOGNITION
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            Key Achievements
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-1 leading-relaxed">
            Verified competitive programming and engineering contest highlights.
          </p>
        </div>

        {/* Compact Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsList.map((ach) => (
            <div
              key={ach.title}
              className="bg-white rounded-lg border border-[#E4E4E7] p-6 shadow-subtle hover:border-[#D4D4D8] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7] mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    {ach.badge}
                  </span>
                  <span className="font-mono text-xs text-[#71717A]">{ach.year}</span>
                </div>

                <h3 className="font-sans text-lg font-bold text-[#09090B] tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {ach.title}
                </h3>
                <p className="font-mono text-xs text-[#52525B] mt-1 font-medium">
                  {ach.organization}
                </p>

                <p className="font-sans text-xs text-[#52525B] mt-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
