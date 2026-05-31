import { lazy, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/site/Hero'
import { buildHomePageJsonLd, buildPageMeta, jsonLdScript } from '@/lib/seo'

const Services = lazy(() =>
  import('@/components/site/Services').then((m) => ({ default: m.Services })),
)
const WhySingapore = lazy(() =>
  import('@/components/site/WhySingapore').then((m) => ({
    default: m.WhySingapore,
  })),
)
const WhyUs = lazy(() =>
  import('@/components/site/WhyUs').then((m) => ({ default: m.WhyUs })),
)
const Process = lazy(() =>
  import('@/components/site/Process').then((m) => ({ default: m.Process })),
)
const StudyVisa = lazy(() =>
  import('@/components/site/StudyVisa').then((m) => ({ default: m.StudyVisa })),
)
const FAQ = lazy(() =>
  import('@/components/site/FAQ').then((m) => ({ default: m.FAQ })),
)
const Contact = lazy(() =>
  import('@/components/site/Contact').then((m) => ({ default: m.Contact })),
)
const WhatsAppButton = lazy(() =>
  import('@/components/site/Whatsapp').then((m) => ({
    default: m.WhatsAppButton,
  })),
)

export const Route = createFileRoute('/')({
  head: () => {
    const page = buildPageMeta()
    return {
      ...page,
      scripts: [jsonLdScript(buildHomePageJsonLd())],
    }
  },
  component: Index,
})

function BelowFold() {
  return (
    <>
      <Services />
      <WhySingapore />
      <WhyUs />
      <Process />
      <StudyVisa />
      <FAQ />
      <Contact />
      <WhatsAppButton />
    </>
  )
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Hero />
      <Suspense fallback={null}>
        <BelowFold />
      </Suspense>
    </main>
  )
}
