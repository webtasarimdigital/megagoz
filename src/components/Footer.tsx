import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Clock, PhoneCall, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const services = locale === 'en' ? [
    "Cataract", "Laser Treatment", "Contact Lenses", "Eye Neurology", "Corneal Diseases",
    "Glaucoma Treatment", "Strabismus Treatment", "Uveitis Treatment", "Eyelid Aesthetics", "Pediatric Eye Health"
  ] : [
    "Katarakt", "Lazer Tedavisi", "Kontak Lens", "Göz Nörolojisi", "Kornea Hastalıkları",
    "Glokom Tedavisi", "Şaşılık Tedavisi", "Üveit Tedavisi", "Göz Kapağı Estetiği", "Çocuk Göz Sağlığı"
  ];

  return (
    <footer className="bg-[#152d59] mt-16 md:mt-24">
      
      {/* Full-Width Pre-Footer Contact Bar */}
      <div className="w-full bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="flex flex-row divide-x divide-gray-100">
           
           {/* Item 1 */}
           <a href="tel:05334814098" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group">
             <div className="flex items-center justify-center shrink-0">
               <PhoneCall size={28} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors stroke-[2]" />
             </div>
             <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[14px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">
                  {locale === 'en' ? 'Contact Us' : 'Bizimle İletişime Geçin'}
                </h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">0533 481 40 98</p>
             </div>
           </a>

           {/* Item 2 */}
           <a href="https://wa.me/905334814098" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group border-l border-gray-100">
             <div className="flex items-center justify-center shrink-0">
               <MessageCircle size={28} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors stroke-[2]" />
             </div>
             <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[14px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">WhatsApp</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">
                  {locale === 'en' ? 'Click to message' : 'Mesajlaşmak için tıklayın'}
                </p>
             </div>
           </a>

           {/* Item 3 */}
           <Link prefetch={false} href="/iletisim" className="flex-1 py-6 px-4 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group border-l border-gray-100">
             <div className="flex items-center justify-center shrink-0">
               <MapPin size={28} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors stroke-[2]" />
             </div>
             <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[14px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">
                  {locale === 'en' ? 'Reach Us' : 'Bize Ulaşın'}
                </h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">
                   {locale === 'en' ? 'Click for location' : 'Konumumuz için tıklayın'}
                </p>
             </div>
           </Link>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] pt-12 md:pt-16 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-10 mb-16">
          
          {/* Column 1: Brand & Intro */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3 order-1 lg:order-none space-y-7">
            <Link prefetch={false} href="/" className="inline-block relative h-[60px] w-[240px] mb-4 overflow-visible rounded-sm">
               <img 
                 src="/megagoz-logo-mobil.webp" 
                 alt="Megagöz Logo" 
                 className="absolute inset-0 w-[90%] h-[90%] my-auto object-contain object-left" 
               />
            </Link>
            <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
              {locale === 'en' 
                ? 'MEGAGÖZ is a modern eye health center established to provide healthcare services at international standards in the diagnosis and treatment of eye diseases, bringing together technology and medicine.' 
                : 'MEGAGÖZ, göz hastalıklarının teşhis ve tedavisinde uluslararası standartlarda sağlık hizmeti sunmak amacıyla kurulmuş, teknolojiyi ve tıbbı bir araya getiren modern bir göz sağlığı merkezidir.'}
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ecbb3f]" />
                <span className="text-[14px] text-gray-300 font-bold">444 0 320</span>
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
              <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#ecbb3f] hover:text-white hover:border-[#ecbb3f] transition-all">
                 {/* WhatsApp SVG path */}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 order-2 lg:order-none">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">
              {locale === 'en' ? 'CORPORATE' : 'KURUMSAL'}
            </h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            <ul className="space-y-3.5 list-none">
              {(locale === 'en' ? [
                { name: "Home", path: "/", isLink: true },
                { name: "About Us", path: "/hakkimizda", isLink: true },
                { name: "Our Doctors", path: "#", isLink: false },
                { name: "Feedback", path: "#", isLink: false },
                { name: "Blog", path: "#", isLink: false }
              ] : [
                { name: "Ana Sayfa", path: "/", isLink: true },
                { name: "Hakkımızda", path: "/hakkimizda", isLink: true },
                { name: "Hekimlerimiz", path: "#", isLink: false },
                { name: "Görüş ve Önerileriniz", path: "#", isLink: false },
                { name: "Blog", path: "#", isLink: false }
              ]).map((link, idx) => (
                <li key={idx}>
                  {link.isLink ? (
                    <Link prefetch={false} href={link.path as any} className="text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">
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

          {/* Column 3: Hizmetlerimiz */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 order-4 md:order-3 lg:order-none">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">
              {locale === 'en' ? 'OUR SERVICES' : 'HİZMETLERİMİZ'}
            </h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 sm:gap-x-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col">
                   <a href="#" className="text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">
                     {service}
                   </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: İletişim */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 order-3 md:order-4 lg:order-none">
            <h4 className="text-white font-black tracking-widest uppercase text-[15px] mb-3 mt-4 lg:mt-0">
              {locale === 'en' ? 'CONTACT' : 'İLETİŞİM'}
            </h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
                  İstiklal, Gamsız Sk. No:3, <br/>34762 Ümraniye/İstanbul, {locale === 'en' ? 'Turkey' : 'Türkiye'}
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#ecbb3f] shrink-0" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
                  444 0 320<br/>0 505 771 03 20
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
                  <p className="text-[14px] font-bold text-gray-200 mb-0.5">
                    {locale === 'en' ? 'Working Hours' : 'Çalışma Saatleri'}
                  </p>
                  <p className="text-[13px] text-gray-400 font-medium">
                    {locale === 'en' ? 'Monday - Saturday' : 'Pazartesi - Cumartesi'} <br/> 09:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8 pb-28 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[12px] text-gray-500 font-medium">
            {locale === 'en' ? 'Last Updated: 07.04.2026 23:05' : 'Web Site Son Güncelleme Tarihi: 07.04.2026 23:05'}
          </p>
          <p className="text-[13px] text-gray-400 font-medium tracking-wide">
            © 2026 <strong className="text-gray-300 font-bold">MegaGöz Tıp Merkezi.</strong> {locale === 'en' ? 'All Rights Reserved.' : 'Tüm Hakları Saklıdır.'}
          </p>
        </div>
        
      </div>
    </footer>
  );
}
