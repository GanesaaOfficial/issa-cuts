import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { generateSEOContent } from '@/lib/seo';
import GalleryContent from './GalleryContent';

const seoData = generateSEOContent('gallery');

export const metadata: Metadata = generateMetadata({
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  path: '/gallery',
});

export default function GalleryPage() {
  return <GalleryContent />;
}
