"use client";

import { ReactNode } from "react";

interface HeroProps {
  eyebrow?: ReactNode;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  cta2Label?: string;
  cta2Href?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
  cta2Label,
  cta2Href,
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
        className="animate-fade-in -translate-y-4 text-balance 
        text-black py-4 sm:py-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-none tracking-tighter 
        opacity-0"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-8 sm:mb-12 -translate-y-4 text-balance 
        text-base sm:text-lg tracking-tight text-gray-800 
        opacity-0 md:text-xl"
      >
        {subtitle}
      </p>

      {/* CTA Buttons */}
      {(ctaLabel || cta2Label) && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[-20px]">
          {ctaLabel && (
            <a
              href={ctaHref}
              className="relative w-fit min-w-[260px] z-20 font-bold text-center text-lg md:text-xl 
              rounded-full bg-black/85 dark:bg-black/60 text-white dark:text-white backdrop-blur-xl border border-white/20 
              shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_80px_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.5)]
              hover:bg-zinc-900 dark:hover:bg-zinc-900/80 hover:border-white/30 transition-all duration-300 py-4 px-10
              inline-flex items-center justify-center select-none active:scale-[0.98] cursor-pointer"
            >
              <div className="absolute inset-x-4 top-[1px] h-[35%] rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {ctaLabel}
              </span>
            </a>
          )}
          {cta2Label && (
            <a
              href={cta2Href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-fit min-w-[260px] z-20 font-bold text-center text-lg md:text-xl 
              rounded-full bg-[#25D366] text-white backdrop-blur-xl border border-[#20bd5a]/30 
              shadow-[0_0_40px_rgba(37,211,102,0.4),0_0_80px_rgba(37,211,102,0.2)]
              hover:bg-[#20bd5a] hover:border-[#1ebe5d]/50 transition-all duration-300 py-4 px-10
              inline-flex items-center justify-center gap-2 select-none active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">{cta2Label}</span>
            </a>
          )}
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
