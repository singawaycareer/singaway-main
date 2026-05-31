import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, h as Phone, S as ShieldCheck, U as Users, B as BadgeCheck, G as GraduationCap } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const HERO_IMAGE = "/images/merlion.webp";
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
};
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden pt-28 sm:pt-36", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-secondary to-transparent blur-3xl opacity-70" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mx-auto inline-flex w-full justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-600" }),
            "Singapore Career & Visa Consultancy"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          ...fadeUp,
          transition: { duration: 0.7, delay: 0.05 },
          className: "mt-6 text-balance text-center font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl",
          children: [
            "Build Your Future",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ", children: "in " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ", children: "Singapore." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          ...fadeUp,
          transition: { duration: 0.7, delay: 0.15 },
          className: "mx-auto mt-6 max-w-2xl text-balance text-center text-base text-muted-foreground sm:text-lg",
          children: "We help candidates secure Singapore jobs, work permits, and study visas with trusted guidance and end-to-end professional support."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ...fadeUp,
          transition: { duration: 0.7, delay: 0.25 },
          className: "mt-8 flex flex-wrap items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
                children: [
                  "Apply Now",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " Free Consultation"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
          className: "relative mx-auto mt-14 sm:mt-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[28px] border border-border bg-surface shadow-luxe", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: HERO_IMAGE,
                  alt: "Singapore Marina Bay skyline",
                  width: 1280,
                  height: 720,
                  fetchPriority: "high",
                  decoding: "async",
                  className: "h-[340px] w-full object-cover sm:h-[520px]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -20, y: 20 },
                  animate: { opacity: 1, x: 0, y: 0 },
                  transition: { delay: 0.7, duration: 0.6 },
                  className: "absolute left-4 top-4 hidden rounded-2xl border border-border glass-strong p-3 shadow-luxe sm:left-6 sm:top-6 sm:flex",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-accent-foreground font-semibold", children: "Your Success , Our Priority" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 20, y: 20 },
                  animate: { opacity: 1, x: 0, y: 0 },
                  transition: { delay: 0.85, duration: 0.6 },
                  className: "absolute bottom-4 right-4 hidden rounded-2xl border border-border glass-strong p-4 shadow-luxe sm:bottom-6 sm:right-6 sm:flex",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Success rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold leading-none", children: "98.4%" })
                    ] })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4", children: [
              { icon: Users, k: "5,000+", v: "Candidates Assisted" },
              { icon: BadgeCheck, k: "Verified", v: "Singapore Employers" },
              { icon: GraduationCap, k: "Study Visa", v: "End-to-End Guidance" },
              { icon: ShieldCheck, k: "Trusted", v: "Licensed Consultants" }
            ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.05 * i },
                className: "rounded-2xl border border-border bg-card p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-xl font-semibold tracking-tight", children: s.k }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.v })
                ]
              },
              i
            )) })
          ]
        }
      )
    ] })
  ] });
}
const Services = reactExports.lazy(() => import("./Services-U-iRfdY2.mjs").then((m) => ({
  default: m.Services
})));
const WhySingapore = reactExports.lazy(() => import("./WhySingapore-DvnjvB0o.mjs").then((m) => ({
  default: m.WhySingapore
})));
const WhyUs = reactExports.lazy(() => import("./WhyUs-Dde3fOLX.mjs").then((m) => ({
  default: m.WhyUs
})));
const Process = reactExports.lazy(() => import("./Process-Dbtvi8yi.mjs").then((m) => ({
  default: m.Process
})));
const StudyVisa = reactExports.lazy(() => import("./StudyVisa-BY04zyCl.mjs").then((m) => ({
  default: m.StudyVisa
})));
const FAQ = reactExports.lazy(() => import("./FAQ-BcvnNYEP.mjs").then((m) => ({
  default: m.FAQ
})));
const Contact = reactExports.lazy(() => import("./Contact-uUbbTQsp.mjs").then((m) => ({
  default: m.Contact
})));
const WhatsAppButton = reactExports.lazy(() => import("./Whatsapp-D68gLI05.mjs").then((m) => ({
  default: m.WhatsAppButton
})));
function BelowFold() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhySingapore, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StudyVisa, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BelowFold, {}) })
  ] });
}
export {
  Index as component
};
