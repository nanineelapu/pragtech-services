export default function sitemap() {
  const baseUrl = 'https://pragtech.services';

  const routes = ['', '/about', '/services', '/projects', '/career', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
