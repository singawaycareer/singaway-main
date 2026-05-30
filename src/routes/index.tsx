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
import {
  buildBreadcrumbJsonLd,
  buildFAQPageJsonLd,
  buildPageMeta,
  buildServiceListJsonLd,
  buildWebSiteJsonLd,
  jsonLdScript,
} from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () => {
    const page = buildPageMeta()
    return {
      ...page,
      scripts: [
        jsonLdScript(buildWebSiteJsonLd()),
        jsonLdScript(buildFAQPageJsonLd()),
        jsonLdScript(buildServiceListJsonLd()),
        jsonLdScript(buildBreadcrumbJsonLd()),
      ],
    }
  },
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
