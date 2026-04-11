"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const SERVICES = [
  { id: 0, slug: "katarakt", title: "Katarakt", titleEn: "Cataract Surgery", image: "/images/megagoz-katarakt-tedavisi.webp", desc: "Zamanla matlaşan göz merceğinin temizlenmesi ve şeffaf lens ile değiştirilmesi.", descEn: "Cleaning of the eye lens that has become cloudy over time and replacing it with a transparent lens." },
  { id: 1, slug: "lazer-tedavisi", title: "Lazer Tedavisi", titleEn: "Laser Eye Surgery", image: "/images/megagoz-lazer-tedavisi,.webp", desc: "Miyop, hipermetrop ve astigmatizmanın saniyeler içinde kalıcı olarak düzeltilmesi.", descEn: "Permanent correction of myopia, hypermetropia, and astigmatism in seconds." },
  { id: 2, slug: "kontak-lens", title: "Kontak Lens", titleEn: "Contact Lenses", image: "/images/megagoz-kontak-lens.webp", desc: "Kişiye özel lens uyumu ve göz sağlığına en uygun lens seçimi.", descEn: "Personalized lens fitting and selection of the most suitable lenses for eye health." },
  { id: 3, slug: "goz-norolojisi", title: "Göz Nörolojisi", titleEn: "Eye Neurology", image: "/images/megagoz-goz-norolojisi.webp", desc: "Görme sinirleri ve beyinle ilgili oftalmolojik görme kayıplarının tedavisi.", descEn: "Treatment of ophthalmological vision loss related to the optic nerves and brain." },
  { id: 4, slug: "kornea-hastaliklari", title: "Kornea Hastalıkları", titleEn: "Corneal Diseases", image: "/images/megagoz-kornea-tedavisi.webp", desc: "Korneanın yapısını bozan keratokonus ve benzeri hastalıkların tanı ve tedavisi.", descEn: "Diagnosis and treatment of keratoconus and similar diseases that disrupt the corneal structure." },
  { id: 5, slug: "glokom", title: "Glokom Tedavisi", titleEn: "Glaucoma Treatment", image: "/images/megagoz-glukom-tedavisi.webp", desc: "Göz tansiyonuna bağlı sinir hasarlarının erken teşhisi ve tedavisi.", descEn: "Early diagnosis and treatment of nerve damage caused by eye pressure." },
  { id: 6, slug: "sasilik", title: "Şaşılık Tedavisi", titleEn: "Strabismus Treatment", image: "/images/megagoz-sasilik-tedavisi.webp", desc: "Gözlerin paralel bakışının bozulduğu durumların cerrahi veya medikal tedavisi.", descEn: "Surgical or medical treatment of conditions where the parallel gaze of the eyes is disrupted." },
  { id: 7, slug: "uveit", title: "Üveit Tedavisi", titleEn: "Uveitis Treatment", image: "/images/megagoz-uveit-tedavisi.webp", desc: "Gözün içindeki damar tabakasının iltihaplanmasının ileri tetkiklerle tedavisi.", descEn: "Treatment of inflammation in the vascular layer of the eye with advanced diagnostics." },
  { id: 8, slug: "goz-kapagi-estetigi", title: "Göz Kapağı Estetiği", titleEn: "Eyelid Aesthetics", image: "/images/megagoz-goz-kapagi-tedavisi.webp", desc: "Düşük veya torbalanmış göz kapaklarının blefaroplasti ile estetik düzeltilmesi.", descEn: "Aesthetic correction of drooping or bagged eyelids with blepharoplasty." },
  { id: 9, slug: "cocuk-goz-sagligi", title: "Çocuk Göz Sağlığı", titleEn: "Pediatric Eye Health", image: "/images/megagoz-cocuk-goz-tedavisi.webp", desc: "Çocukluk çağında gelişen görme kusurları ve tembelliklerin erken tedavisi.", descEn: "Early treatment of vision defects and lazy eyes that develop during childhood." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

import { useLocale } from "next-intl";

export default function ServicesSection() {
  const locale = useLocale();

  return (
    <section id="hizmetler" className="relative bg-[#0a111a] py-32 w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#162f5d]/40 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ecbb3f]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-[#06b6d4]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1500px] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
             <div className="h-[2px] w-12 bg-[#ecbb3f]" />
             <span className="text-[#ecbb3f] font-black tracking-widest uppercase text-sm">
                {locale === 'en' ? 'OUR SERVICES' : 'HİZMETLERİMİZ'}
             </span>
             <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {locale === 'en' ? (
              <>Treatments That <br className="hidden md:block" /><span className="text-[#ecbb3f]">Make a Difference</span></>
            ) : (
              <>Sizin İçin Özenle <br className="hidden md:block" /><span className="text-[#ecbb3f]">Planlanan Tedaviler</span></>
            )}
          </motion.h2>
        </div>

        {/* Premium CSS Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
              <Link 
                href={{ pathname: '/tedaviler/[category]', params: { category: service.slug } }}
                className="group relative w-full h-[450px] md:h-[500px] flex flex-col justify-end overflow-hidden rounded-[24px] bg-[#162f5d] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,187,63,0.15)] hover:-translate-y-2"
              >
                
                {/* Background Image */}
                <Image 
                  src={service.image}
                  alt={locale === 'en' ? service.titleEn : service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-[#0a111a]/70 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[#ecbb3f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <div className="mb-2 text-[#ecbb3f] font-bold text-[10px] tracking-[0.2em] uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {locale === 'en' ? 'Megagöz Treatment' : 'Megagöz Tedavi'}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white tracking-tight mb-0 group-hover:mb-3 transition-all duration-300 group-hover:text-[#ecbb3f]">
                    {locale === 'en' ? service.titleEn : service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-0 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mb-5 transition-all duration-500 delay-100 line-clamp-3">
                    {locale === 'en' ? service.descEn : service.desc}
                  </p>
                  
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white flex items-center justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 group-hover:bg-[#ecbb3f] group-hover:border-[#ecbb3f] group-hover:text-[#0a111a]">
                     <ArrowRight size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 delay-200" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
