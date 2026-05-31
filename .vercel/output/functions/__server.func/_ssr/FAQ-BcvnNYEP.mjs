import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, a as SectionHeader } from "./Section-BeMi5sIs.mjs";
import { F as FAQS } from "./router-B2Ht7d39.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { j as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "faq", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "FAQ", title: "Questions, answered." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card", children: FAQS.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: i > 0 ? "border-t border-border" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            className: "flex w-full items-center justify-between gap-4 p-5 text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-medium sm:text-lg", children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: { rotate: isOpen ? 45 : 0 }, className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-sm text-muted-foreground", children: f.a })
          }
        ) })
      ] }, f.q);
    }) }) })
  ] }) });
}
export {
  FAQ
};
