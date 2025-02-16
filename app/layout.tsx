'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Loader } from '@/components/loader/loader';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Refayet's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
     <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {loading ? (
            <Loader />
          ) : (
            <div className="layout min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}