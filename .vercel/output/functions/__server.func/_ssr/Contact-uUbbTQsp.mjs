import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-BeMi5sIs.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { h as Phone, M as Mail, f as MapPin, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Ring({ className, style, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes loading-ui-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: cn(className),
        style: {
          animationName: "loading-ui-ring-spin",
          animationDuration: "var(--duration, 1s)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          ...style
        },
        ...props,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M21 12.0004C20.9999 13.901 20.3981 15.7528 19.2809 17.2904C18.1637 18.8279 16.5885 19.9723 14.7809 20.5596C12.9733 21.1469 11.0262 21.1468 9.21864 20.5594C7.41109 19.9721 5.83588 18.8276 4.71876 17.29C3.60165 15.7523 2.99999 13.9005 3 11.9999C3.00001 10.0993 3.60171 8.24755 4.71884 6.70994C5.83598 5.17233 7.4112 4.02785 9.21877 3.44052C11.0263 2.85319 12.9734 2.85316 14.781 3.44044",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    )
  ] });
}
const services = [
  "Singapore Work Permit",
  "S Pass",
  "Employment Pass",
  "Study Visa",
  "Career Consultation",
  "Job Placement"
];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (sent || loading) return;
    try {
      setLoading(true);
      const response = await fetch(
        `${"https://singaway-backend-production.up.railway.app"}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }
      );
      if (response.ok) {
        setSent(true);
        alert("Email sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl", children: "Start your Singapore journey." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-muted-foreground", children: "Tell us about your goals. A consultant will reach out within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: "flex items-center gap-3 text-foreground/90 hover:text-foreground",
            href: "tel:+917888727497",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
              "+91 78887 27497"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            className: "flex items-center gap-3 text-foreground/90 hover:text-foreground",
            href: "mailto:singawaycareer@gmail.com",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
              "singawaycareer@gmail.com"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.google.com/maps/dir//SINGAWAY+TRADE+AND+TEST+CENTRE+PVT.+LTD.,+4th+Floor,+MOTIAZ+ROYAL+BUSINESS+PARK,+404,+Zirakpur,+Punjab+140603/@28.5900635,77.2290188,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390febe6746fe86b:0x18af830c46df0681!2m2!1d76.8247521!2d30.6329049?hl=en-in&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
            target: "_blank",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 text-foreground/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl border border-border cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) }),
              "#404, 4th Floor, MOTIAZ ROYAL BUSINESS PARK, Zirakpur, Punjab 140603"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        onSubmit: handleSubmit(onSubmit),
        className: "lg:col-span-3 rounded-3xl border border-border glass-strong p-6 shadow-luxe sm:p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Full Name",
                placeholder: "Your full name",
                required: true,
                disabled: sent || loading,
                ...register("name")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Phone / WhatsApp",
                placeholder: "+91 ...",
                required: true,
                disabled: sent || loading,
                ...register("phone")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Email",
                type: "email",
                placeholder: "you@email.com",
                required: true,
                disabled: sent || loading,
                ...register("email")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: "Interested Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  disabled: sent || loading,
                  ...register("service"),
                  className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-foreground",
                  children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  ...register("message"),
                  rows: 4,
                  disabled: sent || loading,
                  placeholder: "Tell us about your background and goals…",
                  className: "w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-foreground"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
              children: [
                loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ring, { className: "h-4 w-4 animate-spin" }),
                  "Sending..."
                ] }) : sent ? "Thank you — we'll be in touch" : "Send enquiry",
                !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "By submitting, our team will contact you as soon as possible to guide you further. We’re here to help at every step." })
        ]
      }
    )
  ] }) });
}
function Field(props) {
  const { label, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ...rest,
        className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-foreground"
      }
    )
  ] });
}
export {
  Contact
};
