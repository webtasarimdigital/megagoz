import {useTranslations} from 'next-intl';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AppointmentFormSection from '@/components/AppointmentFormSection';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

// A/B Test Premium Components
import TechnologySection from '@/components/TechnologySection';
import PremiumStats from '@/components/PremiumStats';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  const t = useTranslations('Hero');

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSlider />
      {/* About Section */}
      <AboutSection />


      {/* OLD: Normal Services */}
      <ServicesSection />

      {/* Appointment Form Right Below Services */}
      <AppointmentFormSection />

      {/* Neden Megagöz Tabs */}
      <WhyChooseUsSection />

      {/* NEW: Ticker Stats (A/B Test) */}
      <PremiumStats />

      {/* BEFORE / AFTER */}
      <BeforeAfterSlider />

      <TechnologySection />

      <BlogSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
