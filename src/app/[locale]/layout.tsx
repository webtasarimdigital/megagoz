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
    shortcut: "/favicon-megagoz.jpg",
    apple: "/favicon-megagoz.jpg",
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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C778NQYZR5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C778NQYZR5');
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
              "logo": "https://www.megagoz.com/logo.webp",
              "image": "https://www.megagoz.com/logo.webp",
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
      <body className="overflow-x-hidden w-full relative antialiased bg-[#F8FAFC]" suppressHydrationWarning>

        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col w-screen max-w-[100vw] overflow-x-hidden min-h-screen relative">
            {children}
            <FloatingActions />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
