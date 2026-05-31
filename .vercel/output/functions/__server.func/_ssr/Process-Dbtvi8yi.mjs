import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader } from "./Section-BeMi5sIs.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const steps = [
  { n: "01", t: "Free Consultation", d: "Tell us your goals and background." },
  { n: "02", t: "Profile Review", d: "We assess fit and shortlist opportunities." },
  { n: "03", t: "Job or Study Path", d: "Personalized guidance & roadmap." },
  { n: "04", t: "Documentation", d: "We prepare everything you need." },
  { n: "05", t: "Visa / Permit", d: "Submission and tracking through approval." },
  { n: "06", t: "Singapore Placement", d: "Arrival, onboarding and aftercare." }
];
function Process() {
  const stepDuration = 0.3;
  const totalDuration = steps.length * stepDuration;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "process", className: "border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "The process",
        title: "A clear path from consultation to Singapore."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14 mx-auto max-w-6xl pl-10 md:pl-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-[7px] hidden h-[2px] bg-border md:block overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full bg-emerald-500 origin-left",
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: totalDuration, ease: "linear" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[17px] top-2 bottom-2 w-[2px] bg-border md:hidden overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "w-full bg-emerald-500 origin-top h-full",
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: totalDuration, ease: "linear" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-4", children: steps.map((s, i) => {
        const currentStepDelay = i * stepDuration;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.5, delay: currentStepDelay },
            className: "relative pt-1 md:pt-8 col-span-1 flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-[-31px] top-[22px] h-4 w-4 rounded-full border border-border bg-background md:top-0 md:left-6 z-30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.5 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { delay: currentStepDelay, duration: 0.2 },
                    className: "absolute -inset-[1px] rounded-full border border-emerald-500 bg-background z-10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 m-auto h-2 w-2 rounded-full bg-foreground z-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { delay: currentStepDelay, duration: 0.2 },
                    className: "absolute inset-0 m-auto h-2 w-2 rounded-full bg-emerald-500 z-30"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-5 overflow-hidden h-full flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true, margin: "-60px" },
                    transition: { delay: currentStepDelay, duration: 0.4 },
                    className: "absolute inset-0 rounded-2xl border border-emerald-500 pointer-events-none z-10"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs font-medium text-muted-foreground", children: s.n }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-base font-semibold leading-snug", children: s.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs leading-relaxed text-muted-foreground", children: s.d })
                ] })
              ] })
            ]
          },
          s.n
        );
      }) })
    ] })
  ] });
}
export {
  Process
};
