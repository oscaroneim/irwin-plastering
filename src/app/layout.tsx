import { Montserrat } from 'next/font/google';
import React from 'react';
import NavBar from '../components/NavBar/page';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer/page';
import { Toaster } from '../components/Ui/toaster';
import { SelectionProvider } from '@/utils/SelectionContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import SEO from '@/utils/Seo';
import './globals.css';

const fontSans = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body id="top" className={`${fontSans.className} flex flex-col h-screen`}>
        <SelectionProvider>
          <NavBar />
          <SEO />
          <main className="flex-grow w-full mx-auto">
            <Wrapper>
              <Toaster />
              {children}
              <Analytics />
              <SpeedInsights />
            </Wrapper>
          </main>
          <Footer />
        </SelectionProvider>
      </body>
    </html>
  );
}
