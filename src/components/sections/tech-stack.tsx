'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';

const techCategories = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', level: 'primary' },
      { name: 'TypeScript', level: 'primary' },
      { name: 'JavaScript', level: 'primary' },
      { name: 'HTML', level: 'secondary' },
      { name: 'CSS', level: 'secondary' },
      { name: 'Next.js', level: 'secondary' },
      { name: 'Tailwind CSS', level: 'secondary' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'C#', level: 'primary' },
      { name: '.NET', level: 'primary' },
      { name: 'ASP.NET', level: 'primary' },
      { name: 'REST APIs', level: 'primary' },
      { name: 'SQL Server', level: 'primary' },
    ],
  },
  {
    label: 'Testing & Automation',
    techs: [
      { name: 'Playwright', level: 'primary' },
      { name: 'Tricentis Tosca', level: 'primary' },
      { name: 'Postman', level: 'primary' },
      { name: 'API Testing', level: 'secondary' },
      { name: 'E2E Testing', level: 'secondary' },
      { name: 'Regression Testing', level: 'secondary' },
      { name: 'Integration Testing', level: 'secondary' },
    ],
  },
  {
    label: 'Tools & DevOps',
    techs: [
      { name: 'Git', level: 'primary' },
      { name: 'Azure DevOps', level: 'primary' },
      { name: 'Jira', level: 'primary' },
      { name: 'VS Code', level: 'secondary' },
      { name: 'Visual Studio', level: 'secondary' },
      { name: 'qTest', level: 'secondary' },
    ],
  },
  {
    label: 'AI & Emerging',
    techs: [
      { name: 'LLMs', level: 'learning' },
      { name: 'OpenAI APIs', level: 'learning' },
      { name: 'RAG', level: 'learning' },
      { name: 'Prompt Engineering', level: 'learning' },
      { name: 'AI Agents', level: 'learning' },
      { name: 'Generative AI', level: 'learning' },
    ],
  },
];

export function TechStack() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Tech Stack"
            title="Technologies I work with"
            description="The tools and frameworks I use to build, test, and ship enterprise software."
          />
        </AnimatedSection>

        <div className="space-y-10">
          {techCategories.map((category, i) => (
            <AnimatedSection key={category.label} delay={i * 0.1}>
              <div className="glass p-6 md:p-8">
                <h3 className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-wider">
                  {category.label}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <StaggerItem key={tech.name}>
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                          tech.level === 'primary'
                            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20'
                            : tech.level === 'secondary'
                            ? 'bg-white/[0.04] text-foreground/80 border border-white/[0.06] hover:bg-white/[0.08]'
                            : 'bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20'
                        }`}
                      >
                        {tech.name}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
