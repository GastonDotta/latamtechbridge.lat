import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#fbf9f4] border-t border-[#0c0e12]/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Charter */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00d2ff]" />
              <span className="font-semibold tracking-[0.14em] text-xs text-[#0c0e12] uppercase">
                SOUTHERN CONE TECH BRIDGE NYC
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#76777b]">
              Montevideo · Buenos Aires · Santiago · New York
            </p>
            <p className="font-serif text-sm text-[#45474b] leading-[1.65] max-w-sm pt-2">
              An institutional framework connecting Tier-1 technological leadership from South America's Southern Cone to New York capital markets and venture infrastructure.
            </p>
          </div>

          {/* Col 2: Manhattan HQ */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0c0e12]">
              MANHATTAN HEADQUARTERS
            </h4>
            <div className="font-serif text-sm text-[#45474b] leading-[1.6]">
              <p>417 5th Avenue</p>
              <p>Midtown Manhattan</p>
              <p>New York, NY 10016</p>
            </div>
          </div>

          {/* Col 3: Institutional Governance */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0c0e12]">
              INSTITUTIONAL GOVERNANCE
            </h4>
            <p className="font-serif text-sm text-[#45474b] leading-[1.65]">
              Convened with the cooperation of regional bilateral chambers, research foundations, and metropolitan venture partner councils across the Americas.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0c0e12]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
          <div>
            © 2025 SOUTHERN CONE TECH BRIDGE NYC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[#0c0e12]">
            <span>URUGUAY</span>
            <span>·</span>
            <span>ARGENTINA</span>
            <span>·</span>
            <span>CHILE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
