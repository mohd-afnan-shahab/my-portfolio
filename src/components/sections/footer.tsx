'use client';

import { AnimatedSection } from '@/components/ui/animated-section';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-mono text-sm text-muted-foreground">
                afnan<span className="text-indigo-400">.</span>dev
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Designed & built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Mohd Afnan Shahab
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
