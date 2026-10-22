import type { MetadataRoute } from 'next';
import { PORTFOLIO } from '@/lib/portfolio';

const BASE = 'https://avantilogix.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/services', '/portfolio', ...PORTFOLIO.map(({ slug }) => `/portfolio/${slug}`), '/industries', '/contact', '/privacy', '/terms', '/cookies'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
