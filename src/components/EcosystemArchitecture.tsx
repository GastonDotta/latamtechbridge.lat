import React from 'react';
import { ECOSYSTEM_PARTNERS } from '../data/content';

export const EcosystemArchitecture: React.FC = () => {
  return (
    <section id="network" className="w-full bg-[#0c0e12] text-white border-b border-[#0c0e12] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#00d2ff] uppercase">
            ECOSYSTEM ARCHITECTURE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold text-white leading-[1.08] tracking-[-0.03em] uppercase">
              YOU DON'T BUILD YOUR U.S. NETWORK FROM ZERO.
            </h2>
            <p className="font-serif text-base sm:text-lg text-[#dbdad5] leading-[1.7]">
              The bridge is backed by a permanent coalition of physical infrastructure, proven New York accelerators, the premier Latino executive network, and diplomatic chambers.
            </p>
          </div>

          {/* Right Column: Institutional Partners List */}
          <div className="lg:col-span-7 divide-y divide-white/15 border-t border-b border-white/15">
            {ECOSYSTEM_PARTNERS.map((partner) => (
              <div key={partner.name} className="py-7 first:pt-4 last:pb-4 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-semibold tracking-[0.06em] text-white uppercase">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00d2ff] shrink-0">
                    {partner.role}
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#c6c6cb] leading-[1.65]">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
