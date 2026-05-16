import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const steps = [
  { n: "01", t: "Free Consultation", d: "Tell us your goals and background." },
  { n: "02", t: "Profile Review", d: "We assess fit and shortlist opportunities." },
  { n: "03", t: "Job or Study Path", d: "Personalized guidance & roadmap." },
  { n: "04", t: "Documentation", d: "We prepare everything you need." },
  { n: "06", t: "Visa / Permit", d: "Submission and tracking through approval." },
  { n: "07", t: "Singapore Placement", d: "Arrival, onboarding and aftercare." },
];

export function Process() {
  // Animation pacing configuration
  const stepDuration = 0.3;
  const totalDuration = steps.length * stepDuration;

  return (
    <Section id="process" className="border-t border-border">
      <SectionHeader
        eyebrow="The process"
        title="A clear path from consultation to Singapore."
      />

      {/* Centered layout wrapper with mobile side-padding padding adjustment */}
      <div className="relative mt-14 mx-auto max-w-6xl pl-8 md:pl-0">
        
        {/* Animated Connecting Line - Horizontal (Desktop) */}
        <div className="hairline absolute left-0 right-0 top-6 hidden h-[2px] bg-border md:block overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: totalDuration, ease: "linear" }}
          />
        </div>

        {/* Animated Connecting Line - Vertical (Mobile/Tablet) */}
        <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-border md:hidden overflow-hidden">
          <motion.div
            className="w-full bg-emerald-500 origin-top h-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: totalDuration, ease: "linear" }}
          />
        </div>

        {/* Clean responsive grid alignment (1 column on mobile, 6 columns on desktop) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-3">
          {steps.map((s, i) => {
            const currentStepDelay = i * stepDuration;

            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: currentStepDelay }}
                className="relative"
              >
                {/* Animated Dot Indicator - Responsive position tracking */}
                <div className="absolute left-[-25px] top-[22px] h-3 w-3 rounded-full border border-border bg-background md:relative md:left-auto md:top-auto md:mb-4 md:-translate-y-[7px] overflow-visible">
                  {/* Active Green Dot Border Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.2 }}
                    className="absolute -inset-[1px] rounded-full border border-emerald-500 bg-background z-10"
                  />
                  
                  {/* Default Inner Dot */}
                  <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-foreground z-20" />
                  
                  {/* Active Green Inner Dot Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.2 }}
                    className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-emerald-500 z-30"
                  />
                </div>

                {/* Step Card */}
                <div className="relative rounded-2xl border border-border bg-card p-4 overflow-hidden h-full">
                  {/* Active Green Card Border Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.4 }}
                    className="absolute inset-0 rounded-2xl border border-emerald-500 pointer-events-none z-10"
                  />

                  {/* Content (Z-indexed above overlays) */}
                  <div className="relative z-20">
                    <p className="font-display text-xs text-muted-foreground">{s.n}</p>
                    <p className="mt-2 font-display text-base font-semibold leading-snug">{s.t}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}