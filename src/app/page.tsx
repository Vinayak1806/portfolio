import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import SelectedWork from "@/components/SelectedWork";
import DataAnalytics from "@/components/DataAnalytics";
import WhatIBuild from "@/components/WhatIBuild";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProblemSolving from "@/components/ProblemSolving";
import SkillsGrid from "@/components/SkillsGrid";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import AboutSection from "@/components/AboutSection";
import LanguagesSection from "@/components/LanguagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PixelGrid from "@/components/PixelGrid";

export default function Home() {
  return (
    <div className="relative isolate flex flex-col min-h-screen selection:bg-[#EFF6FF] selection:text-[#1D4ED8]">
      {/* Live Interactive Pixel Grid Background */}
      <PixelGrid />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Credibility Horizontal Discipline Strip */}
        <CredibilityStrip />

        {/* Section 3: Selected Work (Admission Compass, Hostel Hub, ArguAI) */}
        <SelectedWork />

        {/* Section 4: Data & Analytics Intelligence (Attrition, Instagram, Heart Disease) */}
        <DataAnalytics />

        {/* Section 5: What I Build (3 Architectural Pillars) */}
        <WhatIBuild />

        {/* Section 6: Work Experience Timeline with Embedded Verified Appointment & Completion Documents */}
        <ExperienceTimeline />

        {/* Section 7: Problem Solving & DSA (Java Fundamentals & LeetCode) */}
        <ProblemSolving />

        {/* Section 8: Technical Skills Matrix (7 Domains) */}
        <SkillsGrid />

        {/* Section 9: Formal Engineering Education & Verified Coursework Certifications */}
        <Education />

        {/* Section 10: Competitive Achievements (Flipkart GRiD 8.0, Hackathons) */}
        <Achievements />

        {/* Section 11: About (Interface to Data Layer) */}
        <AboutSection />

        {/* Section 12: Spoken Languages & Communication */}
        <LanguagesSection />

        {/* Section 13: Contact & Engagement */}
        <ContactSection />
      </main>

      {/* Minimal Engineering Footer */}
      <Footer />
    </div>
  );
}
