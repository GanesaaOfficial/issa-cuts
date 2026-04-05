import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { generateLocalBusinessSchema } from "@/lib/metadata";
import { SITE_URL, BRAND } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} — Best Barbershop in SS15, Subang Jaya | Premium Haircuts & Grooming`,
    template: `%s | ${BRAND} Barbershop SS15`,
  },
  description:
    'Issa Cuts & Coiffure is the best barbershop in SS15, Subang Jaya, Selangor. 5.0 stars · 597 Google reviews. Expert fades, classic cuts & beard grooming. Open daily 10 AM – 1 AM. Walk-ins welcome.',
  keywords:
    'best barbershop SS15, best barber Subang Jaya, barber SS15, haircut Subang Jaya, best barber Selangor, premium barber Malaysia, kedai gunting rambut SS15, fade haircut Subang Jaya, Issa Cuts',
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  category: 'barbershop',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} — Best Barbershop in SS15, Subang Jaya`,
    description:
      'Issa Cuts & Coiffure — SS15, Subang Jaya. 5.0★ · 597 Google reviews. Expert fades, classic cuts & beard grooming. Open daily 10 AM – 1 AM.',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: `${BRAND} — Premium Barbershop SS15 Subang Jaya` },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND} — Best Barbershop in SS15, Subang Jaya`,
    description:
      'Issa Cuts & Coiffure — SS15, Subang Jaya. 5.0★ · 597 Google reviews. Expert fades & grooming. Open daily 10 AM – 1 AM.',
    images: ['/og-image.jpg'],
    creator: '@issacuts',
    site: '@issacuts',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* LocalBusiness / HairSalon — sitewide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Speakable hint for voice assistants */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'h2', '.speakable'],
              },
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
