import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/site/Hero'
import { Services } from '@/components/site/Services'
import { WhySingapore } from '@/components/site/WhySingapore'
import { WhyUs } from '@/components/site/WhyUs'
import { Process } from '@/components/site/Process'
import { StudyVisa } from '@/components/site/StudyVisa'
import { FAQ } from '@/components/site/FAQ'
import { Contact } from '@/components/site/Contact'
import { WhatsAppButton } from '@/components/site/Whatsapp'

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Singaway',
  url: 'https://singawaycareer.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://singawaycareer.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const Route = createFileRoute('/')({
  head: () => ({
    title: 'Singaway — Singapore Jobs, Work Permits & Study Visa Consultancy',

    meta: [
      {
        name: 'description',
        content:
          'Trusted Singapore career consultancy. Work permits, S Pass, Employment Pass, study visa and overseas placement support — end-to-end.',
      },

      // Open Graph
      {
        property: 'og:title',
        content: 'Singaway — Singapore Career Consultancy',
      },
      {
        property: 'og:description',
        content:
          'Singapore jobs, work permits and study visa guidance you can trust.',
      },
      {
        property: 'og:url',
        content: 'https://singawaycareer.com',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://singawaycareer.com/og-image.jpg',
      },
      {
        property: 'og:image:secure_url',
        content: 'https://singawaycareer.com/og-image.jpg',
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },

      // Twitter / WhatsApp / LinkedIn
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Singaway — Singapore Career Consultancy',
      },
      {
        name: 'twitter:description',
        content:
          'Singapore jobs, work permits and study visa guidance you can trust.',
      },
      {
        name: 'twitter:image',
        content: 'https://singawaycareer.com/og-image.jpg',
      },
    ],

    links: [
      {
        rel: 'canonical',
        href: 'https://singawaycareer.com',
      },

      // Browser Tab Logo / Favicon
      {
        rel: 'icon',
        type: 'image/jpeg',
        href: '/og-image.jpg',
      },

      {
        rel: 'apple-touch-icon',
        href: '/og-image.jpg',
      },
    ],

    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),

  component: Index,
})

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Hero />
      <Services />
      <WhySingapore />
      <WhyUs />
      <Process />
      <StudyVisa />
      <FAQ />
      <Contact />

      <WhatsAppButton />
    </main>
  )
}
