import React from 'react';

export const IncorporationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              INCORPORATION INFRASTRUCTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            YOUR U.S. PRESENCE STARTS HERE.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
            From regional market traction to an operational Delaware C-Corp entity.
          </p>
        </div>

        {/* 3 Sequential Evolution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-2">
                ORIGIN POINT
              </span>
              <h3 className="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">
                HOME MARKET
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                Proven product-market fit, enterprise traction, and validated revenue across South America.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#76777b]">
              <span>TIER-1 LATAM TRACTION</span>
              <span>01</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6 relative">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f] block mb-2">
                CORPORATE VEHICLE
              </span>
              <h3 className="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">
                DELAWARE C-CORP
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                U.S. tax structuring, corporate banking, clean cap table, and legal entity formed during residency.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#00677f]">
              <span>RESIDENCY FORMATION</span>
              <span>02</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-2">
                EXPANSION MANDATE
              </span>
              <h3 className="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">
                U.S. ENTERPRISE MARKET
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                Direct dollar invoicing, domestic customer contracts, and American venture syndication.
              </p>
            </div>
            <div className="pt-4 border-t border-[#0c0e12]/10 flex justify-between items-center text-[10px] uppercase font-semibold text-[#76777b]">
              <span>SCALE ACCELERATION</span>
              <span>03</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
