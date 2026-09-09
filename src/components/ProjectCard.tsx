"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types";
import {
  ArrowUpRight,
  Github,
  CheckCircle2,
  Maximize2,
  Cpu,
  Layers,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import ImageModal from "./ImageModal";

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
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <>
      <article className="bg-white rounded-xl border border-[#E4E4E7] overflow-hidden shadow-card hover:border-[#D4D4D8] transition-all duration-300">
        
        {/* ========================================================================= */}
        {/* 1. PROJECT HEADER & CORE ESSENCE                                         */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-[#E4E4E7] bg-white">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Title & Core Positioning */}
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-[10px] font-semibold tracking-wider text-[#2563EB] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded uppercase">
                  {project.badge}
                </span>
                <span className="font-mono text-xs text-[#71717A] bg-[#FAFAF8] border border-[#E4E4E7] px-2 py-0.5 rounded">
                  {project.year}
                </span>
                <span className="font-mono text-xs text-[#52525B] font-medium">
                  {project.category}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#09090B] tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-semibold text-[#2563EB] mt-1.5">
                {project.subtitle}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#52525B] mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 self-start">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#09090B] text-white hover:bg-[#27272A] rounded font-sans text-xs font-medium transition-all shadow-sm group active:scale-95"
                >
                  <span>Live Application</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#09090B] hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded font-sans text-xs font-medium transition-colors shadow-subtle"
                >
                  <Github className="w-3.5 h-3.5 text-[#71717A]" />
                  <span>GitHub Code</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => setImageModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#FAFAF8] text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded font-mono text-[11px] transition-colors"
                title="Expand screenshot"
              >
                <Maximize2 className="w-3 h-3 text-[#71717A]" />
                <span>Zoom Preview</span>
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 2. HIGH-IMPACT PROBLEM VS SOLUTION MATRIX (MINIMAL & SHARP)             */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            
            {/* The Problem Statement Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#FFF5F5] to-white border border-rose-200/80 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-700">
                    The Problem &amp; Real-World Friction
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-100 flex items-center gap-2 text-[11px] font-mono text-rose-600">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>High user friction &amp; critical information asymmetry</span>
              </div>
            </div>

            {/* The Engineered Solution & Potential Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50/60 to-white border border-blue-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                    Engineered Solution &amp; Direct Potential
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {project.solutionSummary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-100 flex items-center gap-2 text-[11px] font-mono text-[#2563EB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span>Automated, mathematically rigorous &amp; production-deployed</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. KEY METRICS STRIP                                                     */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E4E4E7] shadow-subtle hover:border-[#D4D4D8] transition-colors"
              >
                <span className="block font-mono text-[10px] uppercase text-[#71717A] tracking-wider">
                  {metric.label}
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#09090B] mt-0.5 block truncate">
                  {metric.value}
                </span>
                {metric.detail && (
                  <span className="font-mono text-[10px] text-[#71717A] mt-0.5 block truncate">
                    {metric.detail}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* 4. CONCISE TECH STACK PILLS                                              */}
          {/* ========================================================================= */}
          <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-5 border-t border-[#E4E4E7]">
            <span className="font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider mr-1">
              Core Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono text-[#3F3F46] bg-[#FAFAF8] border border-[#E4E4E7] rounded hover:border-[#2563EB]/40 hover:text-[#2563EB] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 5. INTERACTIVE BROWSER PREVIEW                                           */}
        {/* ========================================================================= */}
        <div className="bg-[#FAFAF8] p-4 sm:p-6 lg:p-8 border-b border-[#E4E4E7]">
          <div className="group/screenshot relative rounded-lg border border-[#E4E4E7] bg-white shadow-card overflow-hidden">
            <button
              type="button"
              onClick={() => setImageModalOpen(true)}
              aria-label={`Open a larger view of the ${project.title} interface`}
              className="block w-full text-left cursor-pointer"
            >
              {/* Mock Browser Title Bar */}
              <div className="flex items-center justify-between border-b border-[#E4E4E7] px-4 py-2.5 bg-[#FAFAF8]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
                </div>
                <div className="font-mono text-[11px] text-[#71717A] px-3 py-1 rounded bg-white border border-[#E4E4E7] truncate max-w-[280px] sm:max-w-[450px] shadow-subtle">
                  {project.liveUrl ?? "Preview build — local production verified"}
                </div>
                <div className="flex items-center gap-1 text-[#71717A] text-[11px] font-mono group-hover/screenshot:text-[#2563EB] transition-colors">
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Click to enlarge</span>
                </div>
              </div>

              {/* Screenshot Container */}
              <div className="relative w-full h-[280px] sm:h-[400px] md:h-[460px] bg-[#F4F4F5] overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top group-hover/screenshot:scale-[1.01] transition-transform duration-500 ease-out"
                  priority={index === 0}
                />

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#09090B] font-mono text-xs font-semibold rounded-full shadow-lg flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Click for Full High-Resolution View</span>
                  </span>
                </div>
              </div>
            </button>

            {/* Bottom Caption Bar */}
            <div className="px-4 py-2.5 bg-white border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#52525B]">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-[#09090B] truncate">
                  {project.title} Interface
                </span>
                <span className="text-[#A1A1AA] hidden sm:inline">•</span>
                <span className="text-[#71717A] hidden sm:inline truncate">
                  {project.subtitle}
                </span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Open Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. EXPANDABLE TECHNICAL DEEP DIVE (MINIMAL ACCORDION)                     */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#E4E4E7]">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#2563EB] hover:text-[#1D4ED8] p-2 rounded-md hover:bg-blue-50/60 transition-colors"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>
                {showTechnicalDetails
                  ? "Hide System Architecture & Pipeline"
                  : "Explore System Architecture & Key Capabilities"}
              </span>
              {showTechnicalDetails ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            <span className="font-mono text-[11px] text-[#A1A1AA] hidden sm:inline">
              Deep-dive pipeline &amp; technical decision breakdown
            </span>
          </div>

          {/* Collapsible Architecture Details */}
          {showTechnicalDetails && (
            <div className="mt-6 pt-6 border-t border-[#E4E4E7] space-y-6 animate-in fade-in duration-300">
              
              {/* Architecture Pipeline Stages */}
              {project.architectureDetails && (
                <div>
                  <span className="font-mono text-xs uppercase text-[#71717A] tracking-wider font-semibold block mb-3">
                    End-to-End System Pipeline:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {project.architectureDetails.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-lg bg-[#FAFAF8] border border-[#E4E4E7] flex flex-col justify-between"
                      >
                        <div>
                          <span className="font-mono text-[10px] uppercase text-[#2563EB] font-bold block mb-1">
                            {step.step}
                          </span>
                          <span className="font-mono text-xs font-bold text-[#09090B] block mb-1.5">
                            {step.tech}
                          </span>
                          <p className="font-sans text-xs text-[#52525B] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#E4E4E7] text-[10px] font-mono text-[#A1A1AA]">
                          Stage 0{sIdx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Admission Compass Specific: Prediction Zones */}
              {project.predictionRules && (
                <div className="p-4 bg-[#FAFAF8] rounded-lg border border-[#E4E4E7]">
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
                      className="p-2.5 rounded bg-[#FAFAF8] border border-[#E4E4E7] flex items-start gap-2 text-xs font-sans text-[#3F3F46]"
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

      {/* Lightbox Modal for Full-Screen Screenshots */}
      <ImageModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        imageSrc={project.imageSrc}
        imageAlt={project.imageAlt}
        title={project.title}
        subtitle={project.subtitle}
        liveUrl={project.liveUrl}
      />
    </>
  );
}
