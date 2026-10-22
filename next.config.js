/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No remote image hosts are currently used by the app (all images are served
  // from /public), so the remote patterns allowlist is intentionally empty.
  // Add an entry here only when a specific external image host is needed.
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  // Legacy WordPress-era URLs permanently redirect to their canonical replacements.
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/clients', destination: '/industries', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
    ];
  },
  // Mirrors the headers set in netlify.toml so the same protections apply
  // when the app is run outside of Netlify (e.g. `next start`, other hosts).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
