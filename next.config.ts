import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Demo sayfaları arama motorlarına kapalı (sayfadaki <meta robots> etiketine ek güvence).
  // robots.txt'te Disallow EDİLMEZ: aksi hâlde Google noindex'i göremez.
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/demo", headers: noindex },
      { source: "/demo/:path*", headers: noindex },
      { source: "/:locale(tr|en)/demo", headers: noindex },
      { source: "/:locale(tr|en)/demo/:path*", headers: noindex },
    ];
  },
};

export default withNextIntl(nextConfig);
