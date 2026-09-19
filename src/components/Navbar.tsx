import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf9f4]/95 backdrop-blur-xs border-b border-[#0c0e12]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-2.5 h-2.5 bg-[#00d2ff] inline-block transition-transform duration-200 group-hover:scale-125" />
          <span className="font-semibold tracking-[0.14em] text-xs sm:text-sm text-[#0c0e12] uppercase">
            SOUTHERN CONE TECH BRIDGE NYC
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#program" className="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] transition-colors uppercase">PROGRAM</a>
          <a href="#experience" className="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] transition-colors uppercase">EXPERIENCE</a>
          <a href="#network" className="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] transition-colors uppercase">NETWORK</a>
          <a href="#founders" className="text-xs font-semibold tracking-[0.14em] text-[#45474b] hover:text-[#0c0e12] transition-colors uppercase">FOUNDERS</a>
        </nav>

        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#0c0e12] text-white hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-all rounded-none"
          >
            <span>APPLY FOR NEXT COHORT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#0c0e12] hover:bg-[#f4f2ec]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden border-b border-[#0c0e12]/15 bg-[#fbf9f4] px-4 pt-3 pb-5 space-y-3">
          <a href="#program" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-xs font-semibold tracking-[0.14em] text-[#45474b] uppercase">PROGRAM</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-xs font-semibold tracking-[0.14em] text-[#45474b] uppercase">EXPERIENCE</a>
          <a href="#network" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-xs font-semibold tracking-[0.14em] text-[#45474b] uppercase">NETWORK</a>
          <a href="#founders" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-xs font-semibold tracking-[0.14em] text-[#45474b] uppercase">FOUNDERS</a>
          <div className="pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenApply(); }}
              className="w-full py-3 text-xs font-semibold tracking-[0.14em] uppercase bg-[#0c0e12] text-white rounded-none"
            >
              APPLY FOR NEXT COHORT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
