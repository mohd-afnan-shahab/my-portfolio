'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { GitBranch, Shield, Workflow, RefreshCw, Rocket, CheckCircle } from 'lucide-react';

const philosophies = [
  {
    icon: Shield,
    title: 'Quality as a First-Class Concern',
    description:
      'Software quality is not an afterthought—it is a design constraint. Every feature I work on considers testability, reliability, and maintainability from the start.',
  },
  {
    icon: Workflow,
    title: 'Systems Thinking',
    description:
      'Understanding how frontend components, APIs, databases, and infrastructure interact as a system. Debugging requires seeing the full picture, not just isolated parts.',
  },
  {
    icon: GitBranch,
    title: 'Iterative Improvement',
    description:
      'Ship incrementally. Validate assumptions early. Refactor with confidence. Good software is built through continuous improvement, not perfection on the first attempt.',
  },
  {
    icon: RefreshCw,
    title: 'Automation Over Repetition',
    description:
      'If a task is done more than twice, it deserves automation. From regression testing to deployment validation, automation compounds quality over time.',
  },
  {
    icon: Rocket,
    title: 'Ship with Confidence',
    description:
      'Production releases require rigor. Pre-release smoke testing, API validation, and comprehensive regression coverage ensure features reach users reliably.',
  },
  {
    icon: CheckCircle,
    title: 'Clear Communication',
    description:
      'Great engineering requires clear communication—whether writing bug reports with reproduction steps, documenting test strategies, or collaborating in sprint planning.',
  },
];

export function Philosophy() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            label="Philosophy"
            title="How I approach engineering"
            description="Principles that guide how I build, test, and ship software."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="glass p-6 h-full group hover-lift">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <item.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
