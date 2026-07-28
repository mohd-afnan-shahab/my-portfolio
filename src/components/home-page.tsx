'use client';

import { LoadingScreen } from '@/components/ui/loading-screen';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { TechStack } from '@/components/sections/tech-stack';
import { Philosophy } from '@/components/sections/philosophy';
import { SDLC } from '@/components/sections/sdlc';
import { Projects } from '@/components/sections/projects';
import { AISection } from '@/components/sections/ai-section';
import { Skills } from '@/components/sections/skills';
import { Timeline } from '@/components/sections/timeline';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <div className="glow-line" />
        <About />
        <div className="glow-line" />
        <Experience />
        <div className="glow-line" />
        <TechStack />
        <div className="glow-line" />
        <Philosophy />
        <div className="glow-line" />
        <SDLC />
        <div className="glow-line" />
        <Projects />
        <div className="glow-line" />
        <AISection />
        <div className="glow-line" />
        <Skills />
        <div className="glow-line" />
        <Timeline />
        <div className="glow-line" />
        <Achievements />
        <div className="glow-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
