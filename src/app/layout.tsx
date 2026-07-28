import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afnanshahab.dev'),
  title: 'Mohd Afnan Shahab — Software Engineer',
  description:
    'Software Engineer building enterprise applications with React, TypeScript, C#, and .NET. Passionate about AI, automation, and shipping production-grade software.',
  keywords: [
    'Software Engineer',
    'React',
    'TypeScript',
    'C#',
    '.NET',
    'Enterprise Software',
    'AI',
    'Automation',
    'Playwright',
    'Full Stack',
  ],
  authors: [{ name: 'Mohd Afnan Shahab' }],
  creator: 'Mohd Afnan Shahab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afnanshahab.dev',
    siteName: 'Mohd Afnan Shahab',
    title: 'Mohd Afnan Shahab — Software Engineer',
    description:
      'Software Engineer building enterprise applications with React, TypeScript, C#, and .NET. Passionate about AI, automation, and shipping production-grade software.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohd Afnan Shahab — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Afnan Shahab — Software Engineer',
    description:
      'Software Engineer building enterprise applications with React, TypeScript, C#, and .NET. Passionate about AI, automation, and shipping production-grade software.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohd Afnan Shahab',
              url: 'https://afnanshahab.dev',
              jobTitle: 'Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'MAQ Software',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Manipal University Jaipur',
              },
              knowsAbout: [
                'React',
                'TypeScript',
                'C#',
                '.NET',
                'Enterprise Software',
                'AI',
                'Automation',
                'Playwright',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
