import React from 'react';
import { PILLARS, IMAGES } from '../data/content';

export const FounderInMotion: React.FC = () => {
  return (
    <section id="experience" className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              FOUNDER IN MOTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            TWO WEEKS IN NEW YORK.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
            A lot can happen when you're in the room.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-[#0c0e12]/15 bg-[#fbf9f4] hover:bg-[#f4f2ec] transition-colors p-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f] block mb-2">
                  {pillar.number} · {pillar.category}
                </span>
                <h3 className="text-lg font-semibold tracking-[0.04em] text-[#0c0e12] uppercase mb-3">
                  {pillar.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                  {pillar.description}
                </p>
              </div>
              <div className="w-6 h-[1px] bg-[#0c0e12]/20" />
            </div>
          ))}
        </div>

        {/* Bottom Split Feature: Boardroom Image + Direct Evaluations Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0c0e12]/15 bg-[#fbf9f4]">
          {/* Left: Archival Plate II */}
          <div className="lg:col-span-7 bg-[#0c0e12] relative overflow-hidden flex flex-col justify-between">
            <img
              src={IMAGES.archivalPlate2}
              alt="Archival Plate II, 417 5th Ave Boardroom"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[420px] grayscale contrast-120 brightness-95 filter"
              loading="lazy"
            />
          </div>

          {/* Right: Private Working Environment Statement */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#fbf9f4]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00d2ff]" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#00677f] uppercase">
                  PRIVATE WORKING ENVIRONMENT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-[#0c0e12] leading-[1.2] tracking-[-0.02em] uppercase">
                NO STAGES. NO REHEARSED DEMO DAYS. DIRECT, HONEST EVALUATIONS.
              </h3>

              <p className="font-serif text-base text-[#45474b] leading-[1.7]">
                We reject the spectacle of crowded three-minute pitch competitions. Every interaction is designed around real business discussions with decision-makers who evaluate pricing, contracts, and unit economics.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0c0e12]/10 flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
                ARCHIVAL PLATE II · 417 5TH AVE
              </span>
              <span className="w-1.5 h-1.5 bg-[#00d2ff]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
