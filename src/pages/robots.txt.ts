export const GET = () => {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://seniorgeek.ca/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
};
