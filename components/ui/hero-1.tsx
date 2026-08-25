"use client";

import { ReactNode } from "react";

interface HeroProps {
  eyebrow?: ReactNode;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-32 px-6 text-center md:px-8 
      min-h-dvh overflow-hidden 
      bg-[linear-gradient(to_bottom,#e6e6fa,#ffd1dc_50%,#ffffff_100%)]  
      dark:bg-[linear-gradient(to_bottom,#e6e6fa,#ffd1dc_50%,#ffffff_100%)] 
      rounded-b-xl snap-start"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent (Globe) */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[700px] w-[900px] md:h-[700px] md:w-[1400px] lg:h-[900px] lg:w-[160%] 
        -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-white dark:bg-black 
        bg-[radial-gradient(closest-side,#fff_82%,#000000)] 
        dark:bg-[radial-gradient(closest-side,#000_82%,#ffffff)] 
        animate-fade-up"
      />

      {/* Eyebrow */}
      {eyebrow && (
        <div className="flex justify-center mb-6">
          {eyebrow}
        </div>
      )}

      {/* Title */}
      <h1
        className="text-balance 
        text-black py-6 text-5xl font-semibold leading-none tracking-tighter 
        sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="mb-12 text-balance 
        text-lg tracking-tight text-gray-800 
        md:text-xl"
      >
        {subtitle}
      </p>

      {/* CTA Button */}
      {ctaLabel && (
        <div className="flex justify-center">
          <a
            href={ctaHref}
            className="mt-[-20px] relative w-fit min-w-[300px] md:min-w-[400px] z-20 font-bold text-center text-lg md:text-xl 
            rounded-full bg-black/85 dark:bg-black/60 text-white dark:text-white backdrop-blur-xl border border-white/20 
            shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_80px_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.5)]
            hover:bg-zinc-900 dark:hover:bg-zinc-900/80 hover:border-white/30 transition-all duration-300 py-4 px-10
            inline-flex items-center justify-center select-none active:scale-[0.98] cursor-pointer"
          >
            {/* Glossy top shine */}
            <div className="absolute inset-x-4 top-[1px] h-[35%] rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {ctaLabel}
            </span>
          </a>
        </div>
      )}

      {/* Bottom Fade */}
      <div
        className="relative mt-32 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
      />
    </section>
  );
}
