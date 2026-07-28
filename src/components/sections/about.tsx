'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Code2, Layers, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'Building production applications across the stack—React and TypeScript on the frontend, C# and .NET on the backend, SQL Server for data persistence.',
  },
  {
    icon: Layers,
    title: 'Enterprise Software',
    description:
      'Developing and validating features for enterprise platforms—migrating legacy systems to modern React, building admin dashboards, and shipping scalable .NET APIs.',
  },
  {
    icon: Zap,
    title: 'Automation & Quality',
    description:
      'Designing test strategies and building automation frameworks with Playwright to ensure software quality at scale across complex enterprise workflows.',
  },
  {
    icon: Users,
    title: 'Cross-functional Collaboration',
    description:
      'Working closely with frontend developers, backend engineers, product managers, and QA teams throughout the software development lifecycle.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="Engineering software that matters"
            description="I work at the intersection of software engineering and quality—building features, investigating production issues, and ensuring enterprise applications meet the highest standards."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="glass p-6 md:p-8 group hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 glass p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              At MAQ Software, I build enterprise software—from feature-rich Admin Dashboards with real-time controls, 
              to scalable .NET Core Web APIs using CQRS patterns. I&apos;ve migrated 15+ legacy ASP.NET pages to modern 
              React components, improving UI responsiveness by 40%. My work spans the full development lifecycle: 
              reviewing requirements, building React/TypeScript frontends, developing C#/.NET backends, and designing 
              comprehensive automation strategies. I approach every problem with an engineering mindset—understanding 
              not just <em>what</em> to build, but <em>why</em> architectural decisions matter at scale.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
