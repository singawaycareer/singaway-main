import { motion } from "framer-motion";
import {
  Briefcase, FileCheck2, IdCard, GraduationCap, Sparkles, MessagesSquare,
  Truck, UtensilsCrossed, Building2, PackageCheck, Plane, ShoppingBag,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const work = [
  { icon: FileCheck2, title: "Singapore Work Permit", desc: "End-to-end work permit processing & employer matching." },
  { icon: IdCard, title: "S Pass Assistance", desc: "Eligibility review, documentation and submission." },
  { icon: Briefcase, title: "Employment Pass", desc: "Strategic guidance for skilled professionals & EP holders." },
  { icon: Sparkles, title: "Resume Optimization", desc: "Singapore-market resumes that get shortlisted." },
  { icon: GraduationCap, title: "Study Visa Guidance", desc: "Universities, admissions & visa documentation." },
];

const sectors = [
  { icon: Building2, title: "Hospitality & Cleaning", items: ["Condo Cleaning", "Housekeeping", "Waiters", "Cooks", "Helpers" , "House Maids"] },
  { icon: PackageCheck, title: "Industrial & Labor", items: ["Packing", "Material Handling", "Site Safety", "General Labor"] },
  { icon: Truck, title: "Logistics", items: ["Warehouse", "Loading & Unloading", "Drivers", "Delivery"] },
  { icon: Plane, title: "Airport Operations", items: ["Airport Cleaning", "Ground Support", "Baggage Handling"] },
  { icon: UtensilsCrossed, title: "Restaurants & Kitchen", items: ["Kitchen Assistants", "Dishwashing", "Service Crew"] },
  { icon: ShoppingBag, title: "Retail & Hotels", items: ["Retail Staff", "Hotel Support", "Front Desk"] },
];

export function Services() {
  return (
    <Section id="services">
      <div className="flex items-end justify-between gap-6">
        <SectionHeader
          eyebrow="What we do"
          title="Our Services"
          desc="A complete consultancy for jobs, visas, and overseas placement — designed for clarity, speed and trust."
        />
        <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">
          Talk to a consultant →
        </a>
      </div>

      {/* Bento grid */}
      <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-6">
        {work.map((s, i) => {
          const span =
            i === 0 ? "md:col-span-3" : i === 1 ? "md:col-span-3" : "md:col-span-2";
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-border-strong hover:shadow-luxe ${span}`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-secondary opacity-0 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.div>
          );
        })}
      </div>

      {/* Sectors */}
      <div className="mt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Job Sectors</p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Active hiring across Singapore.
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="rounded-3xl border border-border bg-card p-6 hover:border-border-strong"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
                  <s.icon className="h-4 w-4" />
                </div>
                <h4 className="font-display text-lg font-semibold">{s.title}</h4>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
