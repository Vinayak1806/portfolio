import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinayak Pawate | Full-Stack Developer",
  description:
    "Portfolio of Vinayak Pawate — Full-Stack Developer and Computer Engineering student building web applications, backend systems, data-driven products and AI-powered applications.",
  keywords: [
    "Vinayak Pawate",
    "Full-Stack Developer",
    "Software Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Data Analytics",
    "Python",
    "Power BI",
    "Admission Compass",
    "Hostel Hub",
    "ArguAI",
    "Sinhgad Academy of Engineering",
  ],
  authors: [{ name: "Vinayak Pawate", url: "https://github.com/Vinayak1806" }],
  creator: "Vinayak Pawate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinayakpawate.dev",
    title: "Vinayak Pawate | Full-Stack Developer",
    description:
      "Portfolio of Vinayak Pawate — Full-Stack Developer and Computer Engineering student building web applications, backend systems, data-driven products and AI-powered applications.",
    siteName: "Vinayak Pawate Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Pawate | Full-Stack Developer",
    description:
      "Portfolio of Vinayak Pawate — Full-Stack Developer and Computer Engineering student building web applications, backend systems, data-driven products and AI-powered applications.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-[#09090B]">
        {children}
      </body>
    </html>
  );
}
