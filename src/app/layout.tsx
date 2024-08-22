import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { constructMetadata } from '@/lib/utils';

const inter = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = constructMetadata();

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
