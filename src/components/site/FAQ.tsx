import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const faqs = [
  { q: "How long does the placement process take?", a: "Most candidates are placed within 4–10 weeks depending on the role, documentation and visa category." },
  { q: "What documents are needed?", a: "A valid passport, recent photographs, education certificates, work experience letters and any role-specific certifications." },
  { q: "Do you provide work permits and S Pass support?", a: "Yes — we handle the full work permit, S Pass and Employment Pass process in coordination with the employer." },
  { q: "Can you help with study visas to Singapore?", a: "Absolutely. From shortlisting universities and admissions to preparing the student visa file." },
  { q: "Which job categories are available?", a: "Hospitality, cleaning, warehouse, logistics, drivers, retail, factory, kitchen and skilled professional roles." },
  { q: "What salary range can I expect?", a: "Entry-level work permit roles typically range from S$1,700 to S$2,800 per month plus accommodation/allowances depending on employer." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." />
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={i > 0 ? "border-t border-border" : ""}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-base font-medium sm:text-lg">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border">
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}