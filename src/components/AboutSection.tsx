"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Database, Code, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-transparent border-t border-[#E4E4E7]" id="about">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
                PERSONAL PHILOSOPHY
              </span>
              <span className="h-px w-8 bg-[#2563EB]/40"></span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#09090B] tracking-tight leading-tight">
              A developer who enjoys building from the interface to the data layer.
            </h2>

            <div className="mt-6 space-y-4 font-sans text-base text-[#52525B] leading-relaxed">
              <p>
                I&apos;m a Computer Engineering student focused on becoming a strong full-stack software engineer. I enjoy building complete products—from responsive interfaces and backend APIs to database systems, data pipelines, analytics dashboards, and AI-powered features.
              </p>
              <p>
                My background in Data Analytics gives me a distinct perspective as a developer: I don&apos;t just think about how an application looks or functions, but also about the data flowing through it, how schema indices impact latency, how information can be cleansed and transformed, and how data intelligence drives business decisions.
              </p>
              <p>
                Currently, I&apos;m focused on strengthening my Full-Stack Development, Software Engineering, and DSA fundamentals in Java, while delivering practical web applications and gaining industry internship experience.
              </p>
            </div>

            {/* Core Values / Builder Traits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-[#E4E4E7]">
              <div className="p-3.5 bg-[#FAFAF8] rounded border border-[#E4E4E7]">
                <span className="font-mono text-xs font-bold text-[#09090B] block">
                  Product Mindset
                </span>
                <span className="font-sans text-xs text-[#71717A] mt-1 block">
                  Designing for real users, edge cases, and reliable workflows.
                </span>
              </div>

              <div className="p-3.5 bg-[#FAFAF8] rounded border border-[#E4E4E7]">
                <span className="font-mono text-xs font-bold text-[#09090B] block">
                  Data-First Lens
                </span>
                <span className="font-sans text-xs text-[#71717A] mt-1 block">
                  Optimized schemas, ETL transformation, and statistical insight.
                </span>
              </div>

              <div className="p-3.5 bg-[#FAFAF8] rounded border border-[#E4E4E7]">
                <span className="font-mono text-xs font-bold text-[#09090B] block">
                  Algorithmic Rigor
                </span>
                <span className="font-sans text-xs text-[#71717A] mt-1 block">
                  Active DSA practice in Java with space/time accountability.
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Stats Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAFAF8] rounded-lg border border-[#E4E4E7] p-6 shadow-subtle flex flex-col gap-6">
              
              <div className="pb-4 border-b border-[#E4E4E7]">
                <span className="font-mono text-[11px] uppercase text-[#71717A] tracking-wider block">
                  CURRENT PROFILE
                </span>
                <h4 className="font-sans text-lg font-bold text-[#09090B] mt-1">
                  Vinayak Pawate
                </h4>
                <p className="font-mono text-xs text-[#2563EB]">
                  Computer Engineering & Full-Stack Developer
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#3F3F46]">
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]/60">
                  <span className="text-[#71717A]">Primary Focus:</span>
                  <span className="font-semibold text-[#09090B]">Full-Stack & Systems</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]/60">
                  <span className="text-[#71717A]">Active Role:</span>
                  <span className="font-semibold text-emerald-600">MERN Intern</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]/60">
                  <span className="text-[#71717A]">Degree Status:</span>
                  <span className="font-semibold text-[#09090B]">B.E. Comp (2026)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]/60">
                  <span className="text-[#71717A]">Diploma Score:</span>
                  <span className="font-semibold text-[#09090B]">88.17% Aggregate</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#E4E4E7]/60">
                  <span className="text-[#71717A]">Location:</span>
                  <span className="font-semibold text-[#09090B]">Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#71717A]">Languages:</span>
                  <span className="font-semibold text-[#09090B] text-[11px]">English, Hindi, Marathi, Kannada</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
