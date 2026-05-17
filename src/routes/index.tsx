import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhySingapore } from "@/components/site/WhySingapore";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Jobs } from "@/components/site/Jobs";
import { StudyVisa } from "@/components/site/StudyVisa";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { WhatsAppButton } from "@/components/site/Whatsapp";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Singaway",
  "url": "/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Singaway — Singapore Jobs, Work Permits & Study Visa Consultancy" },
      {
        name: "description",
        content:
          "Trusted Singapore career consultancy. Work permits, S Pass, Employment Pass, study visa and overseas placement support — end-to-end.",
      },
      { property: "og:title", content: "Singaway — Singapore Career Consultancy" },
      {
        property: "og:description",
        content: "Singapore jobs, work permits and study visa guidance you can trust.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Singaway — Singapore Career Consultancy" },
      {
        name: "twitter:description",
        content: "Singapore jobs, work permits and study visa guidance you can trust.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd),
      },
    ],
  }),
  component: Index,
});

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
  );
}