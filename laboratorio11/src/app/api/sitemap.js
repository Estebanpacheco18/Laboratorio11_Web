export async function GET(req) {
  // Ejemplo:
  const dynamicRoutes = [
    '/blog',
    '/contact',
    '/', // Home
  ];

  const baseUrl = 'https://misitio.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${dynamicRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}