'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Brain, Sparkles, Bot, Database, MessageSquare, Cpu } from 'lucide-react';

const aiTopics = [
  {
    icon: Brain,
    title: 'Large Language Models',
    description: 'Understanding transformer architectures, token economics, fine-tuning approaches, and how LLMs reason about complex tasks.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Exploring how generative models create content, code, and solutions—and how to integrate these capabilities into production applications.',
  },
  {
    icon: Bot,
    title: 'AI Agents & Agentic AI',
    description: 'Building autonomous agents that can plan, reason, use tools, and complete multi-step tasks with minimal human intervention.',
  },
  {
    icon: Database,
    title: 'Retrieval-Augmented Generation',
    description: 'Implementing RAG pipelines that ground LLM responses in specific knowledge bases, reducing hallucination and improving accuracy.',
  },
  {
    icon: MessageSquare,
    title: 'Prompt Engineering',
    description: 'Crafting effective prompts, system instructions, and conversation architectures that produce reliable, high-quality AI outputs.',
  },
  {
    icon: Cpu,
    title: 'AI Application Development',
    description: 'Building applications powered by OpenAI and Anthropic APIs—from prototype to production, with proper error handling and cost optimization.',
  },
];

export function AISection() {
  return (
    <section id="ai" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-500/6 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="AI & Learning"
            title="Building with intelligence"
            description="Artificial Intelligence is where I invest my learning time. I actively explore LLMs, agentic systems, and AI application development."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass p-6 md:p-8 mb-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Beyond my enterprise software work, I actively study and experiment with modern AI technologies. 
              From understanding how Large Language Models process and generate text, to building applications 
              that leverage OpenAI and Anthropic APIs, to exploring how autonomous agents can solve complex 
              problems—AI represents the most exciting frontier in software engineering today.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              I believe the best software engineers of the next decade will be those who understand how to 
              build <em>with</em> AI—using it as a tool, integrating it into products, and understanding 
              its capabilities and limitations at a deep level.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTopics.map((topic, i) => (
            <AnimatedSection key={topic.title} delay={i * 0.08}>
              <div className="glass p-6 h-full group hover-lift">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 w-fit mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <topic.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
