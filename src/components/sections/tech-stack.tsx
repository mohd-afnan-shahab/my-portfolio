'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';

/*
  Design rationale:
  - Two proficiency tiers with meaningful color distinction:
    "daily" = tools used every day at work (solid indigo)
    "familiar" = tools used regularly but not daily (subtle outline)
  - No testing methodologies listed — only actual tools
  - AI section lists real technologies, not buzzwords
  - Categories ordered by what a recruiter cares about most:
    Languages → Frontend → Backend → Testing → DevOps → AI
  - 2-column grid on desktop for visual balance
  - Each category has a numbered index for subtle visual hierarchy
*/

const categories = [
  {
    title: 'Languages',
    index: '01',
    techs: [
      { name: 'TypeScript', tier: 'daily' },
      { name: 'JavaScript', tier: 'daily' },
      { name: 'C#', tier: 'daily' },
      { name: 'SQL', tier: 'daily' },
      { name: 'HTML', tier: 'familiar' },
      { name: 'CSS', tier: 'familiar' },
    ],
  },
  {
    title: 'Frontend',
    index: '02',
    techs: [
      { name: 'React', tier: 'daily' },
      { name: 'Next.js', tier: 'familiar' },
      { name: 'Tailwind CSS', tier: 'familiar' },
      { name: 'Framer Motion', tier: 'familiar' },
    ],
  },
  {
    title: 'Backend',
    index: '03',
    techs: [
      { name: '.NET', tier: 'daily' },
      { name: 'ASP.NET', tier: 'daily' },
      { name: 'REST APIs', tier: 'daily' },
      { name: 'SQL Server', tier: 'daily' },
    ],
  },
  {
    title: 'Testing',
    index: '04',
    techs: [
      { name: 'Playwright', tier: 'daily' },
      { name: 'Postman', tier: 'daily' },
      { name: 'Tricentis Tosca', tier: 'familiar' },
      { name: 'qTest', tier: 'familiar' },
    ],
  },
  {
    title: 'DevOps & Tools',
    index: '05',
    techs: [
      { name: 'Git', tier: 'daily' },
      { name: 'Azure DevOps', tier: 'daily' },
      { name: 'Jira', tier: 'daily' },
      { name: 'VS Code', tier: 'familiar' },
      { name: 'Visual Studio', tier: 'familiar' },
    ],
  },
  {
    title: 'AI & ML',
    index: '06',
    techs: [
      { name: 'OpenAI APIs', tier: 'familiar' },
      { name: 'LLMs', tier: 'familiar' },
      { name: 'RAG', tier: 'familiar' },
      { name: 'AI Agents', tier: 'familiar' },
      { name: 'Prompt Engineering', tier: 'familiar' },
    ],
  },
];

const pillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function TechStack() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.015] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Tech Stack"
            title="Tools of the trade"
            description="Technologies I use daily to build, test, and ship enterprise software."
          />
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection delay={0.05}>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Daily use</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Familiar</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.08}>
              <div className="glass p-6 md:p-8 h-full group hover:border-white/[0.08] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)] relative overflow-hidden">
                {/* Subtle index watermark */}
                <span className="absolute top-4 right-5 text-[3rem] font-bold text-white/[0.02] font-mono select-none leading-none">
                  {category.index}
                </span>

                <div className="relative">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono text-indigo-400/50 tabular-nums">
                      {category.index}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                      {category.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.techs.map((tech, j) => (
                      <motion.span
                        key={tech.name}
                        custom={j}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={pillVariants}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] font-medium cursor-default transition-all duration-200 hover:-translate-y-0.5 ${
                          tech.tier === 'daily'
                            ? 'bg-indigo-500/[0.08] text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/[0.15] hover:border-indigo-500/30 hover:shadow-[0_0_12px_rgba(99,102,241,0.12)]'
                            : 'bg-white/[0.03] text-foreground/70 border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] hover:text-foreground/90'
                        }`}
                      >
                        {tech.tier === 'daily' && (
                          <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        )}
                        {tech.name}
                      </motion.span>
                    ))}
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
