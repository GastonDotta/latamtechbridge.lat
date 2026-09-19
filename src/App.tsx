import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategicPerspective } from './components/StrategicPerspective';
import { PhysicalAnchor } from './components/PhysicalAnchor';
import { FounderInMotion } from './components/FounderInMotion';
import { IncorporationSection } from './components/IncorporationSection';
import { SelectivityCohort } from './components/SelectivityCohort';
import { EcosystemArchitecture } from './components/EcosystemArchitecture';
import { StructuredContinuity } from './components/StructuredContinuity';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ContactModal } from './components/ContactModal';
import { HtmlExportModal } from './components/HtmlExportModal';
import { Code } from 'lucide-react';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#0c0e12]">
      {/* Top Navigation */}
      <Navbar
        onOpenApply={() => setIsApplyModalOpen(true)}
        onOpenHtmlExport={() => setIsHtmlModalOpen(true)}
      />

      {/* Main Page Flow matching Design System */}
      <main className="flex-1 w-full">
        {/* Hero with Plate I */}
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* Strategic Perspective with Plate II */}
        <StrategicPerspective />

        {/* Physical Anchor 417 5th Ave */}
        <PhysicalAnchor />

        {/* Founder In Motion (4 Pillars + Archival Plate) */}
        <FounderInMotion />

        {/* Incorporation Infrastructure */}
        <IncorporationSection />

        {/* Selectivity & Cohort 8 Limit */}
        <SelectivityCohort />

        {/* Ecosystem Architecture (TIH, ERA, Colectivo, Uruguay Embassy) */}
        <EcosystemArchitecture />

        {/* Structured Continuity Roadmap */}
        <StructuredContinuity />

        {/* Final CTA with Manhattan Streetscape */}
        <CtaSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <HtmlExportModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />

      {/* Floating Quick Action Button for Instant HTML Export */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsHtmlModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0c0e12] text-white hover:bg-[#00d2ff] hover:text-[#0c0e12] text-xs font-semibold tracking-wider uppercase shadow-xl transition-all border border-[#0c0e12] rounded-none cursor-pointer group"
          title="Ver o descargar el código HTML puro"
        >
          <Code className="w-4 h-4 text-[#00d2ff] group-hover:text-[#0c0e12]" />
          <span>DESCARGAR / COPIAR HTML</span>
        </button>
      </div>
    </div>
  );
}

export default App;
