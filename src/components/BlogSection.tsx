"use client";

import { motion, Variants } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Lazer Göz Ameliyatı (Göz Çizdirme) Nedir?",
    category: "Tedaviler",
    date: "14 Ekim 2026",
    image: "/images/slide1.png",
    excerpt: "Gözlük ve lens bağımlılığından kurtaran, miyop, hipermetrop ve astigmatizmanın kalıcı olarak düzeltilmesini sağlayan modern lazer teknolojilerini inceliyoruz."
  },
  {
    id: 2,
    title: "Göz Rengi Değiştirmek Mümkün Mü?",
    category: "Estetik Oftalmoloji",
    date: "22 Eylül 2026",
    image: "/images/megagoz-kontak-lens.webp",
    excerpt: "Göz rengi değiştirme ameliyatları hakkında bilmeniz gereken tıp gerçekleri, keratopigmentasyon ve kontakt lens kullanımı üzerine uzman görüşlerimiz."
  },
  {
    id: 3,
    title: "Katarakt Cerrahisinde Göz İçi Akıllı Lens Devrimi",
    category: "Göz Sağlığı",
    date: "05 Eylül 2026",
    image: "/images/megagoz-katarakt-tedavisi.webp",
    excerpt: "Görüş netliğini tamamen geri kazandıran ve ömür boyu kalıcı olan akıllı mercek (Trifokal Lens) teknolojisi ile hayata nasıl yeniden net bakabilirsiniz?"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function BlogSection() {
  return (
    <section className="py-24 bg-gray-50/50 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-[#ecbb3f]" />
               <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">GÜNCEL BLOG</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#162f5d] tracking-tight">
              Son Blog <span className="text-[#ecbb3f]">Yazılarımız</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 bg-transparent text-[#162f5d] font-bold tracking-wide uppercase text-sm border-b-2 border-[#ecbb3f] pb-1 hover:text-[#ecbb3f] transition-colors"
            >
              Tüm Blogları Gör
              <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300 text-[#ecbb3f]" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <div className="group relative block bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(31,49,63,0.12)] transition-all duration-500 transform hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 bg-[#162f5d]/90 backdrop-blur-sm text-[#ecbb3f] font-bold text-xs uppercase px-3 py-1.5 rounded-lg">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={14} className="text-[#ecbb3f]" />
                    <span className="font-medium">{post.date}</span>
                  </div>
                  
                  <h3 className="text-[20px] font-black text-[#162f5d] leading-snug mb-3 line-clamp-2 group-hover:text-[#ecbb3f] transition-colors">
                    <Link href="/blog" className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#ecbb3f] font-bold text-sm tracking-wider uppercase mt-auto">
                    Detaylı Bilgi
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
