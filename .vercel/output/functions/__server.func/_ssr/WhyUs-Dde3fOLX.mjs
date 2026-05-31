import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader } from "./Section-BeMi5sIs.mjs";
import { E as Eye, c as Compass, d as FileCheck2, T as TrendingUp, L as LifeBuoy } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const items = [
  { icon: Eye, title: "Transparent Process", desc: "Clear timelines, fees and milestones — always." },
  { icon: Compass, title: "Trusted Guidance", desc: "Personal consultants from application to arrival." },
  { icon: FileCheck2, title: "Fast Documentation", desc: "Streamlined paperwork with quick approvals." },
  { icon: TrendingUp, title: "High Success Rate", desc: "98%+ placement rate across active candidates." },
  { icon: LifeBuoy, title: "End-to-End Support", desc: "Pre-departure, arrival and onboarding support." }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "why-us", className: "border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Why choose us",
        title: "A consultancy you can trust.",
        desc: "Built on transparency, accuracy and outcomes — not promises."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.04 },
        className: "group rounded-3xl border border-border bg-card p-6 transition-all hover:border-border-strong hover:shadow-luxe",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: it.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: it.desc })
        ]
      },
      it.title
    )) })
  ] });
}
export {
  WhyUs
};
