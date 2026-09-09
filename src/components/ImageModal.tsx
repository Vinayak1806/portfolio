"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ZoomIn } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  liveUrl?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  liveUrl,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl border border-[#E4E4E7] shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-3 border-b border-[#E4E4E7] bg-[#FAFAF8] flex items-center justify-between">
          <div className="flex items-center gap-3 truncate">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="truncate">
              <h4 className="font-sans text-sm font-bold text-[#09090B] truncate">
                {title} — High Resolution Screenshot
              </h4>
              {subtitle && (
                <p className="font-mono text-[11px] text-[#71717A] truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#09090B] text-white text-xs font-mono hover:bg-[#27272A] transition-colors"
              >
                <span>Launch Live</span>
                <ExternalLink className="w-3 h-3 text-blue-400" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-[#71717A] hover:text-[#09090B] hover:bg-white rounded border border-[#E4E4E7] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Full Image Container */}
        <div className="flex-1 overflow-auto bg-[#18181B] flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-[#FAFAF8] border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#71717A]">
          <span>Actual Application User Interface</span>
          <span className="text-[#A1A1AA]">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}
