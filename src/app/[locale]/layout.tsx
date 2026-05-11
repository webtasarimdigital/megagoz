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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCNQLB6Z');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C778NQYZR5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C778NQYZR5');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1285050596517320');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCNQLB6Z"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1285050596517320&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}

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
