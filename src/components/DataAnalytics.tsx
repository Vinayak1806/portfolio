"use client";

import React from "react";
import Image from "next/image";
import { analyticsProjects } from "@/data/projects";
import { BarChart3, TrendingUp, AlertCircle, Database, Check } from "lucide-react";

export default function DataAnalytics() {
  return (
    <section className="w-full py-20 sm:py-28 bg-transparent border-t border-[#E4E4E7]" id="analytics">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              ANALYTICS CAPABILITIES
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            Data, Analytics & Intelligence
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
            My analytics work combines data cleaning, exploration, visualization, machine learning, and business-oriented dashboards to turn raw data into useful decisions.
          </p>
        </div>

        {/* Analytics Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {analyticsProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAFAF8] rounded-lg border border-[#E4E4E7] overflow-hidden flex flex-col justify-between shadow-subtle hover:border-[#D4D4D8] hover:shadow-card transition-all duration-300 group"
            >
              <div>
                
                {/* Dashboard Image Preview Container */}
                <div className="relative w-full aspect-[16/10] bg-[#F4F4F5] border-b border-[#E4E4E7] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#09090B]/85 backdrop-blur-sm text-white px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#2563EB] font-medium mt-1">
                    {project.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#52525B] mt-3.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Synthetic Data Note (if applicable) */}
                  {project.isSynthetic && (
                    <div className="mt-3 p-2 bg-amber-50/70 border border-amber-200/80 rounded flex items-start gap-1.5 text-[11px] font-sans text-amber-900">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Conducted strictly on a synthetic clinical dataset for algorithmic exploration; no medical claims.
                      </span>
                    </div>
                  )}

                  {/* Key Findings List */}
                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[10px] uppercase text-[#71717A] tracking-wider font-semibold block">
                      Key Analytical Findings:
                    </span>
                    {project.keyFindings.map((finding, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-[#3F3F46]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                        <span className="leading-snug">{finding}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dataset Info */}
                  <div className="mt-5 pt-3.5 border-t border-[#E4E4E7] text-[11px] font-mono text-[#71717A]">
                    <span className="text-[#09090B] font-medium">Dataset:</span> {project.datasetInfo}
                  </div>
                </div>

              </div>

              {/* Technologies Bottom Strip */}
              <div className="p-4 bg-white border-t border-[#E4E4E7] flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono text-[#52525B] bg-[#F4F4F5] rounded border border-[#E4E4E7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
