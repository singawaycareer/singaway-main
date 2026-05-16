import { motion } from "framer-motion";
import { ShieldCheck, Eye, Compass, FileCheck2, TrendingUp, LifeBuoy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Eye, title: "Transparent Process", desc: "Clear timelines, fees and milestones — always." },
  { icon: Compass, title: "Trusted Guidance", desc: "Personal consultants from application to arrival." },
  { icon: FileCheck2, title: "Fast Documentation", desc: "Streamlined paperwork with quick approvals." },
  { icon: TrendingUp, title: "High Success Rate", desc: "96%+ placement rate across active candidates." },
  { icon: LifeBuoy, title: "End-to-End Support", desc: "Pre-departure, arrival and onboarding support." },
];

export function WhyUs() {
  return (
    <Section id="why-us" className="border-t border-border">
      <SectionHeader
        eyebrow="Why choose us"
        title="A consultancy you can trust."
        desc="Built on transparency, accuracy and outcomes — not promises."
      />

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group rounded-3xl border border-border bg-card p-6 transition-all hover:border-border-strong hover:shadow-luxe"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
