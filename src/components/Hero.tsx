"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

export default function Hero() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAFAF8]">
      {/* Subtle Precision Architectural Background Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#E4E4E7_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/70 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
              <span className="font-mono text-[11px] font-semibold text-[#2563EB] uppercase tracking-widest">
                FULL-STACK • SOFTWARE • DATA ANALYTICS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#09090B] tracking-tight leading-[1.12] max-w-2xl">
              I build products that turn ideas into working software.
            </h1>

            {/* Supporting Bio Narrative */}
            <p className="font-sans text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl mt-6">
              Computer Engineering student and Full-Stack Developer focused on React, Node.js, Next.js, databases, APIs, and data-driven applications. I enjoy building complete products—from responsive interfaces and backend systems to analytics pipelines and AI-powered features.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#09090B] text-white hover:bg-[#27272A] rounded-md font-sans text-sm font-medium transition-all shadow-sm active:scale-95 group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Vinayak_Pawate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vinayak_Pawate_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#09090B] border border-[#E4E4E7] hover:bg-[#F4F4F5] hover:border-[#2563EB]/40 rounded-md font-sans text-sm font-medium transition-all shadow-sm active:scale-95 group"
                title="Download Vinayak Pawate's Official Resume (PDF)"
              >
                <FileText className="w-4 h-4 text-[#2563EB] group-hover:scale-110 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-[#71717A]">
              <span className="text-[#A1A1AA]">Connect:</span>
              <a
                href="https://github.com/Vinayak1806"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#09090B] flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#D4D4D8]">•</span>
              <a
                href="https://www.linkedin.com/in/vinayak-pawate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#D4D4D8]">•</span>
              <a
                href="https://leetcode.com/u/Vinayak1213/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFA116] flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#FFA116]" />
                <span>LeetCode</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-[#E4E4E7]/80 w-full max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#71717A] tracking-wider">Primary Stack</span>
                <span className="font-sans text-xs font-semibold text-[#09090B] mt-0.5 block">React • Next.js • Node</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-[#71717A] tracking-wider">Data & Analytics</span>
                <span className="font-sans text-xs font-semibold text-[#09090B] mt-0.5 block">Python • SQL • Power BI</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-mono text-[10px] uppercase text-[#71717A] tracking-wider">Problem Solving</span>
                <span className="font-sans text-xs font-semibold text-[#2563EB] mt-0.5 block">DSA in Java</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photo Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[370px]">

              {/* Subtle Offset Geometric Underlay */}
              <div className="absolute -inset-2 rounded-xl border border-[#E4E4E7] -rotate-1 bg-[#F4F4F5]/60 pointer-events-none" />

              {/* Main Photo Card Container */}
              <div className="relative bg-white rounded-lg border border-[#E4E4E7] p-2.5 shadow-card overflow-hidden group">

                {/* Status Badge in Photo */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-[#E4E4E7] px-2.5 py-1 rounded shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#09090B] font-medium">
                    Active MERN Intern
                  </span>
                </div>

                {/* Professional Photo Container */}
                <div className="w-full aspect-[4/4.5] sm:aspect-square overflow-hidden rounded bg-[#F4F4F5] relative">
                  <Image
                    src="/images/profile.png"
                    alt="Vinayak Pawate - Full-Stack Developer & Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Bottom Technical Spec Bar */}
                <div className="mt-2.5 p-2.5 bg-[#FAFAF8] rounded border border-[#E4E4E7]/70 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-[#52525B]">
                      <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
                      <span>Pune, Maharashtra, India</span>
                    </div>
                    <span className="text-[#2563EB] font-medium">IST (UTC+5:30)</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#71717A] pt-1 border-t border-[#E4E4E7]/60">
                    <GraduationCap className="w-3.5 h-3.5 text-[#71717A]" />
                    <span className="truncate">SAE Kondhwa • B.E. Computer Engineering</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
