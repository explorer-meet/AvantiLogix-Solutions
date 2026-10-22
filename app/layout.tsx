import type { Metadata } from 'next';
import { DM_Sans, Oswald } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://avantilogix.com'),
  alternates: { canonical: './' },
  title: 'AvantiLogix | Technology Staffing & Consulting',
  description:
    'Technology staffing, consulting, and engineering solutions for businesses building teams, modernizing systems, and delivering technology roadmaps.',
  keywords: [
    'IT consulting',
    'IT staffing',
    'cloud services',
    'AI ML',
    'cybersecurity',
    'data analytics',
    'AvantiLogix',
    'Ahmedabad',
  ],
  twitter: { card: 'summary_large_image' },
  openGraph: {
    title: 'AvantiLogix | Technology Staffing & Consulting',
    description: 'Technology staffing, consulting, and engineering solutions for enterprise teams.',
    type: 'website',
    images: [{ url: '/images/avanti-hero-a.jpg', alt: 'AvantiLogix' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${oswald.variable}`}>
      <body className="font-sans">
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <BackToTop />
        </MotionConfig>
      </body>
    </html>
  );
}
