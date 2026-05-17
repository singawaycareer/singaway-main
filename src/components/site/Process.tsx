import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const steps = [
  { n: "01", t: "Free Consultation", d: "Tell us your goals and background." },
  { n: "02", t: "Profile Review", d: "We assess fit and shortlist opportunities." },
  { n: "03", t: "Job or Study Path", d: "Personalized guidance & roadmap." },
  { n: "04", t: "Documentation", d: "We prepare everything you need." },
  { n: "05", t: "Visa / Permit", d: "Submission and tracking through approval." },
  { n: "06", t: "Singapore Placement", d: "Arrival, onboarding and aftercare." },
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

      {/* Responsive layout wrapper with calculated alignment tracks */}
      <div className="relative mt-14 mx-auto max-w-6xl pl-10 md:pl-0">
        
        {/* Animated Connecting Line - Horizontal (Desktop) */}
        <div className="absolute left-0 right-0 top-[7px] hidden h-[2px] bg-border md:block overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: totalDuration, ease: "linear" }}
          />
        </div>

        {/* Animated Connecting Line - Vertical (Mobile/Tablet) */}
        <div className="absolute left-[17px] top-2 bottom-2 w-[2px] bg-border md:hidden overflow-hidden">
          <motion.div
            className="w-full bg-emerald-500 origin-top h-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: totalDuration, ease: "linear" }}
          />
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-4">
          {steps.map((s, i) => {
            const currentStepDelay = i * stepDuration;

            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: currentStepDelay }}
                className="relative pt-1 md:pt-8 col-span-1 flex flex-col"
              >
                {/* Precision Dot Indicator (Perfectly centered on line axes) */}
                <div className="absolute left-[-31px] top-[22px] h-4 w-4 rounded-full border border-border bg-background md:top-0 md:left-6 z-30">
                  {/* Active Green Dot Border Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.2 }}
                    className="absolute -inset-[1px] rounded-full border border-emerald-500 bg-background z-10"
                  />
                  
                  {/* Default Inner Dot */}
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-foreground z-20" />
                  
                  {/* Active Green Inner Dot Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.2 }}
                    className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-emerald-500 z-30"
                  />
                </div>

                {/* Step Card */}
                <div className="relative rounded-2xl border border-border bg-card p-5 overflow-hidden h-full flex-1">
                  {/* Active Green Card Border Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: currentStepDelay, duration: 0.4 }}
                    className="absolute inset-0 rounded-2xl border border-emerald-500 pointer-events-none z-10"
                  />

                  {/* Content */}
                  <div className="relative z-20">
                    <p className="font-display text-xs font-medium text-muted-foreground">{s.n}</p>
                    <p className="mt-2 font-display text-base font-semibold leading-snug">{s.t}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
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