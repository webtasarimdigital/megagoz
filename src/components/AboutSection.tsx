"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Eye, Shield, Award } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="hakkimizda" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-dark p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs hidden md:flex"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                <Award size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-xl">15+ Yıl</p>
                <p className="text-slate-300 text-sm">Göz Sağlığında Uzmanlık</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-blue-100">
              {t("badge")}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {t("title")}
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">İleri Teknoloji</h4>
                  <p className="text-sm text-slate-500">Dünya standartlarında ameliyat ve ölçüm cihazları.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Güvenilir Tedavi</h4>
                  <p className="text-sm text-slate-500">Etik kurallara bağlı hasta odaklı yaklaşım.</p>
                </div>
              </div>
            </div>

            <button className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg">
              {t("button")}
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
