"use client";

import React from "react";
import { selectedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#E4E4E7]" id="selected-work">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              FLAGSHIP WORK
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            Selected Work
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
            A curated selection of applications and data-driven products I&apos;ve engineered from problem formulation to production deployment.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {selectedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
