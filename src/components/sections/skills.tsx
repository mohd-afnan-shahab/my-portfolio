'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  FileCode,
  Server,
  Database,
  TestTube,
  GitBranch,
  Brain,
  Wrench,
  Users,
} from 'lucide-react';

const skillCategories = [
  {
    icon: FileCode,
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: FileCode,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Component Architecture', 'Responsive Design'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['C#', '.NET', 'ASP.NET', 'REST APIs', 'API Design', 'Authentication'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['SQL Server', 'Query Optimization', 'Data Modeling', 'Stored Procedures'],
  },
  {
    icon: TestTube,
    title: 'Testing & Automation',
    skills: ['Playwright', 'Tricentis Tosca', 'Postman', 'E2E Testing', 'API Testing', 'Regression Testing', 'Smoke Testing', 'Integration Testing'],
  },
  {
    icon: GitBranch,
    title: 'Version Control & DevOps',
    skills: ['Git', 'Azure DevOps', 'CI/CD Pipelines', 'Pull Requests', 'Code Reviews'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: ['LLMs', 'OpenAI APIs', 'Prompt Engineering', 'RAG', 'AI Agents', 'Generative AI'],
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    skills: ['VS Code', 'Visual Studio', 'Jira', 'qTest', 'Postman', 'Browser DevTools'],
  },
  {
    icon: Users,
    title: 'Methodologies',
    skills: ['Agile', 'Scrum', 'Sprint Planning', 'SDLC', 'Test-Driven Development', 'Code Review'],
  },
];

export function Skills() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.015] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Skills"
            title="Capabilities at a glance"
            description="A comprehensive view of my technical toolkit across the full development lifecycle."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.06}>
              <div className="glass p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <category.icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06] hover:bg-white/[0.08] hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
