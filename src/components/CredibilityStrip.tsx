"use client";

import React from "react";
import Image from "next/image";

interface TechLogo {
  name: string;
  iconPath: string;
}

const TECH_LOGOS: TechLogo[] = [
  { name: "React", iconPath: "/tech-icons/react.svg" },
  { name: "Next.js", iconPath: "/tech-icons/nextjs.svg" },
  { name: "TypeScript", iconPath: "/tech-icons/typescript.svg" },
  { name: "JavaScript", iconPath: "/tech-icons/javascript.svg" },
  { name: "Node.js", iconPath: "/tech-icons/nodejs.svg" },
  { name: "Python", iconPath: "/tech-icons/python.svg" },
  { name: "PostgreSQL", iconPath: "/tech-icons/postgresql.svg" },
  { name: "MongoDB", iconPath: "/tech-icons/mongodb.svg" },
  { name: "Tailwind CSS", iconPath: "/tech-icons/tailwindcss.svg" },
  { name: "Power BI", iconPath: "/tech-icons/powerbi.svg" },
  { name: "Java", iconPath: "/tech-icons/java.svg" },
  { name: "C++", iconPath: "/tech-icons/cplusplus.svg" },
  { name: "MySQL", iconPath: "/tech-icons/mysql.svg" },
  { name: "Docker", iconPath: "/tech-icons/docker.svg" },
  { name: "Git", iconPath: "/tech-icons/git.svg" },
  { name: "GitHub", iconPath: "/tech-icons/github.svg" },
  { name: "Postman", iconPath: "/tech-icons/postman.svg" },
  { name: "LeetCode", iconPath: "/tech-icons/leetcode.svg" },
  { name: "Google Gemini AI", iconPath: "/tech-icons/gemini.svg" },
];

export default function CredibilityStrip() {
  return (
    <section 
      aria-label="Core Engineering Technologies & Tooling" 
      className="relative w-full border-y border-[#E4E4E7] bg-white py-7 sm:py-9 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none"
    >
      {/* Left Edge Smooth Gradient Dissolve */}
      <div 
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Right Edge Smooth Gradient Dissolve */}
      <div 
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Infinite Continuous Marquee Track */}
      <div className="flex items-center">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20">
          {/* Pass 1 */}
          {TECH_LOGOS.map((tech, idx) => (
            <div
              key={`tech-p1-${tech.name}-${idx}`}
              title={tech.name}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 transition-transform duration-300 hover:scale-125 cursor-pointer"
            >
              <Image
                src={tech.iconPath}
                alt={tech.name}
                width={56}
                height={56}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-sm filter transition-all duration-300"
                unoptimized
              />
            </div>
          ))}

          {/* Pass 2 (Seamless clone for infinite looping) */}
          {TECH_LOGOS.map((tech, idx) => (
            <div
              key={`tech-p2-${tech.name}-${idx}`}
              title={tech.name}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 transition-transform duration-300 hover:scale-125 cursor-pointer"
            >
              <Image
                src={tech.iconPath}
                alt={tech.name}
                width={56}
                height={56}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-sm filter transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
