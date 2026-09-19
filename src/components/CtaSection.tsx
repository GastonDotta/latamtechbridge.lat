import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface CtaSectionProps {
  onOpenApply: () => void;
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenApply, onOpenContact }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c0e12] text-white py-24 sm:py-32">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ctaBg}
          alt="Manhattan street view at dusk"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-[#0c0e12]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Tag */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
            NEXT COHORT SELECTION
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.035em] uppercase text-white">
            READY TO BUILD IN THE U.S.?
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#dbdad5]">
            Bring the company you've built. Come to New York. See what happens next.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0c0e12] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] transition-colors rounded-none cursor-pointer"
          >
            <span>APPLY FOR THE NEXT COHORT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/40 text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-white hover:text-[#0c0e12] hover:border-white transition-colors rounded-none cursor-pointer"
          >
            TALK TO THE TEAM
          </button>
        </div>

        {/* Caption */}
        <div className="pt-6 border-t border-white/15 text-[11px] font-medium tracking-[0.1em] text-[#a0a3aa] uppercase">
          APPLICATIONS REVIEWED ON A ROLLING BASIS · STRICT CAP OF 8 COMPANIES
        </div>

      </div>
    </section>
  );
};
