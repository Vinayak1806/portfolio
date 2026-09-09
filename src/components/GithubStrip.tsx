"use client";

import React from "react";
import { Github, Star, GitFork, ArrowUpRight, Code2 } from "lucide-react";

export default function GithubStrip() {
  const pinnedRepos = [
    {
      name: "College-predictor",
      fullName: "Vinayak1806/College-predictor",
      description: "Data-driven Maharashtra FE & DSE CAP Cutoff Predictor built with Next.js 15, PostgreSQL, Prisma, and Python.",
      language: "TypeScript",
      langColor: "bg-blue-600",
      url: "https://github.com/Vinayak1806/College-predictor",
    },
    {
      name: "HostelHub",
      fullName: "Vinayak1806/HostelHub",
      description: "Full-stack MERN collegiate hostel administration platform featuring room allocation, fees, and attendance.",
      language: "JavaScript",
      langColor: "bg-amber-400",
      url: "https://github.com/Vinayak1806",
    },
    {
      name: "ArguAI",
      fullName: "Vinayak1806/ArguAI",
      description: "AI-powered cognitive debate platform using Google Gemini Flash API with custom fallacy heuristics and scoring.",
      language: "Python",
      langColor: "bg-emerald-500",
      url: "https://github.com/Vinayak1806",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#FAFAF8] border-t border-[#E4E4E7]" id="github">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
                OPEN SOURCE
              </span>
              <span className="h-px w-8 bg-[#2563EB]/40"></span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#09090B] tracking-tight">
              Building in Public
            </h2>
          </div>

          <a
            href="https://github.com/Vinayak1806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-[#E4E4E7] text-xs font-mono font-medium text-[#09090B] hover:border-[#09090B] transition-colors shadow-subtle self-start sm:self-auto"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/Vinayak1806</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717A]" />
          </a>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg border border-[#E4E4E7] p-5 flex flex-col justify-between shadow-subtle hover:border-[#09090B] hover:shadow-card transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 truncate">
                    <Code2 className="w-4 h-4 text-[#71717A] group-hover:text-[#2563EB] transition-colors shrink-0" />
                    <span className="font-mono text-xs font-bold text-[#09090B] truncate group-hover:text-[#2563EB] transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono border border-[#E4E4E7] rounded text-[#71717A] bg-[#FAFAF8]">
                    Public
                  </span>
                </div>

                <p className="font-sans text-xs text-[#52525B] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E4E4E7] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <span className="text-[#A1A1AA] group-hover:text-[#09090B] transition-colors flex items-center gap-1">
                  <span>View Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
