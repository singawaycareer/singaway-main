import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { SITE_NAME } from "@/lib/seo";

const cols = [
  {
    title: "Services",
    items: [
      { label: "Work Permit", href: "#services" },
      { label: "S Pass", href: "#services" },
      { label: "Employment Pass", href: "#services" },
      { label: "Study Visa", href: "#study" },
    ],
  },
  {
    title: "Sectors",
    items: [
      { label: "Hospitality", href: "#services" },
      { label: "Logistics", href: "#services" },
      { label: "Industrial", href: "#services" },
      { label: "Retail", href: "#services" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Why Singapore", href: "#why" },
      { label: "Process", href: "#process" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background">
                <img
                  src={logo}
                  alt={`${SITE_NAME} logo`}
                  width={32}
                  height={32}
                  className="font-display text-sm font-bold w-8 h-8 object-cover rounded-full"
                />
              </div>
              <span className="font-display text-base font-semibold">{SITE_NAME}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Trusted Singapore career consultancy & overseas placement specialists.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.${i === 0 ? "instagram" : "facebook"}.com/singawaycareer`}
                  aria-label={i === 0 ? "Instagram" : "Facebook"}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="text-foreground/80 hover:text-foreground">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
