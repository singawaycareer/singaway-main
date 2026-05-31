import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl", children: title }),
        desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: desc })
      ]
    }
  );
}
function Section({
  id,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `mx-auto w-full max-w-6xl px-5 py-24 sm:py-32 ${className}`, children });
}
export {
  Section as S,
  SectionHeader as a
};
