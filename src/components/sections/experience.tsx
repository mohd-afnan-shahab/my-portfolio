'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer I',
    company: 'MAQ Software',
    period: 'August 2025 – Present',
    location: 'Noida, Uttar Pradesh',
    responsibilities: [
      'Build and validate enterprise software features for platforms serving thousands of professionals',
      'Develop and maintain React/TypeScript components integrated with C#/.NET backend services',
      'Design and execute comprehensive test strategies covering UI, API, and end-to-end workflows',
      'Architect Playwright automation frameworks for regression, smoke, and integration testing',
      'Investigate production issues and perform root cause analysis across frontend and backend systems',
      'Collaborate with cross-functional teams through Agile sprint cycles and Jira-based workflows',
      'Validate REST API contracts and ensure frontend-backend consistency across releases',
      'Contribute to production release processes including pre-release validation and smoke testing',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'MAQ Software',
    period: 'January 2025 – July 2025',
    location: 'Noida, Uttar Pradesh',
    responsibilities: [
      'Gained hands-on experience in web development with HTML, CSS, JavaScript, React, TypeScript, and ASP.NET',
      'Built a feature-rich Admin Dashboard for managing AI summarization modules with real-time enable/disable controls',
      'Developed scalable .NET Core Web APIs using a custom CQRS pattern to handle high-throughput, enterprise-grade API traffic',
      'Migrated 15+ legacy web pages from ASP.NET and C# to modern React.js components, improving UI responsiveness by 40%',
      'Optimized cross-platform performance and enhanced overall user experience across enterprise applications',
      'Participated in sprint planning, backlog refinement, and feature requirement reviews',
      'Collaborated with backend developers on API testing using Postman and custom validation frameworks',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="Where I've shipped software"
            description="Building enterprise applications that solve real problems for real users."
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-[5px]">
                    <div className="w-full h-full rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                  </div>

                  <div className="glass p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400/60 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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
