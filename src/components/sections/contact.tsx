'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohdafnan.jb@gmail.com',
    href: 'mailto:mohdafnan.jb@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'mohd-afnan-shahab',
    href: 'https://github.com/mohd-afnan-shahab',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mohd-afnan-shahab-220b3b217',
    href: 'https://linkedin.com/in/mohd-afnan-shahab-220b3b217',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's connect"
            description="I'm always open to discussing software engineering, AI, or new opportunities."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl">
            <div className="glass p-8 md:p-10">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re looking for a software engineer who understands enterprise 
                applications, someone passionate about AI and automation, or just want to chat 
                about technology—I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <link.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="text-foreground font-medium">{link.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-indigo-400 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
