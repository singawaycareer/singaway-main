/** Central SEO & agent-discovery config for singawaycareer.com */

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://www.singawaycareer.com'

export const SITE_NAME = 'SingAway Career'
export const SITE_SHORT_NAME = 'Singaway'
export const SITE_TAGLINE = 'Singapore Career & Visa Consultancy'

export const DEFAULT_TITLE =
  'SingAway Career — Singapore Jobs, Work Permits, S Pass & Study Visa Consultancy'

export const DEFAULT_DESCRIPTION =
  'Licensed Singapore career consultancy for Indians and international candidates. Work permit, S Pass, Employment Pass, study visa, job placement and overseas recruitment — free consultation, 98%+ success rate.'

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const BUSINESS = {
  legalName: 'SingAway Career',
  email: 'singawaycareer@gmail.com',
  phone: '+917888727497',
  phoneDisplay: '+91 78887 27497',
  address: {
    street: '#404, 4th Floor, MOTIAZ ROYAL BUSINESS PARK',
    locality: 'Zirakpur',
    region: 'Punjab',
    postalCode: '140603',
    country: 'IN',
  },
  geo: {
    latitude: 30.6329049,
    longitude: 76.8247521,
  },
  sameAs: [
    'https://www.instagram.com/singawaycareer',
    'https://www.facebook.com/singawaycareer',
  ],
} as const

export const SERVICES = [
  {
    name: 'Singapore Work Permit',
    description:
      'End-to-end work permit processing, employer matching and documentation for candidates seeking jobs in Singapore.',
  },
  {
    name: 'S Pass Assistance',
    description:
      'Eligibility review, document preparation and MOM submission support for mid-skilled S Pass applicants.',
  },
  {
    name: 'Employment Pass',
    description:
      'Strategic guidance for skilled professionals applying for Singapore Employment Pass (EP).',
  },
  {
    name: 'Study Visa Guidance',
    description:
      'University shortlisting, admission support, student visa documentation and pre-departure briefing.',
  },
  {
    name: 'Career Consultation & Job Placement',
    description:
      'Free consultation, profile review and placement across hospitality, logistics, industrial, retail and airport roles.',
  },
] as const

export const FAQS = [
  {
    q: 'How long does the Singapore job placement process take?',
    a: 'Most candidates are placed within 2–4 weeks depending on the role, documentation completeness and visa category (work permit, S Pass or EP).',
  },
  {
    q: 'What documents are needed for a Singapore work permit?',
    a: 'A valid passport, recent photographs, education certificates, work experience letters and any role-specific certifications requested by the employer or MOM.',
  },
  {
    q: 'Do you provide work permits and S Pass support?',
    a: 'Yes. We handle the full Singapore work permit, S Pass and Employment Pass process in coordination with verified employers.',
  },
  {
    q: 'Can you help with study visas to Singapore?',
    a: 'Yes. We support university shortlisting, admissions, student visa documentation, pre-departure briefing and accommodation guidance on arrival.',
  },
  {
    q: 'Which job categories are available in Singapore?',
    a: 'Hospitality, cleaning, warehouse, logistics, drivers, retail, factory, kitchen, airport operations and skilled professional roles.',
  },
  {
    q: 'What salary range can I expect in Singapore?',
    a: 'Entry-level work permit roles typically range from S$1,700 to S$2,800 per month plus accommodation or allowances, depending on employer and sector.',
  },
] as const

const addressJsonLd = {
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.country,
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_SHORT_NAME, 'Singaway Career', 'SingAway'],
    url: SITE_URL,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: addressJsonLd,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: [
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'India' },
    ],
    serviceType: SERVICES.map((s) => s.name),
    sameAs: BUSINESS.sameAs,
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  }
}

export function buildFAQPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function buildServiceListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Singapore visa and career services',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'Singapore' },
      },
    })),
  }
}

/** Single JSON-LD payload — one script tag instead of five (faster parse, same SEO). */
export function buildHomePageJsonLd() {
  const organization = buildOrganizationJsonLd()
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        ...buildWebSiteJsonLd(),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      buildFAQPageJsonLd(),
      buildServiceListJsonLd(),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      },
    ],
  }
}

export function jsonLdScript(data: object) {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(data),
  }
}

export function buildRootMeta() {
  const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as
    | string
    | undefined

  return [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: DEFAULT_DESCRIPTION },
    { name: 'author', content: SITE_NAME },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    {
      name: 'keywords',
      content:
        'Singapore jobs, Singapore work permit, S Pass Singapore, Employment Pass, study visa Singapore, overseas job consultancy India, Singapore recruitment agency, work in Singapore',
    },
    { name: 'theme-color', content: '#0a0a0a' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_SG' },
    { property: 'og:image', content: OG_IMAGE },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: OG_IMAGE },
    ...(googleVerification
      ? [{ name: 'google-site-verification', content: googleVerification }]
      : []),
  ]
}

export function buildPageMeta(options?: {
  title?: string
  description?: string
  path?: string
}) {
  const title = options?.title ?? DEFAULT_TITLE
  const description = options?.description ?? DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${options?.path ?? '/'}`

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:secure_url', content: OG_IMAGE },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:image:alt', content: `${SITE_NAME} — ${SITE_TAGLINE}` },
    ],
    links: [
      { rel: 'canonical', href: canonical },
      { rel: 'icon', type: 'image/jpeg', href: '/og-image.jpg' },
      { rel: 'apple-touch-icon', href: '/og-image.jpg' },
    ],
  }
}

export function robotsTxt(): string {
  return `# ${SITE_NAME}
User-agent: *
Allow: /

# AI / LLM crawlers (agent-friendly)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}

export function llmsTxt(): string {
  return `# ${SITE_NAME}

> ${DEFAULT_DESCRIPTION}

SingAway Career (Singaway) is a licensed Singapore career and visa consultancy based in Zirakpur, India. We help candidates from India and abroad secure Singapore jobs, work permits (WP), S Pass, Employment Pass (EP), and student visas with transparent, end-to-end support.

## Canonical URL
${SITE_URL}

## Services
${SERVICES.map((s) => `- **${s.name}**: ${s.description}`).join('\n')}

## Job sectors we place
- Hospitality, housekeeping, cleaning, condo cleaning
- Warehouse, logistics, drivers, delivery
- Industrial, factory, general labour, site safety
- Airport operations, baggage handling, ground support
- Restaurants, kitchen assistants, service crew
- Retail, hotels, front desk

## Why candidates choose us
- Free consultation and profile review
- 98%+ placement success rate (active candidates)
- Transparent fees, timelines and documentation
- Verified Singapore employers
- Support from application through arrival in Singapore

## FAQ
${FAQS.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Contact
- Phone / WhatsApp: ${BUSINESS.phoneDisplay} (${BUSINESS.phone})
- Email: ${BUSINESS.email}
- Office: ${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}, India
- Enquiry form: ${SITE_URL}/#contact

## Social
${BUSINESS.sameAs.map((u) => `- ${u}`).join('\n')}

## For search engines
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
`
}
