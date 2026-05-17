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
    meta: [
      {
        title:
          'Singaway — Singapore Jobs, Work Permits & Study Visa Consultancy',
      },
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
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      {
        name: 'twitter:image',
        content: 'https://singawaycareer.com/og-image.jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },

      // Twitter / WhatsApp / LinkedIn Preview
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
    ],

    scripts: [
      // JSON-LD Schema
      {
        type: 'application/ld+json',
        children: JSON.stringify(websiteJsonLd),
      },

      // Meta Pixel
      {
        children: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `,
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

      {/* Floating WhatsApp Action Trigger */}
      <WhatsAppButton />
    </main>
  )
}
