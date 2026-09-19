import React from 'react';

export const PhysicalAnchor: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
            PHYSICAL ANCHOR
          </span>
        </div>

        {/* 3-Column Architectural Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Headline & Permanent Anchor */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
                COME TO NEW YORK.
              </h2>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
                Build from here.
              </p>
            </div>

            <div className="pt-6 border-t border-[#0c0e12]/15">
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b] block mb-1">
                PERMANENT ANCHOR
              </span>
              <h3 className="text-sm font-semibold tracking-[0.06em] text-[#0c0e12] uppercase">
                TRANSATLANTIC INNOVATION HUB
              </h3>
              <p className="text-xs text-[#5e636e] tracking-[0.04em]">
                Midtown Manhattan
              </p>
            </div>
          </div>

          {/* Column 2: Body Narrative */}
          <div className="lg:col-span-4 space-y-4 font-serif text-base sm:text-lg text-[#23262b] leading-[1.7]">
            <p>
              The program operates directly from TIH at 417 5th Avenue. For two intensive weeks, founders establish working headquarters in Midtown, sit face-to-face across the table with enterprise customers, and compress years of remote cold outreach into concrete institutional handshakes.
            </p>
            <p>
              New York is not a commercial vacation. It is a demanding proving ground. Being physically rooted on 5th Avenue eliminates remote friction and embeds your venture inside the most liquid market in the world.
            </p>
          </div>

          {/* Column 3: Coordinates & Operational Facility Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#76777b] block">
                HEADQUARTERS COORDINATES
              </span>
              <p className="text-sm font-bold tracking-[0.08em] text-[#0c0e12] uppercase">
                417 5TH AVENUE
              </p>
              <p className="text-xs text-[#45474b] tracking-[0.04em] uppercase">
                MIDTOWN MANHATTAN
              </p>
              <p className="text-xs text-[#45474b] tracking-[0.04em] uppercase">
                NEW YORK, NY 10016
              </p>
            </div>

            {/* Cyan Border Facility Card */}
            <div className="border border-[#00d2ff] bg-[#f4f2ec] p-5 sm:p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#00677f]">
                  OPERATIONAL FACILITY
                </span>
                <span className="w-1.5 h-1.5 bg-[#00d2ff]" />
              </div>
              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.06em] text-[#0c0e12] leading-[1.5] uppercase">
                BOARDROOMS, EXECUTIVE SUITES, PRIVATE BREAKOUT ROOMS, AND HIGH-DENSITY CONVENING HALLS.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
