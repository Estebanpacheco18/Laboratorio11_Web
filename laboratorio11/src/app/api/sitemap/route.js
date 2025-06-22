// Simula obtener datos de una "base de datos"
async function getBlogPosts() {
  // consulta real a una base de datos o CMS
  return [
    { slug: 'primer-post' },
    { slug: 'segundo-post' },
    { slug: 'tercer-post' }
  ];
}

export async function GET() {
  const blogPosts = await getBlogPosts();

  const dynamicRoutes = [
    '/',
    '/contact',
    '/blog',
    ...blogPosts.map(post => `/blog/${post.slug}`),
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