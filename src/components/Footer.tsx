"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FAFAF8] border-t border-[#E4E4E7] py-10 sm:py-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-sans font-bold text-sm text-[#09090B]">
            Vinayak Pawate
          </span>
          <span className="hidden sm:inline text-[#D4D4D8]">•</span>
          <span className="font-mono text-xs text-[#71717A]">
            Full-Stack Developer • Software Engineer • Data Analytics
          </span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-5 text-xs font-mono text-[#71717A]">
          <a
            href="https://github.com/Vinayak1806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#09090B] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-pawate/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#09090B] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Vinayak1213/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#09090B] transition-colors"
          >
            LeetCode
          </a>
          <a
            href="/Vinayak_Pawate_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vinayak_Pawate_Resume.pdf"
            className="hover:text-[#09090B] transition-colors"
          >
            Resume
          </a>
          <a
            href="mailto:vinayakpawate@gmail.com"
            className="hover:text-[#09090B] transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded border border-[#E4E4E7] bg-white hover:bg-[#F4F4F5] text-[#09090B] transition-all ml-2"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Copyright Notice */}
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-[#E4E4E7]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A1A1AA] gap-2">
        <span>© 2026 Vinayak Pawate. Built with Next.js & TypeScript.</span>
        <span>Precision Engineering Minimalist Architecture</span>
      </div>
    </footer>
  );
}
