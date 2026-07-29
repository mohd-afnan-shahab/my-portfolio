'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Rocket, Brain, Code2, MapPin, Briefcase, Bot } from 'lucide-react';

const aboutCards = [
  {
    icon: Code2,
    title: 'Software Engineer',
    text: 'I build enterprise applications at MAQ Software using React, TypeScript, C#, and .NET. Promoted from Associate Software Engineer to Software Engineer I within my first year.',
  },
  {
    icon: Brain,
    title: 'Building with AI',
    text: 'I\'m exploring how AI can make software more capable, useful, and intuitive — from LLMs and agentic systems to building real applications with OpenAI APIs.',
  },
  {
    icon: Rocket,
    title: 'How I Work',
    text: 'I enjoy solving real engineering problems — from modernizing legacy systems to building reliable automation. I care about software that performs in production, not just in theory.',
  },
];

const chips = [
  { icon: MapPin, text: 'India' },
  { icon: Briefcase, text: 'MAQ Software' },
  { icon: Bot, text: 'AI Enthusiast' },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="Beyond the Resume"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {aboutCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.12}>
              <div className="glass p-6 md:p-8 h-full group hover-lift hover:border-indigo-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-4 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all duration-300">
                  <card.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="glass p-6 md:p-8 max-w-3xl border-l-2 border-indigo-500/40 mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg italic">
              &ldquo;Build with curiosity. Ship with confidence.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-muted-foreground"
              >
                <chip.icon size={14} className="text-indigo-400" />
                {chip.text}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
