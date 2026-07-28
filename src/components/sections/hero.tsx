'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/8 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-muted-foreground">
              Building enterprise software at MAQ Software
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Mohd Afnan Shahab</span>
            
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            Software Engineer crafting{' '}
            <span className="text-foreground">enterprise applications</span> with
            React, TypeScript, C#, and .NET
          </motion.p>

          {/* Terminal-style snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="glass p-4 md:p-6 max-w-lg w-full text-left mb-12"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">
                ~/portfolio
              </span>
            </div>
            <div className="font-mono text-sm space-y-1.5">
              <p>
                <span className="text-indigo-400">const</span>{' '}
                <span className="text-foreground">engineer</span>{' '}
                <span className="text-indigo-400">=</span> {'{'}
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">role</span>:{' '}
                <span className="text-amber-300">&quot;Software Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">stack</span>:{' '}
                <span className="text-amber-300">[&quot;React&quot;, &quot;TS&quot;, &quot;C#&quot;, &quot;.NET&quot;]</span>,
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">passion</span>:{' '}
                <span className="text-amber-300">&quot;AI &amp; Automation&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">building</span>:{' '}
                <span className="text-amber-300">&quot;Enterprise Software&quot;</span>
              </p>
              <p>{'};'}</p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
