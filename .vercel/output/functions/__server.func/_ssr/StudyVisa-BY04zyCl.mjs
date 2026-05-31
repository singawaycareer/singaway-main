import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-BeMi5sIs.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Check, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STUDENT_IMAGE = "/images/student.webp";
const points = [
  "Admission & application support",
  "Student visa documentation",
  "Pre-departure briefing",
  "Accommodation help on arrival"
];
function StudyVisa() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "study", className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-10 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative overflow-hidden rounded-3xl border border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: STUDENT_IMAGE,
              alt: "Student in Singapore",
              loading: "lazy",
              decoding: "async",
              width: 640,
              height: 800,
              className: "h-[420px] w-full object-cover sm:h-[520px]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 rounded-2xl border border-border glass-strong p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Study in Singapore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-lg font-semibold", children: "From application to arrival." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Study Visa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl", children: "World-class education, simplified." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2", children: points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-5 w-5 place-items-center rounded-full border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
        p
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          className: "mt-10 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
          children: [
            "Talk to a student counselor ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
export {
  StudyVisa
};
