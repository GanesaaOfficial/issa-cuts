import type { Metadata } from 'next';
import {
  generateMetadata,
  generateServicesListSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/metadata';
import { PAGE_META, SERVICES_FAQS } from '@/lib/seo';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = generateMetadata({
  title: PAGE_META.services.title,
  description: PAGE_META.services.description,
  keywords: PAGE_META.services.keywords,
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServicesListSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(SERVICES_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
            ])
          ),
        }}
      />
      <ServicesContent />
    </>
  );
}
