export const GET = () => {
  const baseUrl = 'https://seniorgeek.ca';

  const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/services/', changefreq: 'monthly', priority: 0.9 },
    { url: '/services/aines/', changefreq: 'monthly', priority: 0.9 },
    { url: '/services/proches/', changefreq: 'monthly', priority: 0.9 },
    { url: '/services/residences/', changefreq: 'monthly', priority: 0.9 },
    { url: '/fraudes/', changefreq: 'weekly', priority: 0.8 },
    { url: '/tarifs/', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact/', changefreq: 'monthly', priority: 0.8 },
    { url: '/partenariat/', changefreq: 'monthly', priority: 0.7 },
    { url: '/qui-sommes-nous/', changefreq: 'monthly', priority: 0.7 },
    { url: '/a-propos/', changefreq: 'monthly', priority: 0.7 },
    { url: '/nos-valeurs/', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog/reconnaitre-faux-appel-urgence/', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/mot-code-familial-protection/', changefreq: 'monthly', priority: 0.7 },
    { url: '/urgence-numerique/', changefreq: 'weekly', priority: 0.7 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages
    .map((page) => {
      const lastmod = new Date().toISOString().split('T')[0];
      return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
