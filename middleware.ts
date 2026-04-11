import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Sadece ilgili routerları locale middleware'inden geçir, static dosyaları geçirme
  matcher: [
    // Bütün root `/...` isteklerini locale prefix ekleyecek şekilde yakalıyoruz.
    // next-intl dökümantasyon standartı doğrultusunda.
    '/', '/(tr|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
