import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const inter = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Flintz',
  description:
    'Flintz offers exceptional services to elevate your business, specializing in AI/ML, web and app development, data analytics, digital marketing, software development, and e-commerce setup. We ensure comprehensive support across all your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}

        <Toaster position='top-center' richColors={true} />
      </body>
    </html>
  );
}
