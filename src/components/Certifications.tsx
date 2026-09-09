"use client";

import React, { useState } from "react";
import { certifications } from "@/data/certifications";
import { Award, FileCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{
    pdfUrl: string;
    title: string;
    issuer: string;
  } | null>(null);

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#E4E4E7]" id="credentials">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              VERIFIED CREDENTIALS
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            Certifications & Training
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
            Officially verified technical certifications and academic internship credentials from IIT Bombay, NPTEL, and IBM SkillsBuild.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg border border-[#E4E4E7] p-6 flex flex-col justify-between shadow-subtle hover:border-[#D4D4D8] hover:shadow-card transition-all group"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-50 text-[#2563EB] border border-blue-200 font-semibold truncate">
                    {cert.badgeText}
                  </span>
                  <Award className="w-4 h-4 text-[#71717A] group-hover:text-[#2563EB] transition-colors shrink-0" />
                </div>

                {/* Title */}
                <h3 className="font-sans text-base font-bold text-[#09090B] tracking-tight group-hover:text-[#2563EB] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="font-mono text-xs text-[#52525B] mt-1 font-medium">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="font-sans text-xs text-[#71717A] mt-3 leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Action Link to View PDF */}
              <div className="mt-6 pt-4 border-t border-[#E4E4E7] flex items-center justify-between">
                <button
                  onClick={() =>
                    setSelectedCert({
                      pdfUrl: cert.pdfPath,
                      title: cert.title,
                      issuer: cert.issuer,
                    })
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#09090B] hover:text-[#2563EB] transition-colors"
                >
                  <FileCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Inspect Certificate</span>
                  <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
                </button>

                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-[#71717A] hover:underline"
                >
                  PDF
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive PDF Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          pdfUrl={selectedCert.pdfUrl}
          title={selectedCert.title}
          issuer={selectedCert.issuer}
        />
      )}
    </section>
  );
}
