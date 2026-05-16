import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const jobs = [
  { title: "Warehouse Associate", salary: "S$1,800 – 2,400", type: "Work Permit", exp: "0–2 yrs", tags: ["Logistics", "Day Shift"] },
  { title: "Hotel Housekeeping", salary: "S$1,700 – 2,200", type: "Work Permit", exp: "Entry", tags: ["Hospitality"] },
  { title: "Airport Cleaning Crew", salary: "S$1,900 – 2,500", type: "Work Permit", exp: "Entry", tags: ["Airport", "Night"] },
  { title: "Class 3 / 4 Driver", salary: "S$2,200 – 2,900", type: "Work Permit", exp: "1+ yrs", tags: ["Logistics", "License"] },
  { title: "Delivery Rider", salary: "S$2,000 – 2,800", type: "Work Permit", exp: "0–1 yr", tags: ["Bike"] },
  { title: "Packing Operator", salary: "S$1,800 – 2,300", type: "Work Permit", exp: "Entry", tags: ["Factory"] },
  { title: "Restaurant Service Crew", salary: "S$1,900 – 2,400", type: "S Pass / WP", exp: "0–2 yrs", tags: ["F&B"] },
  { title: "Condo Housekeeping", salary: "S$1,700 – 2,100", type: "Work Permit", exp: "Entry", tags: ["Cleaning"] },
];

export function Jobs() {
  return (
    <Section id="jobs">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader eyebrow="Open roles" title="Job Opportunities" />
        <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">
          See all openings →
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="group flex flex-col rounded-3xl border border-border bg-card p-5 transition-all hover:border-border-strong hover:shadow-luxe"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {j.type}
              </span>
              <span className="text-xs text-muted-foreground">{j.exp}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{j.title}</h3>
            <p className="mt-1 text-sm text-foreground/80">{j.salary}</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> Singapore
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {j.tags.map((t) => (
                <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-foreground/70">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-between rounded-2xl bg-foreground px-3.5 py-2.5 text-sm font-medium text-background transition-transform group-hover:-translate-y-0.5"
            >
              Quick Apply <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
