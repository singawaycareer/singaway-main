import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://singawaycareer.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const entries: SitemapEntry[] = [
      {
        path: "/",
        changefreq: "weekly",
        priority: "1.0",
      },
    ];

    const urls = entries.map((e) =>
      [
        `<url>`,
        `<loc>${BASE_URL}${e.path}</loc>`,
        e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : "",
        e.changefreq ? `<changefreq>${e.changefreq}</changefreq>` : "",
        e.priority ? `<priority>${e.priority}</priority>` : "",
        `</url>`,
      ]
        .filter(Boolean)
        .join("")
    );

    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("")}
      </urlset>
    `;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  },
});