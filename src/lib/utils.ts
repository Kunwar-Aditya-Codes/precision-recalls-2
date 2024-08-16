import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function constructMetadata({
//   title = 'Flintz',
//   description = 'Flintz offers exceptional services to elevate your business, specializing in AI/ML, web and app development, data analytics, digital marketing, software development, and e-commerce setup. We ensure comprehensive support across all your needs.',
//   image = '/thumbnail.png',
//   icons = '/favicon.ico',
// }: {
//   title?: string;
//   description?: string;
//   image?: string;
//   icons?: string;
// } = {}): Metadata {
//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       images: [{ url: image }],
//     },
//     icons,
//     metadataBase: new URL('https://draw-opal.vercel.app/'),
//   };
// }
