import React from 'react';
import { TEAM, TEAM_MANDATES } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="w-full bg-[#fbf9f4] border-b border-[#0c0e12]/15 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
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

        {/* Texto Introductorio y Corredor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#0c0e12]/15 pb-12">
          <div className="lg:col-span-8">
            <p className="font-serif text-base sm:text-lg text-[#23262b] leading-[1.7]">
              Southern Cone Tech Bridge NYC is run by operators who have built companies in the region and sat in Midtown rooms. The introductions hold because someone is already in New York — and remains accountable after the residency ends.
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-[#0c0e12]/15 lg:pl-8">
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#76777b] block mb-1">
              OPERATING CORRIDOR
            </span>
            <p className="text-sm font-semibold tracking-[0.06em] text-[#0c0e12] uppercase">
              MONTEVIDEO · BUENOS AIRES · SANTIAGO · NEW YORK
            </p>
          </div>
        </div>

        {/* Grid de Miembros del Equipo (Centrado para 2 personas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto w-full">
          {TEAM.map((member) => (
            <div key={member.number || member.name} className="flex flex-col space-y-4 group">
              {/* Foto del Miembro */}
              <div className="relative aspect-[4/5] bg-[#f4f2ec] border border-[#0c0e12]/15 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 border border-black/5 pointer-events-none" />
              </div>

              {/* Información del Miembro */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#00677f]">
                    {member.number} · {member.role}
                  </span>

                  {/* LinkedIn dinámico por miembro */}
                  <a
                    href={member.linkedin || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0c0e12]/60 hover:text-[#00677f] transition-colors p-1"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#0c0e12] uppercase">
                  {member.name}
                </h3>

                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777b]">
                  {member.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatos */}
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
