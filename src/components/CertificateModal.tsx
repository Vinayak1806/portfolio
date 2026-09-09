"use client";

import React from "react";
import { X, ExternalLink, Download, FileText } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  issuer?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
  issuer,
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-lg border border-[#E4E4E7] shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-[#E4E4E7] bg-[#FAFAF8] flex items-center justify-between">
          <div className="flex items-center gap-2.5 truncate">
            <FileText className="w-4 h-4 text-[#2563EB] shrink-0" />
            <div className="truncate">
              <h4 className="font-sans text-sm font-bold text-[#09090B] truncate">
                {title}
              </h4>
              {issuer && (
                <p className="font-mono text-[11px] text-[#71717A] truncate">
                  Issued by: {issuer}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#52525B] hover:text-[#09090B] hover:bg-white rounded border border-[#E4E4E7] text-xs font-mono flex items-center gap-1 transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>
            <a
              href={pdfUrl}
              download
              className="p-1.5 text-[#52525B] hover:text-[#09090B] hover:bg-white rounded border border-[#E4E4E7] text-xs font-mono flex items-center gap-1 transition-colors"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#71717A] hover:text-[#09090B] hover:bg-white rounded border border-[#E4E4E7] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Embed */}
        <div className="flex-1 w-full bg-[#525659] relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title={title}
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 bg-[#FAFAF8] border-t border-[#E4E4E7] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
          <span>Verified Academic & Professional Credential</span>
          <button
            onClick={onClose}
            className="text-[#2563EB] hover:underline font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
