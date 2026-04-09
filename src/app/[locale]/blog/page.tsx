import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function BlogPage() {
  const t = useTranslations("Blog");

  const blogPosts = [
    {
      id: 1,
      title: "Lazer Göz Ameliyatı (Göz Çizdirme) Nedir?",
      slug: "lazer-goz-ameliyati-nedir",
      excerpt: "Miyop, hipermetrop ve astigmatizmanın saniyeler içinde tedavi edildiği modern lazer operasyonları hakkında tüm detaylar.",
      date: "14 Nisan 2026",
      image: "/images/slide1.png"
    },
    {
      id: 2,
      title: "Göz Rengi Değiştirmek Mümkün Mü?",
      slug: "goz-rengi-degistirme",
      excerpt: "Keratopigmentasyon ve iris implantasyonu gibi yöntemlerle göz rengi değişimi tıp dünyasında nasıl uygulanıyor?",
      date: "10 Nisan 2026",
      image: "/images/megagoz-katarakt-tedavisi.webp"
    },
    {
      id: 3,
      title: "Çocuklarda Göz Sağlığının Önemi",
      slug: "cocuklarda-goz-sagligi",
      excerpt: "Göz tembelliği ve şaşılık gibi problemlerin erken teşhisi, çocuğunuzun gelecekteki görüş kalitesini belirler.",
      date: "05 Nisan 2026",
      image: "/images/megagoz-cocuk-goz-tedavisi.webp"
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
      excerpt: "Yakın, uzağı ve orta mesafeyi bir arada görmek isteyen hastalar için trifokal mercek cerrahisinin avantajları.",
      date: "15 Mart 2026",
      image: "/images/slide3.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area (Megaeste overlap style) */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center pt-20">
        <Image 
          src="/images/slide3.png" 
          alt="Blog Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#1f313f]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl pb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              MEGAGÖZ BLOG
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            {t("title")}
          </h1>
          
          <p className="text-gray-300 md:text-lg font-medium leading-relaxed max-w-2xl px-4">
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
                
                <h3 className="text-xl font-bold text-[#1f313f] mb-3 leading-snug group-hover:text-[#ecbb3f] transition-colors">
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
