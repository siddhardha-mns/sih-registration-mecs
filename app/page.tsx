"use client";

import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/ui/hero-1";
import DynamicIslandNav from "./components/DynamicIslandNav";
import devCatalystLogo from "../public/assets/DevCatalyst_logo.png";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "join", label: "Register" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <DynamicIslandNav sections={NAV_SECTIONS} />
      
      {/* Hero Section */}
      <Hero
        eyebrow={
          <div className="flex items-center gap-5 sm:gap-7 select-none">
            <Image
              src={devCatalystLogo}
              alt="DevCatalyst Logo"
              className="h-20 sm:h-28 md:h-36 w-auto grayscale brightness-0"
            />
            <span className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black">
              DevCatalyst
            </span>
          </div>
        }
        title="Learn. Build. Grow. Together."
        subtitle="DevCatalyst is a vibrant community of developers and creators who build, learn, and grow together. Team up with us for SIH 2026."
        ctaLabel="Register for SIH 2026"
        ctaHref="/sih"
        cta2Label="Join Participants Group"
        cta2Href="https://chat.whatsapp.com/FSacsjMdKR35t9MJpkXLQL?s=sh&p=i&mlu=4"
      />

      {/* About / Video Section */}
      <section id="about" className="relative w-full min-h-dvh snap-start flex flex-col items-center justify-center overflow-hidden py-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/assets/Induction/DC_Inductn_Intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Glossy overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
          <div className="absolute inset-0 backdrop-brightness-110 backdrop-saturate-125"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="bg-black/50 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(244,244,244,0.3),0_0_80px_rgba(244,244,244,0.15)] border border-white/20 p-6 sm:p-12 text-center"
          >
            <h2
              className="text-3xl sm:text-5xl font-semibold text-white mb-4"
            >
              About DevCatalyst
            </h2>
            <p
              className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Learn and build through technical sessions, workshops, and projects. Connect with developers and creators, collaborate on ideas, and grow alongside a community of builders. Participate in hackathons and gain practical experience while solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* SIH Registration CTA Section */}
      <section id="join" className="relative w-full min-h-dvh snap-start flex flex-col items-center justify-center overflow-hidden py-16">
        {/* Collage Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/assets/Collage.png"
            alt="DevCatalyst Community Collage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div>
            {/* SIH Badge */}
            <div
              className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Smart India Hackathon 2026
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Register for <span className="text-[#3b82f6]">SIH</span> with DevCatalyst
            </h2>

            <p
              className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              DevCatalyst is coordinating the Internal Hackathon for Smart India Hackathon 2026. Complete the registration to get started.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/sih"
                id="sih-register-btn"
                className="group relative inline-flex overflow-hidden items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-500 text-white font-bold px-12 py-5 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 ease-out hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] hover:scale-105 text-lg md:text-xl"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-60" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="relative z-10">Register Now</span>
              </Link>
              <a
                href="https://chat.whatsapp.com/FSacsjMdKR35t9MJpkXLQL?s=sh&p=i&mlu=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex overflow-hidden items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-12 py-5 rounded-xl shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-all duration-300 ease-out hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:scale-105 text-lg md:text-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">Join Participants Group</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
