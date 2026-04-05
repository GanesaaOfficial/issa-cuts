import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { generateSEOContent } from '@/lib/seo';
import TeamContent from './TeamContent';

const seoData = generateSEOContent('team');

export const metadata: Metadata = generateMetadata({
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  path: '/team',
});

export default function TeamPage() {
  return <TeamContent />;
}
