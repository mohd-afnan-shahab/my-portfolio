'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { ExternalLink, ChevronRight, Layers, BarChart3, Shield, Workflow, Rocket, TestTube } from 'lucide-react';

const projects = [
  {
    id: 'legal-platform',
    icon: Layers,
    title: 'Enterprise Legal Platform',
    tagline: 'Full-stack feature development for legal professionals',
    overview:
      'Contributed to an enterprise legal platform serving thousands of professionals, building features across the React/TypeScript frontend and C#/.NET backend.',
    problem:
      'Legal professionals needed reliable, compliant software to manage complex workflows. Features required precise validation across UI components, API contracts, and database operations.',
    approach:
      'Worked within Agile sprints to develop and validate features end-to-end. Collaborated with product managers to understand requirements, with backend developers on API design, and with QA on test coverage.',
    technologies: ['React', 'TypeScript', 'C#', '.NET', 'SQL Server', 'REST APIs', 'Azure DevOps'],
    decisions: [
      'Component-based architecture for reusable UI elements',
      'API contract validation before frontend integration',
      'Comprehensive error handling for edge cases',
      'Database query optimization for large datasets',
    ],
    outcome:
      'Successfully shipped multiple features used by thousands of legal professionals, with zero critical defects in production releases.',
    lessons:
      'Enterprise software demands a different level of rigor. Understanding the domain—not just the code—is crucial for building features that truly serve users.',
  },
  {
    id: 'react-dashboard',
    icon: BarChart3,
    title: 'Modern React Dashboard',
    tagline: 'Complex data visualization and real-time state management',
    overview:
      'Developed interactive dashboard components with complex state management, real-time data updates, and responsive layouts for enterprise users.',
    problem:
      'Enterprise users needed to visualize complex data relationships and take action from dashboard interfaces. Performance and responsiveness were critical with large datasets.',
    approach:
      'Built reusable React components with TypeScript for type safety. Implemented efficient state management patterns and optimized rendering for complex data tables and charts.',
    technologies: ['React', 'TypeScript', 'REST APIs', 'CSS', 'Component Architecture'],
    decisions: [
      'Memoization strategies for expensive computations',
      'Virtual scrolling for large data sets',
      'Debounced search and filter operations',
      'Responsive breakpoints for enterprise contexts',
    ],
    outcome:
      'Delivered dashboard components that handle thousands of data points while maintaining smooth interactions and sub-second response times.',
    lessons:
      'Performance optimization in React requires understanding rendering behavior deeply. Measuring before optimizing prevents premature complexity.',
  },
  {
    id: 'api-framework',
    icon: Shield,
    title: 'API Validation Framework',
    tagline: 'Automated contract testing for REST API endpoints',
    overview:
      'Designed and built a systematic approach to API testing, validating request/response contracts, error handling, authentication flows, and data integrity across microservices.',
    problem:
      'With multiple teams building and consuming APIs, contract drift caused integration failures. Manual API testing was inconsistent and did not scale with rapid development cycles.',
    approach:
      'Built structured test suites using Postman and custom scripts to validate API contracts. Covered positive paths, error scenarios, edge cases, and authentication requirements.',
    technologies: ['Postman', 'REST APIs', 'C#', '.NET', 'SQL Server', 'JSON Schema'],
    decisions: [
      'Schema-based validation for response structures',
      'Environment-based configuration for test portability',
      'Assertion libraries for consistent validation patterns',
      'Automated pre-request scripts for authentication',
    ],
    outcome:
      'Reduced API-related integration defects by establishing consistent validation practices. Test suites became a living specification for API behavior.',
    lessons:
      'API testing is most effective when it acts as documentation. Well-structured test suites communicate expected behavior better than static documentation.',
  },
  {
    id: 'automation-infra',
    icon: TestTube,
    title: 'Playwright Automation Infrastructure',
    tagline: 'Scalable end-to-end testing framework for enterprise applications',
    overview:
      'Architected and built a Playwright-based automation framework for end-to-end testing of enterprise web applications, covering critical user journeys and regression paths.',
    problem:
      'Manual regression testing consumed significant time before each release. Complex enterprise workflows with many permutations made manual coverage unreliable and slow.',
    approach:
      'Designed a Page Object Model architecture with reusable utilities, data factories, and configurable test environments. Prioritized critical path coverage while maintaining test stability.',
    technologies: ['Playwright', 'TypeScript', 'Page Object Model', 'CI/CD', 'Azure DevOps'],
    decisions: [
      'Page Object Model for maintainability and reuse',
      'Test data factories for environment independence',
      'Retry mechanisms for handling intermittent failures',
      'Parallel execution for faster feedback cycles',
    ],
    outcome:
      'Built a reliable automation suite that reduced regression testing time significantly while increasing coverage of critical business workflows.',
    lessons:
      'Test automation is a software engineering discipline. The same principles that make production code maintainable—abstraction, single responsibility, clean interfaces—apply to test code.',
  },
  {
    id: 'release-pipeline',
    icon: Rocket,
    title: 'Production Release Validation',
    tagline: 'Systematic pre-release verification and smoke testing',
    overview:
      'Established systematic approaches to production release validation, including smoke test suites, pre-release checklists, and post-deployment verification procedures.',
    problem:
      'Production releases carried risk without structured validation. Teams needed confidence that deployments did not regress existing functionality or introduce critical defects.',
    approach:
      'Developed tiered validation strategies: smoke tests for critical paths immediately after deployment, targeted regression for changed areas, and broader validation for major releases.',
    technologies: ['Playwright', 'Postman', 'Azure DevOps', 'SQL Server', 'REST APIs'],
    decisions: [
      'Prioritized smoke tests by business impact',
      'Automated health checks for post-deployment verification',
      'Rollback criteria based on validation results',
      'Communication protocols for release status',
    ],
    outcome:
      'Established reliable release processes that gave teams confidence in production deployments, reducing post-release incidents and enabling faster delivery cycles.',
    lessons:
      'Release confidence comes from systematic process, not heroic effort. Investing in pre-release validation pays compound returns in deployment speed and reliability.',
  },
  {
    id: 'workflow-testing',
    icon: Workflow,
    title: 'Enterprise Workflow Testing',
    tagline: 'Complex multi-step business process validation',
    overview:
      'Designed test strategies for complex enterprise workflows spanning multiple system components, user roles, and business rules—ensuring correctness across the entire process chain.',
    problem:
      'Enterprise workflows involved multiple steps, user roles, conditional logic, and system integrations. Testing individual components was insufficient; end-to-end process validation was essential.',
    approach:
      'Mapped business workflows into testable scenarios, identifying critical paths, boundary conditions, and failure modes. Built test suites that validated entire process chains, not just isolated features.',
    technologies: ['Tricentis Tosca', 'Playwright', 'SQL Server', 'Enterprise Frameworks', 'qTest'],
    decisions: [
      'Workflow decomposition into atomic test scenarios',
      'Data-driven testing for business rule coverage',
      'Role-based test execution for permission validation',
      'Traceability from requirements to test cases',
    ],
    outcome:
      'Achieved comprehensive coverage of complex business processes, catching integration defects that component-level testing missed entirely.',
    lessons:
      'Enterprise testing requires domain expertise. Understanding the business process is prerequisite to testing it effectively—without domain knowledge, test coverage has blind spots.',
  },
];

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="What I've built"
            description="Case studies from enterprise software development—showcasing engineering decisions, not confidential details."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <motion.div
                layout
                className="glass p-6 md:p-8 cursor-pointer group hover-lift h-full flex flex-col"
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <project.icon size={20} />
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === project.id ? 90 : 0 }}
                    className="text-muted-foreground"
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-400/80 mb-3">{project.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Problem</h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Approach</h4>
                          <p className="text-sm text-muted-foreground">{project.approach}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Decisions</h4>
                          <ul className="space-y-1.5">
                            {project.decisions.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/60 shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                          <p className="text-sm text-muted-foreground">{project.outcome}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Lessons Learned</h4>
                          <p className="text-sm text-muted-foreground italic">{project.lessons}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
