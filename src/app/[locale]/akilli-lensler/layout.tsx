import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isTr = locale === "tr";
  
  return {
    title: isTr 
      ? "Akıllı Lensler ile Gözlüğe Veda Edin | MegaGöz" 
      : "Say Goodbye to Glasses with Smart Lenses | MegaGöz",
    description: isTr 
      ? "Ömür boyu kalıcı net görüş. Trifokal akıllı lensler ile uzak, orta ve yakın mesafede gözlük ihtiyacınızı tamamen ortadan kaldırın. Ücretsiz muayene için randevu alın." 
      : "Permanent clear vision for life. Eliminate your need for glasses at distance, intermediate, and near with Trifocal smart lenses. Book your free consultation.",
    alternates: {
      canonical: isTr ? '/tr/akilli-lensler' : '/en/smart-lenses',
      languages: {
        'tr': '/tr/akilli-lensler',
        'en': '/en/smart-lenses',
      },
    },
  };
}

export default function SmartLensesLayout({ children }: Props) {
  return <>{children}</>;
}
