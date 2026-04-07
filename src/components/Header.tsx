"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/hakkimizda" },
    { name: t("services"), href: "/#hizmetler" }, // We'll add sections later
    { name: t("blog"), href: "/#blog" },
    { name: t("contact"), href: "/iletisim" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`relative transition-all duration-300 ${isScrolled ? "h-10 w-44" : "h-12 w-52"}`}>
              {/* Note: Bu logo görselini public klasörüne 'logo.png' olarak eklemeniz gerekmektedir */}
              <Image 
                src="/logo.png" 
                alt="Megagöz Logo" 
                fill 
                className={`object-contain transition-all ${isScrolled ? "brightness-100" : "brightness-0 invert drop-shadow-md"}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium hover:text-cyan-vibrant transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href as any}
                  className={`text-sm font-medium hover:text-cyan-vibrant transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Actions: Lang Switch & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={switchLocale}
              className={`text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                isScrolled 
                  ? "border-slate-200 text-slate-700 hover:bg-slate-100" 
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {locale === "tr" ? "EN" : "TR"}
            </button>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+90"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-vibrant text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-cyan-vibrant/40 transition-all"
            >
              <Phone size={16} />
              {t("appointment")}
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark absolute top-full left-0 right-0 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/90 text-lg font-medium hover:text-cyan-vibrant"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href as any}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/90 text-lg font-medium hover:text-cyan-vibrant"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <hr className="border-white/10 my-2" />
              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={switchLocale}
                  className="text-white font-medium flex items-center gap-2"
                >
                  <span className="text-white/60">Language:</span> {locale === "tr" ? "English" : "Türkçe"}
                </button>
              </div>
              <a 
                href="tel:+90"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium mt-4"
              >
                <Phone size={20} />
                {t("appointment")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
