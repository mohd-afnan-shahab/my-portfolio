'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';

const timelineEvents = [
  {
    year: 'Aug 2025 – Present',
    icon: Briefcase,
    title: 'Software Engineer I',
    subtitle: 'MAQ Software · Noida',
    description: 'Building enterprise features, architecting Playwright automation, and contributing to full-stack development with React, TypeScript, C#, and .NET.',
  },
  {
    year: 'Jan 2025 – Jul 2025',
    icon: Briefcase,
    title: 'Associate Software Engineer',
    subtitle: 'MAQ Software · Noida',
    description: 'Built Admin Dashboards, migrated 15+ legacy pages to React, developed scalable .NET Core Web APIs with CQRS pattern, and improved UI responsiveness by 40%.',
  },
  {
    year: 'May 2025',
    icon: GraduationCap,
    title: 'B.Tech in Information Technology',
    subtitle: 'Manipal University Jaipur · CGPA: 8.11/10',
    description: 'Graduated with coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management, Operating Systems, and Web Development.',
  },
  {
    year: 'Jul 2021 – May 2025',
    icon: Code2,
    title: 'University & Learning',
    subtitle: 'Manipal University Jaipur · Jaipur, Rajasthan',
    description: 'Built projects, learned programming fundamentals, explored web development, and developed a passion for software engineering.',
  },
];

export function Timeline() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            label="Timeline"
            title="My journey so far"
            description="From university to enterprise software engineering."
          />
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/30 to-transparent" />

          <div className="space-y-10">
            {timelineEvents.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative pl-12 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-8 top-1.5 w-3 h-3 -translate-x-[5px]">
                    <div className="w-full h-full rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                  </div>

                  {/* Content */}
                  <div className="glass p-5 md:p-6">
                    <span className="text-sm font-mono text-indigo-400">{event.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{event.title}</h3>
                    <p className="text-sm text-violet-400 mb-2">{event.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
