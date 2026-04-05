import { Metadata } from 'next';
import { seoContent, SITE_URL, BRAND, PHONE, WHATSAPP, HOURS, PRICE_RANGE, RATING, REVIEW_COUNT, COORDINATES, HOME_FAQS, businessInfo } from './seo';
import { services } from '@/data/services';
import { team } from '@/data/team';

// ── Page metadata factory ─────────────────────────────────────────────────────
export function generateMetadata(config: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
}): Metadata {
  const { title, description, keywords, path = '', image = '/og-image.jpg' } = config;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: BRAND }],
    creator: BRAND,
    publisher: BRAND,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_MY',
      url,
      title,
      description,
      siteName: BRAND,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@issacuts',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

// ── Core LocalBusiness / HairSalon schema ─────────────────────────────────────
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HairSalon', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: BRAND,
    description: businessInfo.description,
    url: SITE_URL,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    image: `${SITE_URL}/og-image.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/Logo/Logo.webp`,
      width: 280,
      height: 112,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '41B, 2nd Floor, Jalan SS 15/4',
      addressLocality: 'Subang Jaya',
      addressRegion: 'Selangor',
      postalCode: '47500',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COORDINATES.lat,
      longitude: COORDINATES.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${COORDINATES.lat},${COORDINATES.lng}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '10:00',
        closes: '01:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'customer service',
        availableLanguage: ['English', 'Malay'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        telephone: WHATSAPP,
        contactType: 'reservations',
        availableLanguage: ['English', 'Malay'],
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Subang Jaya' },
      { '@type': 'City', name: 'USJ' },
      { '@type': 'City', name: 'Sunway' },
      { '@type': 'City', name: 'Petaling Jaya' },
      { '@type': 'AdministrativeArea', name: 'Selangor' },
    ],
    currenciesAccepted: 'MYR',
    paymentAccepted: 'Cash, Credit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      'https://www.facebook.com/issacuts',
      'https://www.instagram.com/issa.cutsncoiffure/',
      'https://www.tiktok.com/@issacutsncoiffure',
      `https://www.google.com/maps/search/?api=1&query=${COORDINATES.lat},${COORDINATES.lng}`,
    ],
  };
}

// ── FAQPage schema ────────────────────────────────────────────────────────────
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

// ── Services ItemList schema ──────────────────────────────────────────────────
export function generateServicesListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Issa Cuts Barbershop Services',
    description: 'Professional haircut and grooming services in SS15, Subang Jaya',
    url: `${SITE_URL}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        '@id': `${SITE_URL}/services#${s.id}`,
        name: s.name,
        description: s.description,
        provider: {
          '@type': 'HairSalon',
          name: BRAND,
          url: SITE_URL,
        },
        areaServed: { '@type': 'City', name: 'Subang Jaya' },
        offers: {
          '@type': 'Offer',
          price: s.price.replace('RM ', ''),
          priceCurrency: 'MYR',
          availability: 'https://schema.org/InStock',
          validFrom: '2024-01-01',
        },
      },
    })),
  };
}

// ── Team (Person) schema ──────────────────────────────────────────────────────
export function generateTeamSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Issa Cuts Expert Barbers',
    url: `${SITE_URL}/team`,
    itemListElement: team.map((member, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        '@id': `${SITE_URL}/team#${member.id}`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        worksFor: {
          '@type': 'HairSalon',
          name: BRAND,
          url: SITE_URL,
        },
        knowsAbout: member.specialty,
      },
    })),
  };
}

// ── Booking HowTo schema ──────────────────────────────────────────────────────
export function generateBookingHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Book a Haircut Appointment at Issa Cuts',
    description: 'Step-by-step guide to booking a barbershop appointment at Issa Cuts, SS15 Subang Jaya.',
    totalTime: 'PT3M',
    supply: [{ '@type': 'HowToSupply', name: 'Internet connection or phone' }],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Choose your service',
        text: 'Select from Classic Haircut (RM35), Fade Haircut (RM40), Beard Trim (RM25), Royal Shave (RM45), Kids Haircut (RM25), or the Combo Package (RM65).',
        url: `${SITE_URL}/booking#service`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Pick your barber',
        text: 'Choose a specific barber — Issa (fades & modern styles), Ahmad (classic cuts & beard), or Rizal (creative styles) — or select "Any Available" for the first available slot.',
        url: `${SITE_URL}/booking#barber`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Select date and time',
        text: 'Pick your preferred date and a time slot between 10:00 AM and 9:30 PM. Issa Cuts is open every day including weekends.',
        url: `${SITE_URL}/booking#datetime`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Confirm your booking',
        text: 'Enter your name, phone number, and email, then submit. The team will confirm your appointment via WhatsApp or phone call.',
        url: `${SITE_URL}/booking#confirm`,
      },
    ],
  };
}

// ── BreadcrumbList schema ─────────────────────────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// ── Legacy service schema (kept for compat) ───────────────────────────────────
export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: { '@type': 'HairSalon', name: BRAND },
    areaServed: { '@type': 'City', name: 'Subang Jaya' },
    offers: {
      '@type': 'Offer',
      price: service.price.replace('RM ', ''),
      priceCurrency: 'MYR',
    },
  };
}
