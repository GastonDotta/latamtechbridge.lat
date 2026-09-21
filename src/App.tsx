import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategicPerspective } from './components/StrategicPerspective';
import { PhysicalAnchor } from './components/PhysicalAnchor';
import { FounderInMotion } from './components/FounderInMotion';
import { IncorporationSection } from './components/IncorporationSection';
import { SelectivityCohort } from './components/SelectivityCohort';
import { EcosystemArchitecture } from './components/EcosystemArchitecture';
import { TeamSection } from './components/TeamSection';
import { StructuredContinuity } from './components/StructuredContinuity';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-[#1b1c19] flex flex-col font-sans selection:bg-[#00d2ff] selection:text-[#0c0e12]">
      <Navbar
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      <main className="flex-1 w-full">
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />
        <StrategicPerspective />
        <PhysicalAnchor />
        <FounderInMotion />
        <IncorporationSection />
        <SelectivityCohort />
        <EcosystemArchitecture />
        <TeamSection />
        <StructuredContinuity />
        <CtaSection
          onOpenApply={() => setIsApplyModalOpen(true)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
      </main>

      <Footer />

      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
