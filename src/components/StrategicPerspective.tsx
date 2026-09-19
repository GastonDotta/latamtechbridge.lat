import React from 'react';
import { IMAGES } from '../data/content';

export const StrategicPerspective: React.FC = () => {
  return (
    <section id="program" className="w-full bg-[#0c0e12] text-[#fbf9f4] border-b border-[#0c0e12] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
              STRATEGIC PERSPECTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] uppercase text-white">
                THE U.S. MARKET ISN'T FAR AWAY.
              </h2>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#00d2ff] mt-2">
                Getting in is the hard part.
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="font-serif text-base sm:text-lg text-[#dbdad5] leading-[1.7]">
                Your product may already work. Your revenue may already be growing. But breaking into the United States requires unyielding presence, vetted executive introductions, Delaware legal integration, and immediate credibility on the ground.
              </p>
            </div>
          </div>
        </div>

        {/* Wide Monochrome Photographic Plate II */}
        <div className="border border-white/15 bg-black">
          <div className="relative overflow-hidden aspect-[16/7] sm:aspect-[21/9]">
            <img
              src={IMAGES.plate2}
              alt="Commercial Strategy Session, Manhattan"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 filter"
              loading="lazy"
            />
          </div>
          <div className="bg-[#14171d] px-4 sm:px-6 py-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#c6c6cb]">
              PLATE II — COMMERCIAL STRATEGY SESSION · MANHATTAN
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.12em] text-[#76777b] uppercase hidden sm:inline">
                NEUEHOUSE MADISON SQUARE
              </span>
              <span className="w-1.5 h-1.5 bg-[#00d2ff]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
