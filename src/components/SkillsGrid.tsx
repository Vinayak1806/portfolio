"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { skillCategories } from "@/data/skills";
import { SkillItem } from "@/types";
import {
  Code2,
  Layout,
  Server,
  Database,
  BarChart3,
  Sparkles,
  Search,
  X,
  Terminal,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-[#2563EB]" />,
    Layout: <Layout className="w-4 h-4 text-[#2563EB]" />,
    Server: <Server className="w-4 h-4 text-[#2563EB]" />,
    Database: <Database className="w-4 h-4 text-[#2563EB]" />,
    BarChart3: <BarChart3 className="w-4 h-4 text-[#2563EB]" />,
    Sparkles: <Sparkles className="w-4 h-4 text-[#2563EB]" />,
  };

  const categoriesTab = [
    { id: "all", label: "All Capabilities" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "data-analytics", label: "Data & BI" },
    { id: "ai-tools", label: "AI & Workflow" },
  ];

  // Helper to normalize skill item
  const getSkillObj = (skill: string | SkillItem): SkillItem => {
    if (typeof skill === "string") {
      return { name: skill };
    }
    return skill;
  };

  // Filter categories and skills based on active tab and search query
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => {
        if (selectedCategory === "all") return true;
        return cat.id === selectedCategory;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const query = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter((s) => {
          const item = getSkillObj(s);
          return (
            item.name.toLowerCase().includes(query) ||
            (item.tag && item.tag.toLowerCase().includes(query)) ||
            cat.headline.toLowerCase().includes(query) ||
            cat.name.toLowerCase().includes(query)
          );
        });
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  // Overall counts for metric bar
  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section className="w-full py-20 sm:py-28 bg-transparent border-t border-[#E4E4E7]" id="skills">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                SYSTEM CAPABILITIES & ARCHITECTURE
              </span>
              <span className="h-px w-8 bg-[#2563EB]/40"></span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
              Technical Skills & Tooling
            </h2>
            <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
              Real-world engineering competencies across core systems, full-stack web platforms, transactional databases, data intelligence pipelines, and AI developer tooling.
            </p>
          </div>

          {/* Quick Metrics Badge Group */}
          <div className="flex items-center gap-3 self-start md:self-end bg-[#FAFAF8] p-2.5 rounded-lg border border-[#E4E4E7] shadow-subtle">
            <div className="px-3 py-1 text-center border-r border-[#E4E4E7]">
              <span className="block font-sans font-bold text-lg text-[#09090B] leading-none">6</span>
              <span className="font-mono text-[9px] uppercase text-[#71717A] tracking-wider">Languages</span>
            </div>
            <div className="px-3 py-1 text-center border-r border-[#E4E4E7]">
              <span className="block font-sans font-bold text-lg text-[#2563EB] leading-none">12+</span>
              <span className="font-mono text-[9px] uppercase text-[#71717A] tracking-wider">Web Stacks</span>
            </div>
            <div className="px-3 py-1 text-center border-r border-[#E4E4E7]">
              <span className="block font-sans font-bold text-lg text-[#09090B] leading-none">6</span>
              <span className="font-mono text-[9px] uppercase text-[#71717A] tracking-wider">Databases</span>
            </div>
            <div className="px-3 py-1 text-center">
              <span className="block font-sans font-bold text-lg text-emerald-600 leading-none">10x</span>
              <span className="font-mono text-[9px] uppercase text-[#71717A] tracking-wider">AI Velocity</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E4E4E7]">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categoriesTab.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#09090B] text-white shadow-sm"
                      : "bg-[#FAFAF8] text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F5] border border-[#E4E4E7]"
                  }`}
                >
                  {tab.label}
                  {tab.id === "all" && (
                    <span className={`ml-1.5 text-[10px] font-mono ${isActive ? "text-zinc-300" : "text-[#71717A]"}`}>
                      ({totalSkillsCount})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Python, Gemini)..."
              className="w-full pl-8 pr-8 py-1.5 bg-[#FAFAF8] border border-[#E4E4E7] rounded text-xs font-sans text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71717A] hover:text-[#09090B]"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 px-4 rounded-lg border border-dashed border-[#E4E4E7] bg-[#FAFAF8]">
            <Cpu className="w-8 h-8 text-[#A1A1AA] mx-auto mb-2" />
            <p className="font-sans text-sm font-semibold text-[#09090B]">No matching skills found for &quot;{searchQuery}&quot;</p>
            <p className="font-sans text-xs text-[#71717A] mt-1">Try searching for a different keyword or reset filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-[#2563EB] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((cat) => {
            const isAiCard = cat.id === "ai-tools";

            return (
              <div
                key={cat.id}
                className={`h-full rounded-xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 group ${
                  isAiCard
                    ? "bg-gradient-to-b from-[#FAF5FF] via-white to-blue-50/20 border-blue-200/90 shadow-subtle hover:border-[#2563EB] hover:shadow-card ring-1 ring-blue-100/60"
                    : "bg-[#FAFAF8] border-[#E4E4E7] hover:border-[#D4D4D8] hover:shadow-card hover:bg-white"
                }`}
              >
                <div>
                  
                  {/* Category Header Strip */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E4E7] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#71717A] font-semibold">
                        {cat.index} / {cat.name}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-md border ${isAiCard ? "bg-blue-50 border-blue-200" : "bg-white border-[#E4E4E7]"}`}>
                      {iconMap[cat.iconName] || <Code2 className="w-4 h-4 text-[#2563EB]" />}
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-sans text-lg font-bold text-[#09090B] tracking-tight">
                      {cat.headline}
                    </h3>
                    {isAiCard && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-blue-100 text-[#2563EB] font-bold tracking-wider">
                        <Sparkles className="w-2.5 h-2.5" />
                        Amplified
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs text-[#52525B] leading-relaxed mb-5">
                    {cat.subtitle}
                  </p>

                  {/* Visual Skill Pills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const item = getSkillObj(skill);
                      const isHighlighted = searchQuery && (
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()))
                      );

                      return (
                        <div
                          key={item.name}
                          className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-all duration-150 group/pill ${
                            isHighlighted
                              ? "bg-blue-50 border-[#2563EB] text-[#2563EB] shadow-sm font-semibold scale-105"
                              : isAiCard
                              ? "bg-white border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 text-[#09090B] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                              : "bg-white border-[#E4E4E7] hover:border-[#2563EB]/60 hover:shadow-subtle text-[#09090B]"
                          }`}
                        >
                          {/* Tech Logo Icon if available */}
                          {item.icon ? (
                            <span className="w-4 h-4 flex-shrink-0 relative flex items-center justify-center">
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={16}
                                height={16}
                                className="w-4 h-4 object-contain transition-transform group-hover/pill:scale-110"
                              />
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/70 group-hover/pill:bg-[#2563EB]" />
                          )}

                          {/* Skill Name */}
                          <span className="font-sans font-medium text-xs text-[#09090B] tracking-tight">
                            {item.name}
                          </span>

                          {/* Contextual Competency Tag */}
                          {item.tag && (
                            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#F4F4F5] text-[#71717A] group-hover/pill:text-[#2563EB] group-hover/pill:bg-blue-50 transition-colors">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Footer Sub-label with Status Indicator */}
                <div className="mt-6 pt-3.5 border-t border-[#E4E4E7]/70 text-[10px] font-mono text-[#71717A] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {isAiCard ? "Daily 10x engineering workflow" : "Production verified"}
                  </span>
                  <span className="text-[#A1A1AA]">
                    {cat.skills.length} competencies
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Note */}
        <div className="mt-12 p-4 rounded-lg bg-[#FAFAF8] border border-[#E4E4E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-[#52525B]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              All listed tools and frameworks are actively demonstrated across real repositories and production deployments in the portfolio.
            </span>
          </div>
          <a
            href="#selected-work"
            className="font-mono text-xs font-semibold text-[#2563EB] hover:underline flex-shrink-0"
          >
            Explore Projects in Action →
          </a>
        </div>

      </div>
    </section>
  );
}
