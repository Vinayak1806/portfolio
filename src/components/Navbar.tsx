"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, FileDown, Menu, X } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#selected-work" },
    { name: "Analytics", href: "#analytics" },
    { name: "Experience", href: "#experience" },
    { name: "DSA & Skills", href: "#problem-solving" },
    { name: "Education & Certifications", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E4E4E7] shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3"
        : "bg-[#FAFAF8]/80 backdrop-blur-sm border-b border-[#E4E4E7]/60 py-4"
        }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left: Monogram & Identity */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#09090B] group focus:outline-none"
          >
            <div className="w-8 h-8 rounded border border-[#E4E4E7] bg-white flex items-center justify-center font-mono font-bold text-xs tracking-tight text-[#09090B] group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors shadow-sm">
              VP
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-sm tracking-tight text-[#09090B]">
                Vinayak Pawate
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for roles</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center: Clean, Focused Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-sans font-medium text-[#52525B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#09090B] transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Technical Socials & Resume Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/Vinayak1806"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#71717A] hover:text-[#09090B] hover:bg-white rounded border border-transparent hover:border-[#E4E4E7] transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/vinayak-pawate/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-[#71717A] hover:text-[#2563EB] hover:bg-white rounded border border-transparent hover:border-[#E4E4E7] transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://leetcode.com/u/Vinayak1213/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vinayak Pawate LeetCode Profile"
            className="p-2 text-[#71717A] hover:text-[#FFA116] hover:bg-white rounded border border-transparent hover:border-[#E4E4E7] transition-all"
            title="LeetCode Profile: Vinayak1213"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>

          <a
            href="/Vinayak_Pawate_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vinayak_Pawate_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-semibold bg-[#09090B] text-white hover:bg-[#27272A] rounded border border-[#09090B] transition-all shadow-sm active:scale-95 ml-1"
            title="Download Vinayak Pawate's Resume (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#09090B] hover:bg-white rounded border border-[#E4E4E7] focus:outline-none ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#E4E4E7] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-[#27272A]">
            <div className="pb-2 mb-2 border-b border-[#E4E4E7] flex items-center justify-between">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">Navigation</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-mono text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for hire</span>
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-[#52525B] hover:text-[#2563EB] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#A1A1AA]">→</span>
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-[#E4E4E7] flex flex-col gap-2">
              <a
                href="/Vinayak_Pawate_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vinayak_Pawate_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded bg-[#FAFAF8] border border-[#E4E4E7] text-[#09090B] text-xs font-semibold hover:border-[#2563EB]"
              >
                <FileDown className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-2 px-4 rounded bg-[#09090B] text-white text-xs font-medium"
              >
                Contact Vinayak
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
