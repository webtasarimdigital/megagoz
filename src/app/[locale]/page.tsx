import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const t = useTranslations('Hero');

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
