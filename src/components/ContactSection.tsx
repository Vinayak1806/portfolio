"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Clock, MapPin, Send } from "lucide-react";
import LeetCodeIcon from "./LeetCodeIcon";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "vinayakpawate@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-white border-t border-[#E4E4E7] relative" id="contact">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAF8] border border-[#E4E4E7] mb-6 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#09090B] font-medium">
              Available for Full-Stack & Software Engineering Roles
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#09090B] tracking-tight leading-tight">
            Have something worth building?
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-[#52525B] mt-4 leading-relaxed max-w-2xl">
            I&apos;m open to internships, software development opportunities, collaborations, and interesting engineering projects. Let&apos;s build thoughtful, reliable software together.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href={`mailto:${email}?subject=Software%20Engineering%20Opportunity%20-%20Vinayak%20Pawate`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#09090B] text-white hover:bg-[#27272A] rounded font-sans text-sm font-medium transition-all shadow-sm active:scale-95 group"
            >
              <Send className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
              <span>Let&apos;s Connect</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAFAF8] text-[#09090B] hover:bg-[#F4F4F5] border border-[#E4E4E7] rounded font-mono text-xs font-medium transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#71717A]" />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Specifications Matrix */}
          <div className="mt-12 pt-8 border-t border-[#E4E4E7] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <span className="block font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="font-mono text-xs font-semibold text-[#09090B] hover:text-[#2563EB] transition-colors mt-1 block truncate"
              >
                {email}
              </a>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider">
                Location & Timezone
              </span>
              <span className="font-mono text-xs font-medium text-[#09090B] mt-1 block">
                Pune, Maharashtra, India (IST / UTC+5:30)
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase text-[#71717A] font-semibold tracking-wider">
                Response Cadence
              </span>
              <span className="font-mono text-xs font-semibold text-[#2563EB] mt-1 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Within 24 Hours</span>
              </span>
            </div>
          </div>

          {/* Social Profiles Direct Links */}
          <div className="mt-8 pt-6 border-t border-[#E4E4E7]/70 flex flex-wrap items-center gap-6 text-xs font-mono text-[#52525B]">
            <a
              href="https://www.linkedin.com/in/vinayak-pawate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>linkedin.com/in/vinayak-pawate</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
            </a>

            <a
              href="https://github.com/Vinayak1806"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#09090B] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/Vinayak1806</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
            </a>

            <a
              href="https://leetcode.com/u/Vinayak1213/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA116] flex items-center gap-1.5 transition-colors"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-[#FFA116]" />
              <span>leetcode.com/u/Vinayak1213</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
