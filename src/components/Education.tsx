"use client";

import React, { useState } from "react";
import { educationHistory, certifications } from "@/data/certifications";
import { GraduationCap, Award, FileCheck, Eye, ArrowUpRight, CheckCircle2, BookOpen } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function Education() {
  const [activeCert, setActiveCert] = useState<{
    url: string;
    title: string;
    issuer: string;
  } | null>(null);

  // Filter out internship documents which are already in the Experience timeline
  const academicCertificates = certifications.filter(
    (c) =>
      c.id !== "hsr-offer-letter" &&
      c.id !== "codec-internship-cert" &&
      c.id !== "itr-certificate"
  );

  return (
    <>
      <section className="w-full py-20 sm:py-28 bg-transparent border-t border-[#E4E4E7]" id="credentials">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
                ACADEMICS & VERIFIED CREDENTIALS
              </span>
              <span className="h-px w-8 bg-[#2563EB]/40"></span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
              Education & Coursework Certifications
            </h2>
            <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
              Formal degree foundations combined with verified credentials from AWS, Microsoft, Simplilearn, Tata &amp; Forage, IIT Bombay, NPTEL / IIT Madras, IBM SkillsBuild, and Barclays.
            </p>
          </div>

          {/* Education Degrees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {educationHistory.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-white rounded-lg border border-[#E4E4E7] p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-[#D4D4D8] transition-all"
                >
                  <div>

                    {/* Header Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#E4E4E7] mb-4">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-50 text-[#2563EB] border border-blue-200 font-semibold">
                        {edu.status}
                      </span>
                      <span className="font-mono text-xs text-[#71717A]">
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-xs text-[#52525B] mt-1 font-medium flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                      <span>{edu.institution}</span>
                    </p>

                    {/* Grade Score */}
                    {edu.grade && (
                      <div className="mt-3 inline-block px-2.5 py-1 bg-[#FAFAF8] border border-[#E4E4E7] rounded font-mono text-xs text-[#09090B] font-semibold">
                        Academic Score: {edu.grade}
                      </div>
                    )}

                    {/* Coursework Chips */}
                    {edu.relevantCoursework && (
                      <div className="mt-5">
                        <span className="font-mono text-[10px] uppercase text-[#71717A] tracking-wider font-semibold block mb-2">
                          Core Academic Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.relevantCoursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 text-xs font-mono text-[#27272A] bg-[#FAFAF8] border border-[#E4E4E7] rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>

            {/* Contextually Embedded Verified Academic Certifications */}
            <div className="bg-white rounded-xl border border-[#E4E4E7] p-6 sm:p-8 lg:p-10 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#E4E4E7] mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#2563EB] font-bold tracking-wider block">
                    OFFICIALLY CONFIRMED CREDENTIALS
                  </span>
                  <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight mt-1">
                    Verified Certifications & Technical Diplomas
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#71717A] bg-[#FAFAF8] px-3 py-1 rounded border border-[#E4E4E7] self-start sm:self-auto">
                  PDF Documents Embedded
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {academicCertificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-lg bg-[#FAFAF8] border border-[#E4E4E7] flex flex-col justify-between hover:border-[#D4D4D8] hover:bg-white transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-blue-50 text-[#2563EB] border border-blue-200 font-semibold truncate">
                          {cert.badgeText}
                        </span>
                        <Award className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#2563EB] transition-colors shrink-0" />
                      </div>

                      <h4 className="font-sans text-sm font-bold text-[#09090B] leading-snug group-hover:text-[#2563EB] transition-colors">
                        {cert.title}
                      </h4>

                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <p className="font-mono text-[11px] text-[#52525B] font-medium">
                          {cert.issuer}
                        </p>
                        {cert.credentialId && (
                          <span className="font-mono text-[9px] text-[#71717A] bg-[#F4F4F5] px-1.5 py-0.5 rounded border border-[#E4E4E7]">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <p className="font-sans text-xs text-[#71717A] mt-2.5 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E4E4E7] flex items-center justify-between">
                      <button
                        onClick={() =>
                          setActiveCert({
                            url: cert.pdfPath,
                            title: cert.title,
                            issuer: cert.issuer,
                          })
                        }
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#09090B] hover:text-[#2563EB] transition-colors"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Inspect PDF</span>
                        <Eye className="w-3 h-3 text-[#A1A1AA]" />
                      </button>

                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-[#71717A] hover:underline"
                      >
                        Open
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </section>

      {/* Embedded In-Place Document Inspector Modal */}
      {activeCert && (
        <CertificateModal
          isOpen={!!activeCert}
          onClose={() => setActiveCert(null)}
          pdfUrl={activeCert.url}
          title={activeCert.title}
          issuer={activeCert.issuer}
        />
      )}
    </>
  );
}
