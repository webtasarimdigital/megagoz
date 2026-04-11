"use client";

import { useTranslations, useLocale } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.source = 'Bize Ulaşın (İletişim Sayfası)';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await res.json();
        setFormStatus('error');
        setFormError(errorData.message || (locale === 'en' ? 'An error occurred.' : 'Bir hata oluştu.'));
      }
    } catch (err) {
      setFormStatus('error');
      setFormError(locale === 'en' ? 'Connection error' : 'Bağlantı hatası');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        <Image 
          src="/images/slide2.webp" 
          alt="Contact Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              {locale === "en" ? "CONTACT US" : "BİZE ULAŞIN"}
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            {locale === "en" ? "Contact Us" : "İletişim"}
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            {locale === "en" 
              ? "You can easily reach us through the following communication channels to book an appointment with our expert doctors or ask any questions you may have." 
              : "Uzman hekimlerimizden randevu almak veya aklınıza takılan soruları sormak için aşağıdaki iletişim kanallarından bize rahatlıkla ulaşabilirsiniz."}
          </p>
        </div>
      </div>

      {/* Main Content (Overlapping the hero section) */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px] relative z-20 -mt-24 md:-mt-32 pb-20">
        
        {/* Mobile Horizontal Info Cards (Hidden on Desktop) */}
        <div className="grid grid-cols-3 gap-3 lg:hidden mb-8">
          <div className="bg-white rounded-3xl md:rounded-[32px] p-4 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex-1 h-[110px]">
             <div className="w-10 h-10 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-[#3b82f6] mb-2.5">
               <Mail size={18} strokeWidth={2.5}/>
             </div>
             <span className="text-[#162f5d] font-black tracking-wide text-[12px]">{t("info.email")}</span>
          </div>
          <div className="bg-white rounded-3xl md:rounded-[32px] p-4 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex-1 h-[110px]">
             <div className="w-10 h-10 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-[#3b82f6] mb-2.5">
               <Phone size={18} strokeWidth={2.5}/>
             </div>
             <span className="text-[#162f5d] font-black tracking-wide text-[12px]">{t("info.phone")}</span>
          </div>
          <div className="bg-white rounded-3xl md:rounded-[32px] p-4 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50 flex-1 h-[110px]">
             <div className="w-10 h-10 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-[#3b82f6] mb-2.5">
               <MapPin size={18} strokeWidth={2.5}/>
             </div>
             <span className="text-[#162f5d] font-black tracking-wide text-[12px]">{t("info.address")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side - Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl md:rounded-t-[40px] md:rounded-b-[40px] shadow-[0_20px_60px_rgba(31,49,63,0.1)] p-8 md:p-12 border border-gray-100 flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-black text-[#162f5d] mb-8">
                {locale === "en" ? "Write to Us" : "Bize Yazın"}
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.name")}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.name")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.phone")}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="+90 555 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.email")}</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder="info@megagoz.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#162f5d]">{t("form.subject")}</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors"
                      placeholder={t("form.subject")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-bold text-[#162f5d]">{t("form.message")}</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full h-full min-h-[140px] p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ecbb3f] transition-colors resize-none"
                    placeholder={t("form.message")}
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-50 md:w-auto px-10 h-12 bg-[#ecbb3f] hover:bg-[#d99816] transition-colors text-[#162f5d] font-bold rounded-lg tracking-widest uppercase shadow-lg shadow-[#ecbb3f]/30">
                    {isSubmitting ? (locale === 'en' ? 'SENDING...' : 'GÖNDERİLİYOR...') : t("form.submit")}
                  </button>
                  {formStatus === 'success' && (
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-semibold">
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {locale === 'tr' ? 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.' : "Your message was sent successfully! We'll get back to you shortly."}
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-5 py-4 text-sm font-semibold">
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      {formError}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Info Cards & Map */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Desktop Info Cards Box (Hidden on Mobile) */}
            <div className="hidden lg:flex bg-white rounded-[40px] shadow-[0_20px_60px_rgba(31,49,63,0.1)] p-10 border border-gray-100 flex-col gap-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <Mail strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.email")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    {locale === "en" ? "Write to us for your questions and opinions." : "Soru ve görüşleriniz için bize yazın."}
                  </p>
                  <p className="text-[#ecbb3f] font-bold text-sm">info@megagoz.com</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <Phone strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.phone")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    {locale === "en" ? "Get support from our call center." : "Çağrı merkezimizden destek alın."}
                  </p>
                  <p className="text-[#ecbb3f] font-bold text-sm">444 0 320 <br/> 0 505 771 03 20</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ecbb3f]/10 text-[#ecbb3f] rounded-[14px] flex items-center justify-center shrink-0">
                  <MapPin strokeWidth={2} size={22} />
                </div>
                <div>
                  <h3 className="text-[#162f5d] font-bold text-[15px] mb-1">{t("info.address")}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-1">
                    İstiklal, Gamsız Sk. No:3, 34762 Ümraniye/İstanbul, Türkiye
                  </p>
                </div>
              </div>

            </div>

            {/* Map iframe wrapped nicely */}
            <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
             <iframe 
                 src="https://maps.google.com/maps?q=41.024096731190525,29.1050488047088&z=16&hl=tr&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>

          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
