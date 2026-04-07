import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group mb-4">
              <div className="relative h-12 w-52">
                <Image 
                  src="/logo.png" 
                  alt="Megagöz Logo" 
                  fill 
                  className="object-contain brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Göz sağlığınız için en iyi teknolojileri ve alanında uzman doktorları bir araya getiriyoruz. Daha net bir dünya için yanınızdayız.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4 text-sm px-0 list-none">
              <li><Link href="/" className="hover:text-cyan-vibrant transition-colors">{t("home")}</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-cyan-vibrant transition-colors">{t("about")}</Link></li>
              <li><a href="/#hizmetler" className="hover:text-cyan-vibrant transition-colors">{t("services")}</a></li>
              <li><a href="/#blog" className="hover:text-cyan-vibrant transition-colors">{t("blog")}</a></li>
              <li><Link href="/iletisim" className="hover:text-cyan-vibrant transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-4 text-sm px-0 list-none">
              <li><a href="#" className="hover:text-cyan-vibrant transition-colors">Katarakt Cerrahisi</a></li>
              <li><a href="#" className="hover:text-cyan-vibrant transition-colors">Lazer Göz Çizdirme (SMILE & LASIK)</a></li>
              <li><a href="#" className="hover:text-cyan-vibrant transition-colors">Akıllı Lens Uygulamaları</a></li>
              <li><a href="#" className="hover:text-cyan-vibrant transition-colors">Retina Hastalıkları</a></li>
              <li><a href="#" className="hover:text-cyan-vibrant transition-colors">Glokom (Göz Tansiyonu)</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm px-0 list-none">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-vibrant shrink-0 mt-1" />
                <a href="https://share.google/zC0UTV7bTbwJn46pu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Merkez Mahallesi,<br/>Megagöz Göz Sağlığı Merkezi
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-vibrant shrink-0" />
                <a href="tel:4440320" className="hover:text-white transition-colors">444 0 320</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-vibrant shrink-0" />
                <a href="mailto:info@megagoz.com" className="hover:text-white transition-colors">info@megagoz.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© {new Date().getFullYear()} Megagöz Göz Sağlığı Merkezi. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
