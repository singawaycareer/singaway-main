import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader } from "./Section-BeMi5sIs.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const IMAGES = {
  skyline: "/images/bg.webp",
  warehouse: "/images/warehouse.webp",
  student: "/images/student.webp",
  airport: "/images/airport.webp"
};
const benefits = [
  "Better Salary Opportunities",
  "International Exposure",
  "Safe & Clean Environment",
  "High Quality Education",
  "Career Growth",
  "Stable Future",
  "Modern Lifestyle",
  "Global Work Culture"
];
const stats = [
  { k: "Top 5", v: "Global financial hub" },
  { k: "1.4M+", v: "Foreign professionals" },
  { k: "98%", v: "Literacy rate" },
  { k: "S$2.0K+", v: "Avg. starting salary" }
];
function WhySingapore() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "why", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Why Singapore",
        title: "Why Choose Singapore?",
        desc: "A global hub for opportunity — combining career mobility, world-class education and one of the safest, most modern cities in Asia."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-12 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "col-span-12 overflow-hidden rounded-3xl border border-border md:col-span-7",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: IMAGES.skyline,
              loading: "lazy",
              decoding: "async",
              alt: "Singapore skyline",
              width: 960,
              height: 540,
              className: "h-72 w-full object-cover sm:h-[420px]"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 grid grid-cols-2 gap-3 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.15 },
            src: IMAGES.warehouse,
            loading: "lazy",
            decoding: "async",
            alt: "Singapore warehouse jobs",
            width: 640,
            height: 400,
            className: "h-44 w-full rounded-3xl border border-border object-cover sm:h-[206px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.1 },
            src: IMAGES.student,
            loading: "lazy",
            decoding: "async",
            alt: "Student on campus in Singapore",
            width: 640,
            height: 400,
            className: "h-44 w-full rounded-3xl border border-border object-cover sm:h-[206px]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.15 },
            src: IMAGES.airport,
            loading: "lazy",
            decoding: "async",
            alt: "Singapore airport operations jobs",
            width: 960,
            height: 400,
            className: "col-span-2 h-44 w-full rounded-3xl border border-border object-center sm:h-[206px]"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.03 },
        className: "rounded-2xl border border-border bg-surface px-4 py-3 text-sm",
        children: b
      },
      b
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 divide-x divide-border rounded-3xl border border-border bg-card sm:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.v })
    ] }, s.v)) })
  ] });
}
export {
  WhySingapore
};
