import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css"; // Note the relative path adjust since it's now in [locale]
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Megagöz | Göz Sağlığı Merkezi, Ümraniye - İstanbul",
  description: "İstanbul Ümraniye'deki güvenilir adresiniz Megagöz. Gelişmiş teknoloji lazer tedavileri, katarakt ve akıllı lens ameliyatları için tam donanımlı polikliniğimizde uzman hekim kadromuzla yanınızdayız.",
  icons: {
    icon: "/favicon-megagoz.jpg",
  },
  verification: {
    google: "lq0sbHYeHizv6hQPY0KzxPzcMnyt8GYAtDTOsIS0-5M",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCNQLB6Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Megagöz Göz Sağlığı Merkezi",
              "url": "https://www.megagoz.com",
              "logo": "https://www.megagoz.com/logo.png",
              "image": "https://www.megagoz.com/logo.png",
              "description": "İstanbul Ümraniye'deki güvenilir adresiniz Megagöz. Gelişmiş teknoloji lazer tedavileri, katarakt ve akıllı lens ameliyatları için uzman hekim kadromuzla yanınızdayız.",
              "telephone": "4440320",
              "email": "info@megagoz.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "İhtisas Sokak. No:3",
                "addressLocality": "Ümraniye",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:30",
                "closes": "18:30"
              },
              "medicalSpecialty": [
                "Optometry",
                "PlasticSurgery",
                "Surgical"
              ]
            })
          }}
        />
      </head>
      <body className="overflow-x-hidden w-full relative">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCNQLB6Z"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
