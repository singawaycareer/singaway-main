import { b as createRouter, a as createRootRouteWithContext, H as HeadContent, S as Scripts, O as Outlet, c as createFileRoute, l as lazyRouteComponent, u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, X, g as Menu, e as Instagram, F as Facebook } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-HSe94f7D.css";
const logo = "/assets/logo--LC0MGO1.jpeg";
const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  // { label: "Jobs", href: "#jobs" },
  { label: "Study Visa", href: "#study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.nav,
      {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        className: `flex w-full max-w-6xl items-center justify-between rounded-full border border-border/70 px-4 py-2 sm:px-5 sm:py-2.5 transition-all ${scrolled ? "glass-strong shadow-luxe" : "glass"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "font-display text-sm font-bold w-12 h-12 object-cover rounded-full " }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-base font-semibold tracking-tight", children: [
              "Singaway",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
                children: [
                  "Apply Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "grid h-9 w-9 place-items-center rounded-full border border-border md:hidden",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        className: "absolute left-3 right-3 top-16 rounded-3xl border border-border glass-strong shadow-luxe md:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-3", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-secondary",
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background",
              children: [
                "Apply Now ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      }
    ) })
  ] });
}
const SITE_URL = "https://www.singawaycareer.com";
const SITE_NAME = "SingAway Career";
const SITE_SHORT_NAME = "Singaway";
const SITE_TAGLINE = "Singapore Career & Visa Consultancy";
const DEFAULT_TITLE = "SingAway Career — Singapore Jobs, Work Permits, S Pass & Study Visa Consultancy";
const DEFAULT_DESCRIPTION = "Licensed Singapore career consultancy for Indians and international candidates. Work permit, S Pass, Employment Pass, study visa, job placement and overseas recruitment — free consultation, 98%+ success rate.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const BUSINESS = {
  email: "singawaycareer@gmail.com",
  phone: "+917888727497",
  address: {
    street: "#404, 4th Floor, MOTIAZ ROYAL BUSINESS PARK",
    locality: "Zirakpur",
    region: "Punjab",
    postalCode: "140603",
    country: "IN"
  },
  geo: {
    latitude: 30.6329049,
    longitude: 76.8247521
  },
  sameAs: [
    "https://www.instagram.com/singawaycareer",
    "https://www.facebook.com/singawaycareer"
  ]
};
const SERVICES = [
  {
    name: "Singapore Work Permit",
    description: "End-to-end work permit processing, employer matching and documentation for candidates seeking jobs in Singapore."
  },
  {
    name: "S Pass Assistance",
    description: "Eligibility review, document preparation and MOM submission support for mid-skilled S Pass applicants."
  },
  {
    name: "Employment Pass",
    description: "Strategic guidance for skilled professionals applying for Singapore Employment Pass (EP)."
  },
  {
    name: "Study Visa Guidance",
    description: "University shortlisting, admission support, student visa documentation and pre-departure briefing."
  },
  {
    name: "Career Consultation & Job Placement",
    description: "Free consultation, profile review and placement across hospitality, logistics, industrial, retail and airport roles."
  }
];
const FAQS = [
  {
    q: "How long does the Singapore job placement process take?",
    a: "Most candidates are placed within 2–4 weeks depending on the role, documentation completeness and visa category (work permit, S Pass or EP)."
  },
  {
    q: "What documents are needed for a Singapore work permit?",
    a: "A valid passport, recent photographs, education certificates, work experience letters and any role-specific certifications requested by the employer or MOM."
  },
  {
    q: "Do you provide work permits and S Pass support?",
    a: "Yes. We handle the full Singapore work permit, S Pass and Employment Pass process in coordination with verified employers."
  },
  {
    q: "Can you help with study visas to Singapore?",
    a: "Yes. We support university shortlisting, admissions, student visa documentation, pre-departure briefing and accommodation guidance on arrival."
  },
  {
    q: "Which job categories are available in Singapore?",
    a: "Hospitality, cleaning, warehouse, logistics, drivers, retail, factory, kitchen, airport operations and skilled professional roles."
  },
  {
    q: "What salary range can I expect in Singapore?",
    a: "Entry-level work permit roles typically range from S$1,700 to S$2,800 per month plus accommodation or allowances, depending on employer and sector."
  }
];
const addressJsonLd = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.country
};
function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_SHORT_NAME, "Singaway Career", "SingAway"],
    url: SITE_URL,
    image: OG_IMAGE,
    logo: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: addressJsonLd,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude
    },
    areaServed: [
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "India" }
    ],
    serviceType: SERVICES.map((s) => s.name),
    sameAs: BUSINESS.sameAs,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00"
    }
  };
}
function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en"
  };
}
function buildFAQPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
}
function buildServiceListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Singapore visa and career services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Singapore" }
      }
    }))
  };
}
function buildHomePageJsonLd() {
  const organization = buildOrganizationJsonLd();
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        ...buildWebSiteJsonLd(),
        publisher: { "@id": `${SITE_URL}/#organization` }
      },
      buildFAQPageJsonLd(),
      buildServiceListJsonLd(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL
          }
        ]
      }
    ]
  };
}
function jsonLdScript(data) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data)
  };
}
function buildRootMeta() {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: DEFAULT_DESCRIPTION },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    {
      name: "keywords",
      content: "Singapore jobs, Singapore work permit, S Pass Singapore, Employment Pass, study visa Singapore, overseas job consultancy India, Singapore recruitment agency, work in Singapore"
    },
    { name: "theme-color", content: "#0a0a0a" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_SG" },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: OG_IMAGE },
    ...[]
  ];
}
function buildPageMeta(options) {
  const title = DEFAULT_TITLE;
  const description = DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${"/"}`;
  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: `${SITE_NAME} — ${SITE_TAGLINE}` }
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "icon", type: "image/jpeg", href: "/og-image.jpg" },
      { rel: "apple-touch-icon", href: "/og-image.jpg" }
    ]
  };
}
const cols = [
  {
    title: "Services",
    items: [
      { label: "Work Permit", href: "#services" },
      { label: "S Pass", href: "#services" },
      { label: "Employment Pass", href: "#services" },
      { label: "Study Visa", href: "#study" }
    ]
  },
  {
    title: "Sectors",
    items: [
      { label: "Hospitality", href: "#services" },
      { label: "Logistics", href: "#services" },
      { label: "Industrial", href: "#services" },
      { label: "Retail", href: "#services" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "Why Singapore", href: "#why" },
      { label: "Process", href: "#process" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-5 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: `${SITE_NAME} logo`,
            width: 32,
            height: 32,
            className: "font-display text-sm font-bold w-8 h-8 object-cover rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-semibold", children: SITE_NAME })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "Trusted Singapore career consultancy & overseas placement specialists." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-2", children: [Instagram, Facebook].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          href: `https://www.${i === 0 ? "instagram" : "facebook"}.com/singawaycareer`,
          "aria-label": i === 0 ? "Instagram" : "Facebook",
          className: "grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
        },
        i
      )) })
    ] }),
    cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: c.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: it.href, className: "text-foreground/80 hover:text-foreground", children: it.label }) }, it.label)) })
    ] }, c.title))
  ] }) }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    title: DEFAULT_TITLE,
    meta: buildRootMeta(),
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "preconnect",
        href: "https://api.fontshare.com",
        crossOrigin: "anonymous"
      },
      { rel: "preload", href: "/images/merlion.webp", as: "image", type: "image/webp" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { suppressHydrationWarning: true, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Route$1 = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const lastmod = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const entries = [
      {
        path: "/",
        lastmod,
        changefreq: "weekly",
        priority: "1.0"
      }
    ];
    const urls = entries.map(
      (e) => `<url><loc>${SITE_URL}${e.path}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
    );
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400"
      }
    });
  }
});
const $$splitComponentImporter = () => import("./index-Doo3cCOo.mjs");
const Route = createFileRoute("/")({
  head: () => {
    const page = buildPageMeta();
    return {
      ...page,
      scripts: [jsonLdScript(buildHomePageJsonLd())]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$1.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FAQS as F,
  router as r
};
