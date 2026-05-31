import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader } from "./Section-BeMi5sIs.mjs";
import { d as FileCheck2, I as IdCard, a as Briefcase, G as GraduationCap, b as Building2, P as PackageCheck, l as Truck, i as Plane, m as UtensilsCrossed, k as ShoppingBag } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const work = [
  {
    icon: FileCheck2,
    title: "Singapore Work Permit",
    desc: "End-to-end work permit processing & employer matching."
  },
  {
    icon: IdCard,
    title: "S Pass Assistance",
    desc: "Eligibility review, documentation and submission."
  },
  {
    icon: Briefcase,
    title: "Employment Pass",
    desc: "Strategic guidance for skilled professionals & EP holders."
  },
  {
    icon: GraduationCap,
    title: "Study Visa Guidance",
    desc: "Universities, admissions & visa documentation."
  }
];
const sectors = [
  {
    icon: Building2,
    title: "Hospitality & Cleaning",
    items: [
      "Condo Cleaning",
      "Housekeeping",
      "Waiters",
      "Cooks",
      "Helpers",
      "House Maids"
    ]
  },
  {
    icon: PackageCheck,
    title: "Industrial & Labor",
    items: ["Packing", "Material Handling", "Site Safety", "General Labor"]
  },
  {
    icon: Truck,
    title: "Logistics",
    items: ["Warehouse", "Loading & Unloading", "Drivers", "Delivery"]
  },
  {
    icon: Plane,
    title: "Airport Operations",
    items: ["Airport Cleaning", "Ground Support", "Baggage Handling"]
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Kitchen",
    items: ["Kitchen Assistants", "Dishwashing", "Service Crew"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & Hotels",
    items: ["Retail Staff", "Hotel Support", "Front Desk"]
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "services", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "What we do",
          title: "Our Services",
          desc: "A complete consultancy for jobs, visas, and overseas placement — designed for clarity, speed and trust."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#contact",
          className: "hidden text-sm font-medium shrink-0 text-muted-foreground hover:text-foreground sm:inline-block pb-1",
          children: "Talk to a consultant →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6", children: work.map((s, i) => {
      const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i * 0.04 },
          className: `group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-border-strong hover:shadow-luxe col-span-1 ${span}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "0",
                i + 1
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-semibold tracking-tight", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-secondary opacity-0 blur-2xl transition-opacity group-hover:opacity-80" })
          ]
        },
        s.title
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Job Sectors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl", children: "Active hiring across Singapore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: sectors.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i * 0.03 },
          className: "rounded-3xl border border-border bg-card p-6 hover:border-border-strong flex flex-col justify-between",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-semibold", children: s.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "li",
              {
                className: "rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground",
                children: it
              },
              it
            )) })
          ] })
        },
        s.title
      )) })
    ] })
  ] });
}
export {
  Services
};
