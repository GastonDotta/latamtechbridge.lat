import React from 'react';
import { TEAM, TEAM_MANDATES } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-[#00d2ff] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#5e636e] uppercase">
              STEWARDSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0c0e12] leading-[1.08] tracking-[-0.03em] uppercase">
            THE BRIDGE HAS OPERATORS.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#5e636e] mt-1">
            Not a remote program. People on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-serif text-base sm:text-lg text-[#23262b] leading-[1.7]">
              Southern Cone Tech Bridge NYC is run by operators who have built companies in the region and sat in Midtown rooms. The introductions hold because someone is already in New York — and remains accountable after the residency ends.
            </p>
            <div className="pt-4 border-t border-[#0c0e12]/15">
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-1">
                OPERATING CORRIDOR
              </span>
              <p className="text-sm font-semibold tracking-[0.06em] text-[#0c0e12] uppercase">
                MONTEVIDEO · BUENOS AIRES · SANTIAGO · NEW YORK
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#0c0e12]/15 border-t border-b border-[#0c0e12]/15">
            {TEAM.map((member) => (
              <div key={member.number} className="py-8 first:pt-5 last:pb-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f] block">
                      {member.number} · {member.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#0c0e12] uppercase">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
                      {member.location}
                    </p>
                  </div>
                  <span className="w-2 h-2 bg-[#00d2ff] shrink-0 mt-2" />
                </div>
                <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.7] max-w-xl">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MANDATES.map((mandate) => (
            <div
              key={mandate.number}
              className="border border-[#0c0e12]/15 bg-[#f4f2ec] p-8 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-2">
                  MANDATE {mandate.number}
                </span>
                <h3 className="text-lg font-bold tracking-[0.06em] text-[#0c0e12] uppercase mb-4">
                  {mandate.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-[#45474b] leading-[1.65]">
                  {mandate.description}
                </p>
              </div>
              <div className="w-6 h-[1px] bg-[#0c0e12]/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
