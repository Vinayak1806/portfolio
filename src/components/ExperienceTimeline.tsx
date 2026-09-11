"use client";

import React, { useState } from "react";
import { workExperience } from "@/data/experience";
import { Briefcase, FileCheck, ArrowUpRight, Calendar, MapPin, Eye } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function ExperienceTimeline() {
  const [activePdf, setActivePdf] = useState<{
    url: string;
    title: string;
    issuer: string;
  } | null>(null);

  return (
    <>
      <section className="w-full py-20 sm:py-28 bg-transparent border-t border-[#E4E4E7]" id="experience">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
                PROFESSIONAL TRAJECTORY
              </span>
              <span className="h-px w-8 bg-[#2563EB]/40"></span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
              Work Experience
            </h2>
            <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
              Real-world software engineering and data analytics internships delivering full-stack features, optimized database queries, and executive KPI intelligence.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E4E4E7] ml-2 sm:ml-4 space-y-12 sm:space-y-14">
            {workExperience.map((item) => (
              <div key={item.id} className="relative group">
                
                {/* Timeline Marker Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center transition-all ${
                    item.isHighlighted
                      ? "border-[#2563EB] ring-4 ring-blue-50"
                      : "border-[#A1A1AA] group-hover:border-[#09090B]"
                  }`}
                >
                  {item.isCurrent ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A1A1AA] group-hover:bg-[#09090B]" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`bg-[#FAFAF8] p-6 sm:p-8 rounded-lg border transition-all duration-200 ${
                    item.isHighlighted
                      ? "border-[#2563EB]/50 bg-gradient-to-b from-white to-[#FAFAF8] shadow-card ring-1 ring-[#2563EB]/20"
                      : "border-[#E4E4E7] hover:border-[#D4D4D8] shadow-subtle"
                  }`}
                >
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-50 text-[#2563EB] border border-blue-200 font-bold">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#71717A]">
                      <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#52525B] mb-4">
                    <span className="font-semibold text-[#09090B]">{item.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-[#71717A]">
                      <MapPin className="w-3 h-3" />
                      <span>{item.companyLocation}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-5 pt-4 border-t border-[#E4E4E7]/80">
                    <span className="font-mono text-[10px] uppercase text-[#71717A] tracking-wider font-semibold block mb-2">
                      Key Deliverables & Methodologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 text-xs font-mono text-[#09090B] bg-white border border-[#E4E4E7] rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Strip & Contextual Verification Document */}
                  <div className="mt-5 pt-4 border-t border-[#E4E4E7]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-[#71717A]">
                      <span className="text-[#A1A1AA] mr-1">Stack:</span>
                      {item.techStack.map((tech, tIdx) => (
                        <span key={tech} className="text-[#27272A] font-medium">
                          {tech}
                          {tIdx < item.techStack.length - 1 ? " • " : ""}
                        </span>
                      ))}
                    </div>

                    {item.certificatePdf && (
                      <button
                        onClick={() =>
                          setActivePdf({
                            url: item.certificatePdf!,
                            title: item.certificateName || "Internship Verification",
                            issuer: item.company,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-[#F4F4F5] border border-[#E4E4E7] text-xs font-mono text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors self-start sm:self-auto shadow-subtle group/doc"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{item.certificateName || "View Verification Document"}</span>
                        <Eye className="w-3 h-3 text-[#A1A1AA] group-hover/doc:text-[#2563EB]" />
                      </button>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Embedded In-Place Document Inspector Modal */}
      {activePdf && (
        <CertificateModal
          isOpen={!!activePdf}
          onClose={() => setActivePdf(null)}
          pdfUrl={activePdf.url}
          title={activePdf.title}
          issuer={activePdf.issuer}
        />
      )}
    </>
  );
}
