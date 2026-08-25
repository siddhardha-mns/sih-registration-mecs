"use client";

import Link from "next/link";
import Image from "next/image";
import devCatalystLogo from "../../public/assets/DevCatalyst_logo.png";

export default function SIHRegistration() {
  return (
    <div className="min-h-screen bg-[#0a0a14] flex flex-col relative overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/assets/Collage.png"
          alt="DevCatalyst Community Collage"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/60 via-[#0a0a14]/90 to-[#0a0a14]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a14]/80 backdrop-blur-md border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <Image
              src={devCatalystLogo}
              alt="DevCatalyst Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg">DevCatalyst</span>
          </Link>
          <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
SIH 2026 Registration
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex flex-col items-center relative z-10">
        {/* Hero */}
        <div
          className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Smart India Hackathon <span className="text-[#3b82f6]">2026</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Complete the SIH 2026 Internal Hackathon registration form with your details. Fill out every field carefully — your details matter!
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {[
              { icon: "🏆", label: "National Level Hackathon" },
              { icon: "👥", label: "Team of 6 Members" },
              { icon: "🎓", label: "Open to All UG Students" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full"
              >
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div
          className="w-full max-w-3xl mx-auto px-4 sm:px-6 pb-16"
        >
          <div className="h-[85vh] w-full rounded-2xl overflow-hidden bg-transparent">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSebHzD9Nrk33np4MjjTKOUAiE0FIb3571mr3dqneH9dlZlWeg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="w-full h-full block"
              title="DevCatalyst SIH 2026 Registration Form"
              style={{ 
                opacity: 0.95 
              }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a14] py-6 text-center text-gray-500 text-sm relative z-10">
        <p>
          © 2026 DevCatalyst Club · Built with ❤️ ·{" "}
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Home
          </Link>
        </p>
      </footer>
    </div>
  );
}
