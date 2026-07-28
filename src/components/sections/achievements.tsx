'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Trophy, Target, Zap, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Enterprise Impact',
    description: 'Contributed to software used by thousands of legal professionals, where reliability directly impacts business outcomes.',
  },
  {
    icon: Target,
    title: 'Zero Critical Defects',
    description: 'Maintained rigorous quality standards across production releases through comprehensive pre-release validation and automation.',
  },
  {
    icon: Zap,
    title: 'Automation at Scale',
    description: 'Built Playwright automation frameworks that significantly reduced manual regression testing time while increasing coverage.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Growth',
    description: 'Progressed from Associate to Software Engineer I within the first year, taking on increasingly complex responsibilities across the full stack.',
  },
];

export function Achievements() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            label="Achievements"
            title="Impact & growth"
            description="Measurable contributions to enterprise software quality and team velocity."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="glass p-6 md:p-8 group hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-400 group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
