"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Brain,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ZONE_STYLES: Record<string, string> = {
  safe: "text-emerald-700 bg-emerald-50 border-emerald-200",
  target: "text-blue-700 bg-blue-50 border-blue-200",
  ambitious: "text-amber-700 bg-amber-50 border-amber-200",
  highlyAmbitious: "text-rose-700 bg-rose-50 border-rose-200",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <article className="bg-white/70 backdrop-blur-md rounded-2xl border border-[#E4E4E7]/80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-[#2563EB]/40 hover:bg-white/80 transition-all duration-300">
      
      {/* ========================================================================= */}
      {/* MAIN BALANCED 2-COLUMN SHOWCASE (NARRATIVE + INTERACTIVE VISUAL)          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
        
        {/* LEFT COLUMN: THE ENGINEERING STORY & IMPACT (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Category & Badge Row */}
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-[#2563EB] bg-blue-50/80 border border-blue-200/80 px-2.5 py-0.5 rounded uppercase">
                {project.badge}
              </span>
              <span className="font-mono text-[11px] text-[#71717A] bg-white/60 border border-[#E4E4E7] px-2 py-0.5 rounded">
                {project.year}
              </span>
              <span className="font-mono text-[11px] text-[#52525B] font-medium">
                {project.category}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#09090B] tracking-tight">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm font-semibold text-[#2563EB] mt-1">
              {project.subtitle}
            </p>

            {/* One-sentence Essence */}
            <p className="font-sans text-xs sm:text-sm text-[#52525B] mt-2.5 leading-relaxed">
              {project.description}
            </p>

            {/* =================================================================== */}
            {/* UNIFIED CHALLENGE & SOLUTION FLOW (TRANSLUCENT GLASS)               */}
            {/* =================================================================== */}
            <div className="mt-5 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-[#E4E4E7]/70 space-y-3.5 shadow-subtle">
              
              {/* The Problem */}
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-rose-100/80 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                </div>
                <div className="text-xs font-sans text-[#3F3F46] leading-relaxed">
                  <span className="font-mono font-bold uppercase tracking-wider text-rose-600 mr-1 text-[11px]">
                    The Problem:
                  </span>
                  {project.problemStatement}
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-px w-full bg-[#E4E4E7]/70" />

              {/* The Engineered Solution */}
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-blue-100/80 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                </div>
                <div className="text-xs font-sans text-[#1E293B] leading-relaxed">
                  <span className="font-mono font-bold uppercase tracking-wider text-[#2563EB] mr-1 text-[11px]">
                    Engineered Solution:
                  </span>
                  {project.solutionSummary}
                </div>
              </div>

            </div>

            {/* =================================================================== */}
            {/* 4 COMPACT KEY METRICS                                              */}
            {/* =================================================================== */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-2.5 bg-white/60 backdrop-blur-sm rounded-lg border border-[#E4E4E7]/70 shadow-subtle"
                >
                  <span className="block font-mono text-[9px] uppercase text-[#71717A] tracking-wider truncate">
                    {metric.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#09090B] mt-0.5 block truncate">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4">
              <span className="font-mono text-[10px] uppercase text-[#71717A] font-semibold mr-1">
                Stack:
              </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono text-[#3F3F46] bg-white/50 backdrop-blur-sm border border-[#E4E4E7]/70 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Soft Skills Badges */}
            {project.softSkills && project.softSkills.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-[#71717A] font-semibold mr-1">
                  <Brain className="w-3 h-3 text-violet-500" />
                  Soft Skills:
                </span>
                {project.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] font-mono text-violet-700 bg-violet-50/70 border border-violet-200/80 rounded backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

          </div>

          {/* Direct Action Button: Live Application */}
          {project.liveUrl && (
            <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-[#E4E4E7]/70">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#09090B] text-white hover:bg-[#27272A] rounded-lg font-sans text-xs font-medium transition-all shadow-sm group active:scale-95"
              >
                <span>Live Application</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: PROPORTIONED BROWSER MOCKUP (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="group/screenshot relative rounded-xl border border-[#E4E4E7]/80 bg-white/40 backdrop-blur-md shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/40">
            
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live application`}
                className="block w-full text-left cursor-pointer"
              >
                {/* Modern macOS Traffic-Light Header */}
                <div className="flex items-center justify-between border-b border-[#E4E4E7]/70 px-3.5 py-2.5 bg-white/60 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                  </div>
                  <div className="font-mono text-[10px] text-[#71717A] px-2.5 py-0.5 rounded bg-white/70 border border-[#E4E4E7]/80 truncate max-w-[180px] sm:max-w-[240px] shadow-subtle">
                    {project.liveUrl.replace("https://", "")}
                  </div>
                  <div className="flex items-center gap-1 text-[#71717A] text-[10px] font-mono group-hover/screenshot:text-[#2563EB] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Naturally Proportioned Screenshot Container */}
                <div className="relative w-full aspect-[16/11] bg-white/30 overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top group-hover/screenshot:scale-[1.03] transition-transform duration-500 ease-out"
                    priority={index === 0}
                  />
                </div>
              </a>
            ) : (
              <div className="block w-full text-left">
                {/* Modern macOS Traffic-Light Header */}
                <div className="flex items-center justify-between border-b border-[#E4E4E7]/70 px-3.5 py-2.5 bg-white/60 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                  </div>
                  <div className="font-mono text-[10px] text-[#71717A] px-2.5 py-0.5 rounded bg-white/70 border border-[#E4E4E7]/80 truncate shadow-subtle">
                    preview.local
                  </div>
                  <span />
                </div>

                <div className="relative w-full aspect-[16/11] bg-white/30 overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top"
                    priority={index === 0}
                  />
                </div>
              </div>
            )}

            {/* Bottom Caption Bar */}
            <div className="px-3.5 py-2 bg-white/60 backdrop-blur-sm border-t border-[#E4E4E7]/70 flex items-center justify-between text-[11px] font-mono text-[#52525B]">
              <div className="flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-[#09090B] truncate">
                  {project.title}
                </span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline flex items-center gap-1 shrink-0 ml-2 font-medium"
                >
                  <span>Open Live App</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* COLLAPSIBLE TECHNICAL DEEP DIVE (PIPELINE & CAPABILITIES)                 */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 bg-white/30 backdrop-blur-md border-t border-[#E4E4E7]/70">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#2563EB] hover:text-[#1D4ED8] p-1.5 rounded hover:bg-blue-50/60 transition-colors"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>
              {showTechnicalDetails
                ? "Hide System Architecture & Pipeline"
                : "Explore System Architecture & Pipeline"}
            </span>
            {showTechnicalDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          <span className="font-mono text-[11px] text-[#71717A] hidden sm:inline">
            {project.architectureDetails
              ? `${project.architectureDetails.length}-Stage System Pipeline`
              : "Feature Deep Dive"}
          </span>
        </div>

        {/* Collapsible Architecture Details */}
        {showTechnicalDetails && (
          <div className="mt-5 pt-5 border-t border-[#E4E4E7]/70 space-y-6 animate-in fade-in duration-300">
            
            {/* Architecture Pipeline Stages */}
            {project.architectureDetails && (
              <div>
                <span className="font-mono text-xs uppercase text-[#71717A] tracking-wider font-semibold block mb-3">
                  End-to-End System Pipeline:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                  {project.architectureDetails.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-[#E4E4E7]/80 flex flex-col justify-between shadow-subtle"
                    >
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#2563EB] font-bold block mb-1">
                          {step.step}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#09090B] block mb-1">
                          {step.tech}
                        </span>
                        <p className="font-sans text-xs text-[#52525B] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-[#E4E4E7]/70 text-[10px] font-mono text-[#A1A1AA]">
                        Stage 0{sIdx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admission Compass Specific: Prediction Zones */}
            {project.predictionRules && (
              <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-[#E4E4E7]/80 shadow-subtle">
                <span className="font-mono text-xs uppercase text-[#09090B] font-bold tracking-wider block mb-3">
                  Algorithmic Probability Zones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {project.predictionRules.map((rule, rIdx) => (
                    <div
                      key={rIdx}
                      className={`p-3 rounded border flex flex-col justify-between ${
                        ZONE_STYLES[rule.variant ?? ""] ?? rule.color ?? ZONE_STYLES.target
                      }`}
                    >
                      <div>
                        <span className="font-mono text-xs font-bold block">
                          {rule.zone}
                        </span>
                        <span className="font-mono text-[10px] font-medium mt-0.5 block">
                          {rule.condition}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] mt-1.5 opacity-90 leading-tight">
                        {rule.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Feature Highlights */}
            <div>
              <span className="font-mono text-xs uppercase text-[#71717A] tracking-wider font-semibold block mb-2.5">
                Feature Highlights:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.features.slice(0, 6).map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-2.5 rounded bg-white/60 backdrop-blur-sm border border-[#E4E4E7]/80 flex items-start gap-2 text-xs font-sans text-[#3F3F46] shadow-subtle"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

    </article>
  );
}
