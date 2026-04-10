import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function BlogPage() {
  const t = useTranslations("Blog");
  const locale = useLocale();

  const blogPosts = locale === "tr" ? [
    {
      id: 1,
      title: "Lazer Göz Ameliyatı (Göz Çizdirme) Nedir?",
      slug: "lazer-goz-ameliyati-nedir",
      excerpt: "Miyop, hipermetrop ve astigmatizmanın saniyeler içinde tedavi edildiği modern lazer operasyonları hakkında tüm detaylar.",
      date: "14 Nisan 2026",
      image: "/images/blog_laser_eye.png"
    },
    {
      id: 2,
      title: "Göz Rengi Değiştirmek Mümkün Mü?",
      slug: "goz-rengi-degistirme",
      excerpt: "Keratopigmentasyon ve lazer gibi yöntemlerle göz rengi değişimi tıp dünyasında nasıl uygulanıyor?",
      date: "10 Nisan 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Çocuklarda Göz Sağlığının Önemi ve Miyopi Salgını",
      slug: "cocuklarda-goz-sagligi",
      excerpt: "Göz tembelliği ve şaşılık gibi problemlerin erken teşhisi, çocuğunuzun gelecekteki eğitim hayatını ve görüş kalitesini belirler.",
      date: "05 Nisan 2026",
      image: "/images/blog_child_eye.png"
    },
    {
      id: 4,
      title: "Katarakt Belirtileri ve Modern Tedavisi",
      slug: "katarakt-belirtileri-ve-tedavisi",
      excerpt: "Yaşa bağlı görme kayıplarının en sık nedeni olan kataraktın dikişsiz fako cerrahisi ile çok kısa sürede tedavisi.",
      date: "28 Mart 2026",
      image: "/images/megagoz-tedavi-sonrasi.webp"
    },
    {
      id: 5,
      title: "Kuru Göz Sendromu Nasıl Geçer?",
      slug: "kuru-goz-sendromu",
      excerpt: "Bilgisayar başında uzun saatler harcayanların kabusu kuru göz için alınabilecek pratik önlemler ve damla tedavileri.",
      date: "20 Mart 2026",
      image: "/images/slide2.png"
    },
    {
      id: 6,
      title: "Akıllı Lens (Göz İçi Mercek) Kimlere Uygulanır?",
      slug: "akilli-lens-tedavisi",
      excerpt: "Yakından uzağa tüm mesafelerde pırıl pırıl bir görüş sağlayan trifokal (akıllı) mercek cerrahisinin avantajları ve uygunluk şartları.",
      date: "15 Mart 2026",
      image: "/images/blog_smart_lens.png"
    }
  ] : [
    {
      id: 1,
      title: "What is Laser Eye Surgery?",
      slug: "lazer-goz-ameliyati-nedir",
      excerpt: "All the details about modern laser operations treating myopia, hypermetropia, and astigmatism in seconds.",
      date: "April 14, 2026",
      image: "/images/blog_laser_eye.png"
    },
    {
      id: 2,
      title: "Is It Possible to Change Eye Color?",
      slug: "goz-rengi-degistirme",
      excerpt: "How eye color change with methods like keratopigmentation and lasers is strictly applied in the medical world.",
      date: "April 10, 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Importance of Eye Health in Children",
      slug: "cocuklarda-goz-sagligi",
      excerpt: "Early diagnosis of problems like lazy eye and strabismus determines your child's future educational life.",
      date: "April 05, 2026",
      image: "/images/blog_child_eye.png"
    },
    {
      id: 4,
      title: "Cataract Symptoms and Modern Treatment",
      slug: "katarakt-belirtileri-ve-tedavisi",
      excerpt: "The most frequent cause of age-related vision loss, treated in a very short time with seamless phaco surgery.",
      date: "March 28, 2026",
      image: "/images/megagoz-tedavi-sonrasi.webp"
    },
    {
      id: 5,
      title: "How to Cure Dry Eye Syndrome?",
      slug: "kuru-goz-sendromu",
      excerpt: "Practical measures and drop treatments that can be taken for dry eye, the persistent nightmare of heavy computer users.",
      date: "March 20, 2026",
      image: "/images/slide2.png"
    },
    {
      id: 6,
      title: "Who Is Eligible for Smart Lenses?",
      slug: "akilli-lens-tedavisi",
      excerpt: "Advantages and eligibility conditions of trifocal (smart) intraocular lens surgery providing sparkling vision at all distances.",
      date: "March 15, 2026",
      image: "/images/blog_smart_lens.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center pt-24 md:pt-32">
        <Image 
          src="/images/slide3.png" 
          alt="Blog Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-32 md:pb-40">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              MEGAGÖZ BLOG
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {t("title")}
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Main Blog Grid (Overlapping) */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <Link href={{ pathname: '/blog/[slug]', params: { slug: post.slug } }} key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 mb-4 text-xs font-bold uppercase tracking-widest">
                   <Calendar size={14} />
                   <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#162f5d] mb-3 leading-snug group-hover:text-[#ecbb3f] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[#ecbb3f] font-bold text-sm tracking-wider uppercase">
                  {t("read_more")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
