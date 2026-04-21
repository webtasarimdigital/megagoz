"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Eye, Clock, Sparkles, ChevronRight } from "lucide-react";
import AppointmentFormSection from "@/components/AppointmentFormSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const content = {
  tr: {
    meta: {
      title: "Akıllı Lensler ile Gözlüğe Veda Edin | MegaGöz",
      desc: "Ömür boyu kalıcı net görüş. Trifokal akıllı lensler ile uzak, orta ve yakın mesafede gözlük ihtiyacınızı tamamen ortadan kaldırın."
    },
    hero: {
      badge: "PREMIUM LENS TEKNOLOJİSİ",
      title: "Gözlüklere Veda Edin,\nNet Görüşe Merhaba!",
      subtitle: "Akıllı Lens tedavisi ile uzak, orta ve yakın mesafelerde kusursuz görüşe sahip olun. Ömür boyu kalıcı çözüm ile dünyayı yeniden keşfedin.",
      cta: "Ücretsiz Randevu Al",
      stats: [
        { value: "10+", label: "Yıllık Tecrübe" },
        { value: "15dk", label: "Operasyon Süresi" },
        { value: "%99", label: "Başarı Oranı" }
      ]
    },
    benefits: {
      title: "Neden Akıllı Lens?",
      subtitle: "Gelişmiş teknolojisi ile yaşam kalitenizi artırır, sınırları ortadan kaldırır.",
      items: [
        {
          icon: <Eye className="w-8 h-8 text-[#dfa932]" />,
          title: "Kesintisiz Görüş",
          desc: "Uzak, yakın ve ara mesafelerde gözlüksüz net görüş sağlar.",
          image: "/images/slide1.webp"
        },
        {
          icon: <Clock className="w-8 h-8 text-[#dfa932]" />,
          title: "Ömür Boyu Kalıcı",
          desc: "Göz içine yerleştirilen mercek ömrünüz boyunca yapısını korur.",
          image: "/images/megagoz-tedavi-sonrasi.webp"
        },
        {
          icon: <Shield className="w-8 h-8 text-[#dfa932]" />,
          title: "Katarakt Oluşumunu Engeller",
          desc: "Doğal mercek değiştirildiği için katarakt riski sıfıra iner.",
          image: "/images/megagoz-katarakt-tedavisi.webp"
        },
        {
          icon: <Sparkles className="w-8 h-8 text-[#dfa932]" />,
          title: "Hızlı İyileşme",
          desc: "Aynı gün taburcu olur, birkaç gün içinde normal yaşama dönersiniz.",
          image: "/images/slide2.webp"
        }
      ]
    },
    types: {
      title: "Size En Uygun Lens Tipi Hangisi?",
      items: [
        {
          title: "Trifokal (Üç Odaklı) Akıllı Lensler",
          desc: "Uzak (araba kullanımı), orta (bilgisayar) ve yakın (kitap okuma) mesafede tam netlik. Gözlük bağımsızlığı isteyenler için idealdir.",
          image: "/images/megagoz-kontak-lens.webp"
        },
        {
          title: "Torik Akıllı Lensler",
          desc: "Hem uzak ve yakın görme kusurlarını hem de yüksek astigmatizmayı düzelten, kişiye özel üretilen lens çeşididir.",
          image: "/images/megagoz-toric-lens.webp"
        },
        {
          title: "EDOF (Uzatılmış Odak) Lensler",
          desc: "Uzak ve orta mesafede mükemmel ve kesintisiz odaklanma sağlayan yepyeni nesil premium lenslerdir.",
          image: "/images/slide3.webp"
        }
      ]
    }
  },
  en: {
    hero: {
      badge: "PREMIUM LENS TECHNOLOGY",
      title: "Say Goodbye to Glasses,\nHello to Clear Vision!",
      subtitle: "Achieve flawless vision at distance, intermediate, and near distances with Smart Lens treatment. Rediscover the world with a permanent lifetime solution.",
      cta: "Book Free Consultation",
      stats: [
        { value: "10+", label: "Years Experience" },
        { value: "15min", label: "Surgery Time" },
        { value: "99%", label: "Success Rate" }
      ]
    },
    benefits: {
      title: "Why Choose Smart Lenses?",
      subtitle: "Enhance your quality of life with advanced technology and remove all visual boundaries.",
      items: [
        {
          icon: <Eye className="w-8 h-8 text-[#dfa932]" />,
          title: "Continuous Vision",
          desc: "Provides clear, glasses-free vision at distance, near, and intermediate distances.",
          image: "/images/slide1.webp"
        },
        {
          icon: <Clock className="w-8 h-8 text-[#dfa932]" />,
          title: "Permanent for Life",
          desc: "The intraocular lens maintains its structure throughout your life.",
          image: "/images/megagoz-tedavi-sonrasi.webp"
        },
        {
          icon: <Shield className="w-8 h-8 text-[#dfa932]" />,
          title: "Prevents Cataracts",
          desc: "Since the natural lens is replaced, cataract risk becomes zero.",
          image: "/images/megagoz-katarakt-tedavisi.webp"
        },
        {
          icon: <Sparkles className="w-8 h-8 text-[#dfa932]" />,
          title: "Rapid Recovery",
          desc: "Return home on the same day and resume normal life quickly.",
          image: "/images/slide2.webp"
        }
      ]
    },
    types: {
      title: "Which Lens Type is Right For You?",
      items: [
        {
          title: "Trifocal Smart Lenses",
          desc: "Full clarity at distance (driving), intermediate (computer) and near (reading). Ideal for total glasses independence.",
          image: "/images/megagoz-kontak-lens.webp"
        },
        {
          title: "Toric Smart Lenses",
          desc: "Custom-made lenses specifically tailored to correct high astigmatism along with near and distance vision flaws.",
          image: "/images/megagoz-toric-lens.webp"
        },
        {
          title: "EDOF (Extended Depth) Lenses",
          desc: "The brand new generation premium lenses providing excellent, continuous focus at distance and intermediate ranges.",
          image: "/images/slide3.webp"
        }
      ]
    }
  }
};

export default function SmartLensesPage() {
  const locale = useLocale();
  const t = locale === "tr" ? content.tr : content.en;

  const scrollToForm = () => {
    const formElement = document.getElementById('appointment-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafc]">
      
      {/* HERO SECTION - Visual Heavy */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#162f5d]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/megagoz-kontak-lens.webp"
            alt="Smart Lenses"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#162f5d] via-[#162f5d]/90 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-white"
            >
              <div className="flex items-center gap-3 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#dfa932]" />
                <span className="text-[#dfa932] font-semibold tracking-wider text-xs uppercase">{t.hero.badge}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.1] mb-6 text-white whitespace-pre-line tracking-tight">
                {t.hero.title}
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                {t.hero.subtitle}
              </p>

              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#dfa932] to-[#b88924] hover:from-[#cda669] hover:to-[#dfa932] text-white font-bold text-sm md:text-base tracking-widest uppercase rounded-xl px-10 py-5 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-[#dfa932]/20"
              >
                {t.hero.cta} <ChevronRight className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10 w-full max-w-lg">
                {t.hero.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                    <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER - Interactive Visual */}
      <div className="bg-white -mt-10 relative z-20 rounded-t-[3rem] pt-10 shadow-[0_-15px_40px_rgba(0,0,0,0.1)]">
         <BeforeAfterSlider />
      </div>

      {/* WHY SMART LENSES - Aesthetic Alternating Image Blocks */}
      <section className="py-24 bg-[#fafafc] relative">
        <div className="container px-6 max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#162f5d] mb-4">{t.benefits.title}</h2>
            <p className="text-gray-500 text-lg">{t.benefits.subtitle}</p>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {t.benefits.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                   <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                     <Image 
                       src={item.image} 
                       alt={item.title} 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-[#162f5d]/10 group-hover:bg-transparent transition-colors duration-500" />
                   </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center lg:px-10">
                   <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-gray-50">
                     {item.icon}
                   </div>
                   <h3 className="text-3xl font-bold text-[#162f5d] mb-4">{item.title}</h3>
                   <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                   
                   <ul className="mt-8 space-y-3">
                     <li className="flex items-center gap-3 text-[#162f5d] font-medium">
                       <CheckCircle2 className="w-5 h-5 text-[#dfa932]" /> {locale === 'tr' ? 'Uzman Kadro' : 'Expert Staff'}
                     </li>
                     <li className="flex items-center gap-3 text-[#162f5d] font-medium">
                       <CheckCircle2 className="w-5 h-5 text-[#dfa932]" /> {locale === 'tr' ? 'Modern Teknoloji' : 'Modern Technology'}
                     </li>
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LENS TYPES - Rich Image Cards */}
      <section className="py-24 bg-[#162f5d] relative overflow-hidden">
        {/* Background Visual Artifact */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#dfa932] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 rounded-full blur-[150px] opacity-20 pointer-events-none" />

        <div className="container px-6 max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">{t.types.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.types.items.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                   <Image 
                     src={type.image} 
                     alt={type.title}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                   />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-white mb-4">{type.title}</h4>
                  <p className="text-gray-300 leading-relaxed opacity-90">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM SECTION */}
      <div id="appointment-section" className="bg-[#fafafc] pt-10 pb-10">
        <div className="max-w-4xl mx-auto text-center px-6 mb-[-100px] relative z-10">
           <h2 className="text-3xl lg:text-5xl font-black text-[#162f5d] mb-4">
             {locale === 'tr' ? 'Gözlerinizi Sınırlamayın, Ertelemeyin!' : 'Don\'t Limit Your Eyes, Don\'t Delay!'}
           </h2>
           <p className="text-gray-500 text-lg">
             {locale === 'tr' ? 'Hemen randevu talebinizi iletin, uzman asistanlarımız saniyeler içinde sizi arasın.' : 'Submit your appointment request now, and our expert assistants will call you in seconds.'}
           </p>
        </div>
        <AppointmentFormSection />
      </div>

    </main>
  );
}
