import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { generateSEOContent } from '@/lib/seo';
import ContactContent from './ContactContent';

const seoData = generateSEOContent('contact');

export const metadata: Metadata = generateMetadata({
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  path: '/contact',
});

export default function ContactPage() {
  return <ContactContent />;
}
