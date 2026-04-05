import type { Metadata } from 'next';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/metadata';
import { PAGE_META, HOME_FAQS } from '@/lib/seo';
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { GallerySection } from "@/components/sections/GallerySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = generateMetadata({
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  keywords: PAGE_META.home.keywords,
  path: '/',
});

export default function Home() {
  const faqSchema = generateFAQSchema(HOME_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <CTABanner />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection faqs={HOME_FAQS} />
      <ContactSection />
    </>
  );
}
