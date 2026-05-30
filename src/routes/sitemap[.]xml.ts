import { createFileRoute } from '@tanstack/react-router'
import { SITE_URL } from '@/lib/seo'

interface SitemapEntry {
  path: string
  lastmod: string
  changefreq:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority: string
}

export const Route = createFileRoute('/sitemap.xml')({
  loader: async () => {
    const lastmod = new Date().toISOString().slice(0, 10)

    const entries: SitemapEntry[] = [
      {
        path: '/',
        lastmod,
        changefreq: 'weekly',
        priority: '1.0',
      },
    ]

    const urls = entries.map(
      (e) =>
        `<url><loc>${SITE_URL}${e.path}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
    )

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  },
})
