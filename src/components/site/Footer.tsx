import { Instagram, Facebook } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const cols = [
  { title: "Services", items: ["Work Permit", "S Pass", "Employment Pass", "Study Visa"] },
  { title: "Sectors", items: ["Hospitality", "Logistics", "Industrial", "Retail"] },
  { title: "Company", items: ["About", "Process", "Testimonials", "Contact"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background">
                <img src={logo} className="font-display text-sm font-bold w-8 h-8 object-cover rounded-full" />
              </div>
              <span className="font-display text-base font-semibold">Singaway</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Trusted Singapore career consultancy & overseas placement specialists.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} target="_blank" href={`https://www.${i==0?'instagram':'facebook'}.com/${'singawaycareer'}`} aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-secondary">
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
                  <li key={it}><a href="#" className="text-foreground/80 hover:text-foreground">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}