"use client";

import React from "react";
import { Languages, Globe, CheckCircle2 } from "lucide-react";

export default function LanguagesSection() {
  const languageList = [
    {
      language: "English",
      proficiency: "Fluent",
      context: "Professional & Technical Working Proficiency",
      badgeColor: "bg-blue-50 text-[#2563EB] border-blue-200",
    },
    {
      language: "Hindi",
      proficiency: "Fluent",
      context: "Native / Full Professional Proficiency",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      language: "Marathi",
      proficiency: "Fluent",
      context: "Native / Regional Working Proficiency",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      language: "Kannada",
      proficiency: "Conversational",
      context: "Verbal Interaction & Everyday Communication",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-transparent border-t border-[#E4E4E7]" id="languages">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              COMMUNICATION & COLLABORATION
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#09090B] tracking-tight">
            Spoken Languages
          </h2>
          <p className="font-sans text-sm text-[#52525B] mt-1.5 leading-relaxed">
            Multilingual fluency supporting effective cross-functional collaboration, technical communication, and diverse team environments.
          </p>
        </div>

        {/* Languages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {languageList.map((item) => (
            <div
              key={item.language}
              className="bg-white rounded-lg border border-[#E4E4E7] p-5 shadow-subtle hover:border-[#D4D4D8] hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7] mb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#2563EB]" />
                    <span className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider font-medium">
                      Language
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold border ${item.badgeColor}`}>
                    {item.proficiency}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {item.language}
                </h3>

                <p className="font-sans text-xs text-[#52525B] mt-2 leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E4E4E7]/70 flex items-center gap-1.5 text-[11px] font-mono text-[#71717A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Fluency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
