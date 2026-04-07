import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Navigation");

  const services = [
    "Katarakt", "Lazer Tedavisi", "Kontak Lens", "Göz Nörolojisi", "Kornea Hastalıkları",
    "Glokom Tedavisi", "Şaşılık Tedavisi", "Üveit Tedavisi", "Göz Kapağı Estetiği", "Çocuk Göz Sağlığı"
  ];

  return (
    <footer className="bg-[#1f313f] pt-16 pb-6 mt-10">
      <div className="container mx-auto px-6 max-w-[1300px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
          
          {/* Column 1: Brand & Intro (col-span-3) */}
          <div className="lg:col-span-3 space-y-7">
            <Link href="/" className="inline-block relative h-16 w-56 mb-2">
              <Image 
                src="/logo.png" 
                alt="Megagöz Logo" 
                fill 
                className="object-contain" 
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
              MEGAGÖZ, göz hastalıklarının teşhis ve tedavisinde uluslararası standartlarda sağlık hizmeti sunmak amacıyla kurulmuş, teknolojiyi ve tıbbı bir araya getiren modern bir göz sağlığı merkezidir.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ecbb3f]" />
                <span className="text-[14px] text-gray-300 font-bold">0555 555 55 55</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#ecbb3f]" />
                <span className="text-[14px] text-gray-300 font-medium">info@megagoz.com</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://instagram.com/megagoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#ecbb3f] hover:text-white hover:border-[#ecbb3f] transition-all">
                {/* Instagram SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#ecbb3f] hover:text-white hover:border-[#ecbb3f] transition-all">
                 {/* WhatsApp SVG path */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Kurumsal (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">KURUMSAL</h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            <ul className="space-y-3.5 list-none">
              {[
                { name: "Ana Sayfa", path: "/", isLink: true },
                { name: "Hakkımızda", path: "/hakkimizda", isLink: true },
                { name: "Hekimlerimiz", path: "#", isLink: false },
                { name: "Görüş ve Önerileriniz", path: "#", isLink: false },
                { name: "Blog", path: "#", isLink: false }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.isLink ? (
                    <Link href={link.path as any} className="text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.path} className="text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz (col-span-4) - Two Columns */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">HİZMETLERİMİZ</h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col">
                   <a href="#" className="text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">
                     {service}
                   </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: İletişim (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">İLETİŞİM</h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
                  İhtisas Sokak. No:3 <br/>Ümraniye / İstanbul
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#ecbb3f] shrink-0" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
                  0555 555 55 55<br/>0216 555 55 55
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#ecbb3f] shrink-0" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
                  info@megagoz.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold text-gray-200 mb-0.5">Çalışma Saatleri</p>
                  <p className="text-[13px] text-gray-400 font-medium">Pazartesi - Cumartesi <br/> 09:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[12px] text-gray-500 font-medium">
            Web Site Son Güncelleme Tarihi: 07.04.2026 23:05
          </p>
          <p className="text-[13px] text-gray-400 font-medium tracking-wide">
            © 2026 <strong className="text-gray-300 font-bold">MegaGöz Tıp Merkezi.</strong> Tüm Hakları Saklıdır.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
