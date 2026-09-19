import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full border-b border-[#0c0e12]/15 bg-[#fbf9f4] pt-12 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
                COHORT RESIDENCY · NEW YORK EDITION
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold text-[#0c0e12] leading-[1.05] tracking-[-0.035em] uppercase">
              YOUR BRIDGE TO THE{' '}
              <span className="text-[#00d2ff]">U.S.</span> MARKET.
            </h1>

            {/* Editorial Serif Subtitle */}
            <p className="font-serif text-xl sm:text-2xl text-[#23262b] leading-[1.6] max-w-xl">
              A 2-week NYC residency and structured follow-through for ambitious startups ready to build in the United States.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none cursor-pointer"
              >
                <span>APPLY FOR THE NEXT COHORT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-[#0c0e12] text-[#0c0e12] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#f4f2ec] hover:border-[#00d2ff] transition-colors rounded-none"
              >
                HOW IT WORKS
              </a>
            </div>

            {/* Cohort Parameters Ledger */}
            <div className="pt-6 border-t border-[#0c0e12]/10 flex items-center gap-2 text-[11px] sm:text-xs font-medium tracking-[0.08em] text-[#5e636e] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] inline-block shrink-0" />
              <span>8 STARTUPS PER COHORT · 2 WEEKS IN NYC · 6 MONTHS STRUCTURED FOLLOW-THROUGH</span>
            </div>
          </div>

          {/* Right Column - Photographic Plate I */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative border border-[#0c0e12]/20 bg-[#0c0e12]">
              <img
                src={IMAGES.plate1}
                alt="Founder Workspace, Midtown Manhattan"
                className="w-full aspect-[4/3] object-cover grayscale contrast-110 brightness-95 filter"
                loading="eager"
              />
              <div className="w-full bg-[#0c0e12] px-4 py-2.5 text-left flex items-center justify-between border-t border-[#0c0e12]/40">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#eae8e3]">
                  PLATE I — FOUNDER WORKSPACE · MIDTOWN MANHATTAN
                </span>
                <span className="w-1.5 h-1.5 bg-[#00d2ff]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
