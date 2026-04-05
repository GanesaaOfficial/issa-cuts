import type { Metadata } from 'next';
import { generateMetadata, generateLocalBusinessSchema } from '@/lib/metadata';
import { generateSEOContent } from '@/lib/seo';
import AboutContent from './AboutContent';

const seoData = generateSEOContent('about');

export const metadata: Metadata = generateMetadata({
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  path: '/about',
});

export default function AboutPage() {
  const schemaData = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AboutContent />
    </>
  );
}
