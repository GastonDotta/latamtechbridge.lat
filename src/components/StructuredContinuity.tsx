import React from 'react';
import { ROADMAP_PHASES } from '../data/content';

export const StructuredContinuity: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              STRUCTURED CONTINUITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            TWO WEEKS IS THE START.
          </h2>
          <span className="text-3xl sm:text-5xl font-semibold text-[#00b8f5] leading-[1.08] tracking-[-0.03em] uppercase block mt-1">
            SIX MONTHS IS THE JOURNEY.
          </span>
          <p className="font-serif italic text-xl sm:text-2xl text-[#5e636e] mt-3">
            The work continues long after the return flight.
          </p>
        </div>

        {/* 4 Sequential Roadmap Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className={`p-6 flex flex-col justify-between space-y-6 relative border ${
                phase.isHighlight
                  ? 'border-[#00d2ff] bg-[#fbf9f4] ring-1 ring-[#00d2ff]'
                  : 'border-[#0c0e12]/15 bg-[#fbf9f4]'
              }`}
            >
              {/* Top Phase Header Bar */}
              <div>
                <div className="flex items-center justify-between border-b border-[#0c0e12]/10 pb-3 mb-4">
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#0c0e12]">
                    {phase.phase}
                  </span>
                  <span
                    className={`text-[10px] font-semibold tracking-[0.12em] px-2 py-0.5 uppercase ${
                      phase.isHighlight
                        ? 'bg-[#00d2ff] text-[#0c0e12]'
                        : 'bg-[#f0eee9] text-[#5e636e]'
                    }`}
                  >
                    {phase.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-3">
                  {phase.title}
                </h3>

                <p className="font-serif text-sm text-[#45474b] leading-[1.65]">
                  {phase.description}
                </p>
              </div>

              {/* Indicator Dot */}
              <div className="pt-4 border-t border-[#0c0e12]/10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#76777b]">
                  MILESTONE OBJECTIVE
                </span>
                <span
                  className={`w-2 h-2 ${
                    phase.isHighlight ? 'bg-[#00d2ff]' : 'bg-[#0c0e12]/30'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
