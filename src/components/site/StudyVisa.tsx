import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import student from "@/assets/student.jpg";
import { Section } from "./Section";

const points = [

  "Admission & application support",
  "Student visa documentation",
  "Pre-departure briefing",
  "Accommodation help on arrival",
];

export function StudyVisa() {
  return (
    <Section id="study" className="border-t border-border">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border"
        >
          <img src={student} alt="Student in Singapore" loading="lazy" className="h-[420px] w-full object-cover sm:h-[520px]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border glass-strong p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Study in Singapore</p>
            <p className="mt-1 font-display text-lg font-semibold">From application to arrival.</p>
          </div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Study Visa</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            World-class education, simplified.
          </h2>
        

          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-border">
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Talk to a student counselor <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
