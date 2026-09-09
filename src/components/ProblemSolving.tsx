"use client";

import React from "react";
import { Terminal, Code, Cpu, CheckCircle2, ArrowUpRight, Binary } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

export default function ProblemSolving() {
  const dsaPatterns = [
    { name: "Two Pointers & Sliding Window", description: "Array & string subsegment optimizations" },
    { name: "Fast & Slow Pointers", description: "Cycle detection & midpoint traversal in linked lists" },
    { name: "Hashing & Frequency Maps", description: "O(1) lookups, anagram grouping, and memoization" },
    { name: "Binary Search & Monotonic Space", description: "Logarithmic bounds and search space reduction" },
    { name: "Linked Lists & Pointer Manipulation", description: "Reversals, in-place node exchanges, and merges" },
    { name: "Sorting & Custom Comparators", description: "Quicksort, mergesort, interval scheduling" },
    { name: "Recursion & Backtracking", description: "Permutations, combinations, constraint satisfaction" },
    { name: "Trees & Graph Traversals", description: "BFS, DFS, binary search tree validation" },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#E4E4E7]" id="problem-solving">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="font-mono text-xs uppercase text-[#2563EB] tracking-widest font-semibold">
              ENGINEERING FOUNDATIONS
            </span>
            <span className="h-px w-8 bg-[#2563EB]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#09090B] tracking-tight">
            Problem Solving & DSA
          </h2>
          <p className="font-sans text-base text-[#52525B] mt-2 leading-relaxed">
            Building stronger engineering fundamentals, one problem at a time. Rigorous algorithmic practice using Java as primary language to design optimal space and time complexities.
          </p>
        </div>

        {/* Engineering Console Dashboard */}
        <div className="bg-white rounded-lg border border-[#E4E4E7] shadow-card overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#FAFAF8] border-b border-[#E4E4E7] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E4E4E7]" />
              <span className="w-3 h-3 rounded-full bg-[#E4E4E7]" />
              <span className="w-3 h-3 rounded-full bg-[#E4E4E7]" />
              <span className="ml-2 font-mono text-xs text-[#71717A] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                dsa-fundamentals --lang=java
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#52525B] bg-white border border-[#E4E4E7] px-2 py-0.5 rounded">
                Primary: Java (JDK 21)
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Narrative & Philosophy (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#2563EB] font-bold tracking-wider block mb-1">
                  CORE PHILOSOPHY
                </span>
                <h3 className="font-sans text-xl font-bold text-[#09090B] tracking-tight">
                  Algorithmic Rigor & Optimal Complexity
                </h3>
                <p className="font-sans text-xs text-[#52525B] mt-3 leading-relaxed">
                  Problem solving isn&apos;t just about grinding solutions; it is about pattern recognition, edge-case vigilance, and mathematically defending time and space tradeoffs.
                </p>

                <div className="mt-6 space-y-2.5 font-mono text-xs text-[#3F3F46]">
                  <div className="p-3 bg-[#FAFAF8] rounded border border-[#E4E4E7] flex items-center justify-between">
                    <span className="text-[#71717A]">Target Language:</span>
                    <span className="font-bold text-[#09090B]">Java (Collections & OOP)</span>
                  </div>
                  <div className="p-3 bg-[#FAFAF8] rounded border border-[#E4E4E7] flex items-center justify-between">
                    <span className="text-[#71717A]">Practice Focus:</span>
                    <span className="font-bold text-[#09090B]">Medium & Hard Complexity</span>
                  </div>
                  <div className="p-3 bg-[#FAFAF8] rounded border border-[#E4E4E7] flex items-center justify-between">
                    <span className="text-[#71717A]">Platform Activity:</span>
                    <span className="font-bold text-[#2563EB]">Active LeetCode Practice</span>
                  </div>
                </div>
              </div>

              {/* Direct LeetCode Coordinate */}
              <div className="mt-6 pt-5 border-t border-[#E4E4E7]">
                <a
                  href="https://leetcode.com/u/Vinayak1213/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#09090B] text-white hover:bg-[#27272A] rounded font-mono text-xs font-medium transition-all shadow-sm group"
                >
                  <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
                  <span>leetcode.com/u/Vinayak1213</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Patterns Grid (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider block mb-3">
                Practiced Algorithmic Paradigms:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dsaPatterns.map((pat) => (
                  <div
                    key={pat.name}
                    className="p-3.5 rounded border border-[#E4E4E7] bg-[#FAFAF8] hover:bg-white hover:border-[#D4D4D8] transition-all"
                  >
                    <div className="flex items-center gap-1.5 mb-1 text-xs font-sans font-semibold text-[#09090B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>{pat.name}</span>
                    </div>
                    <p className="font-sans text-[11px] text-[#71717A] pl-5 leading-tight">
                      {pat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
