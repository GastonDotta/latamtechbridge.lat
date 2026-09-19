import React from 'react';

export const SelectivityCohort: React.FC = () => {
  return (
    <section id="founders" className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Thesis & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
                YOU'VE BUILT THE COMPANY.
              </h2>
              <span className="text-3xl sm:text-5xl font-semibold text-[#00b8f5] leading-[1.08] tracking-[-0.03em] uppercase block mt-1">
                NOW BUILD THE NEXT MARKET.
              </span>
            </div>

            <p className="font-serif text-base sm:text-lg text-[#23262b] leading-[1.7] max-w-2xl">
              We do not accept raw prototypes or speculative pitches. Southern Cone Tech Bridge NYC is engineered specifically for growth-stage technology ventures with documented revenue, proven product-market fit in South America, and an unmistakable strategic reason to operate in the United States.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#0c0e12]/15">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b]">
                  SELECTIVITY
                </span>
                <p className="text-sm font-bold tracking-[0.06em] text-[#0c0e12] uppercase">
                  STRICT CAP OF 8 STARTUPS
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b]">
                  ECONOMIC MODEL
                </span>
                <p className="text-sm font-bold tracking-[0.06em] text-[#0c0e12] uppercase">
                  1% ENDOWMENT STAKE · NO FEES
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Monolithic 8 Startups Block */}
          <div className="lg:col-span-5">
            <div className="bg-[#0c0e12] text-white p-10 sm:p-14 border border-[#0c0e12] flex flex-col justify-center items-center text-center space-y-4">
              <div className="text-8xl sm:text-9xl font-bold text-[#00d2ff] leading-none tracking-tight">
                8
              </div>
              <h3 className="text-sm sm:text-base font-semibold tracking-[0.16em] uppercase text-white">
                STARTUPS PER COHORT
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#dbdad5] leading-[1.6] max-w-xs">
                An intimate room of vetted peers. Two weeks of total immersion, followed by half a year of active execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
