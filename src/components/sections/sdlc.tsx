'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { FileSearch, Code2, TestTube, Rocket, RefreshCw, CheckCircle } from 'lucide-react';

const phases = [
  {
    icon: FileSearch,
    phase: '01',
    title: 'Requirements & Planning',
    description: 'Review specifications, participate in sprint planning, break down features into actionable tasks, and identify edge cases before writing code.',
  },
  {
    icon: Code2,
    phase: '02',
    title: 'Development & Implementation',
    description: 'Build features with clean architecture—React components on the frontend, C#/.NET services on the backend, with SQL Server for persistence.',
  },
  {
    icon: TestTube,
    phase: '03',
    title: 'Testing & Validation',
    description: 'Design test strategies, write automation with Playwright, validate API contracts, and ensure features work correctly across the entire system.',
  },
  {
    icon: RefreshCw,
    phase: '04',
    title: 'Code Review & Iteration',
    description: 'Collaborate on pull requests, address feedback, refactor for clarity, and ensure code meets team standards before merging.',
  },
  {
    icon: Rocket,
    phase: '05',
    title: 'Release & Deployment',
    description: 'Execute pre-release smoke tests, validate critical paths, and monitor deployments to ensure features reach users reliably.',
  },
  {
    icon: CheckCircle,
    phase: '06',
    title: 'Monitoring & Improvement',
    description: 'Investigate production issues, perform root cause analysis, and continuously improve automation coverage and software quality.',
  },
];

export function SDLC() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Process"
            title="How I ship software"
            description="From requirement to production—my approach to the software development lifecycle."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((item, i) => (
            <AnimatedSection key={item.phase} delay={i * 0.08}>
              <div className="glass p-6 h-full group hover-lift relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl font-bold text-white/[0.03] font-mono">
                  {item.phase}
                </div>
                <div className="relative">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-indigo-400/60">Phase {item.phase}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
