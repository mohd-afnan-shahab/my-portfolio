'use client';

import { useState, FormEvent } from 'react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle } from 'lucide-react';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:mohdafnan.jb@gmail.com?subject=${subject}&body=${body}`,
      '_blank'
    );
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>
      <div className="container-custom relative">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Get in touch"
            description="Have a project idea, opportunity, or just want to say hello? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <div className="glass p-8 md:p-10 h-full">
              <h3 className="text-lg font-semibold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 hover:border-indigo-500/50 transition-all font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={16} />
                      Message ready — check your mail client
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-6 h-full">
              <div className="glass p-8 md:p-10 flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-3">Let&apos;s connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you&apos;re looking for a software engineer who understands enterprise 
                  applications, someone passionate about AI and automation, or just want to chat 
                  about technology—reach out anytime.
                </p>

                <div className="space-y-3">
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
                          <p className="text-foreground font-medium text-sm">{link.value}</p>
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
      </div>
    </section>
  );
}
