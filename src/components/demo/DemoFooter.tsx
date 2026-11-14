import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Clock, PhoneCall, MessageCircle, ArrowRight } from "lucide-react";
import { getBranches } from "@/data/branches";
import { dt } from "./demoText";
import { TREATMENTS_DATA } from "@/data/treatments";
import BranchIcon from "./BranchIcon";

export default function DemoFooter() {
  const locale = useLocale() as "tr" | "en";
  const T = dt(locale);
  const BRANCHES = getBranches(locale);

  return (
    <footer className="bg-[#152d59]">
      {/* Ön footer iletişim barı (mevcut footer ile aynı) */}
      <div className="w-full bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1300px]">
          <div className="flex flex-row divide-x divide-gray-100">
            <a href="tel:4440320" className="flex-1 py-6 px-3 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group">
              <PhoneCall size={26} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors shrink-0" />
              <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[13px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">{T.callCentre}</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1">444 0 320</p>
              </div>
            </a>
            <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 px-3 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group">
              <MessageCircle size={26} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors shrink-0" />
              <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[13px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">WhatsApp</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1 hidden sm:block">{T.clickToMessage}</p>
              </div>
            </a>
            <Link prefetch={false} href="/iletisim" className="flex-1 py-6 px-3 md:py-10 flex items-center justify-center gap-3 md:gap-4 hover:bg-gray-50 transition-colors group">
              <MapPin size={26} className="text-[#162f5d] group-hover:text-[#ecbb3f] transition-colors shrink-0" />
              <div className="flex flex-col text-left">
                <h4 className="text-[#162f5d] font-bold text-[13px] md:text-[16px] group-hover:text-[#ecbb3f] transition-colors leading-tight">{T.reachUs}</h4>
                <p className="text-gray-500 font-medium text-[12px] md:text-[13px] mt-1 hidden sm:block">{T.clickForLocation}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-[1300px] pt-14 md:pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-14">
          {/* Marka */}
          <div className="lg:col-span-3 space-y-6">
            <Link prefetch={false} href="/demo" className="inline-block relative h-[60px] w-[230px]">
              <img src="/megagoz-logo-mobil.webp" alt="MegaGöz Logo" className="absolute inset-0 w-[90%] h-[90%] my-auto object-contain object-left" />
            </Link>
            <p className="text-[13px] leading-relaxed text-gray-300 font-medium">
              {T.footerAbout}
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/megagoz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#ecbb3f] hover:text-white hover:border-[#ecbb3f] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579553615596#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:bg-[#ecbb3f] hover:text-white hover:border-[#ecbb3f] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Branşlar */}
          <div className="md:col-span-2 lg:col-span-6 grid grid-cols-2 gap-x-6 gap-y-10">
            {BRANCHES.map((b) => {
              const links =
                b.id === "goz"
                  ? TREATMENTS_DATA.slice(0, 4).map((c) => ({ k: c.id, t: c.title[locale], href: { pathname: "/tedaviler/[category]", params: { category: c.slug[locale] } } }))
                  : b.services.slice(0, 4).map((s) => ({ k: s.slug, t: s.title, href: { pathname: "/demo/[brans]/[hizmet]", params: { brans: b.slug, hizmet: s.slug } } }));
              return (
                <div key={b.id}>
                  <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} className="group flex items-center gap-2.5 mb-3">
                    <span style={{ color: b.accent }}><BranchIcon icon={b.icon} size={16} /></span>
                    <h4 className="text-white font-black tracking-widest uppercase text-[13px] sm:text-[14px] group-hover:text-[#ecbb3f] transition-colors">{b.shortName}</h4>
                  </Link>
                  <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-5" />
                  <ul className="space-y-3">
                    {links.map((l) => (
                      <li key={l.k}>
                        <Link prefetch={false} href={l.href as any} className="text-[13px] sm:text-[14px] text-gray-300 hover:text-[#ecbb3f] transition-colors font-medium">{l.t}</Link>
                      </li>
                    ))}
                    <li>
                      <Link href={{ pathname: "/demo/[brans]", params: { brans: b.slug } }} className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#ecbb3f] hover:gap-2.5 transition-all">
                        {T.all} <ArrowRight size={13} />
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          {/* İletişim */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="text-white font-black tracking-widest uppercase text-[14px] mb-3">{T.contact}</h4>
            <div className="w-[30px] h-[2px] bg-[#ecbb3f] mb-6" />
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">İstiklal, Gamsız Sk. No:3,<br />34762 Ümraniye/İstanbul{T.turkey}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#ecbb3f] shrink-0" />
                <p className="text-[14px] text-gray-300 font-medium leading-relaxed">444 0 320<br />0 505 771 03 20</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#ecbb3f] shrink-0" />
                <p className="text-[14px] text-gray-300 font-medium">info@megagoz.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#ecbb3f] shrink-0 mt-0.5" />
                <p className="text-[13px] text-gray-400 font-medium"><span className="text-gray-200 font-bold">{T.workingDays}</span><br />09:00 – 19:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-28 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] text-gray-400 font-medium">
            <Link href="/hakkimizda" className="hover:text-[#ecbb3f]">{T.about}</Link>
            <Link href="/blog" className="hover:text-[#ecbb3f]">Blog</Link>
            <Link href="/anlasmali-kurumlar" className="hover:text-[#ecbb3f]">{T.partnerInstitutions}</Link>
            <Link href="/kvkk" className="hover:text-[#ecbb3f]">KVKK</Link>
          </nav>
          <p className="text-[13px] text-gray-400 font-medium tracking-wide">
            © 2026 <strong className="text-gray-300 font-bold">{T.centreName}.</strong> {T.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
