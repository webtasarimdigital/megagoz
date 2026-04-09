import { MetadataRoute } from 'next';
import { TREATMENTS_DATA } from '@/data/treatments';

const baseUrl = 'https://megagoz.com'; // Kendi yayın alacağınız domain ile değiştirebilirsiniz

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['tr', 'en'];

  // Statik Sayfalar
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/doktorlar',
    '/kvkk',
    '/anlasmali-kurumlar',
    '/galeri',
    '/blog',
  ];

  const routes = locales.flatMap((locale) => {
    return staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }));
  });

  // Dinamik Tedavi Kategorileri ve Tedavi Detay Sayfaları
  const treatmentRoutes = locales.flatMap((locale) => {
    return TREATMENTS_DATA.flatMap((category) => {
      
      const categoryRoutes = [{
        url: `${baseUrl}/${locale}/tedaviler/${category.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }];

      const itemRoutes = category.items.map((item) => ({
        url: `${baseUrl}/${locale}/tedaviler/${category.id}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }));

      return [...categoryRoutes, ...itemRoutes];
    });
  });

  // Bilinen Blog Yazıları (Gelecekte CMS'e bağlanırsa burası da dinamikleşebilir)
  const blogSlugs = [
    'lazer-goz-ameliyati-goz-cizdirme-nedir',
    'goz-rengi-degistirmek-mumkun-mu',
    'katarakt-cerrahisinde-goz-ici-akilli-lens-devrimi'
  ];

  const blogRoutes = locales.flatMap((locale) => {
    return blogSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  });

  return [...routes, ...treatmentRoutes, ...blogRoutes];
}
