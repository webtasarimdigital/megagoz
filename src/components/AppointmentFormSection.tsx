"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

export default function AppointmentFormSection() {
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.source = 'Alt Kısım Detaylı Randevu Formu';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert(locale === 'en' ? "Message sent successfully!" : "Mesajınız başarıyla gönderildi!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert(locale === 'en' ? "An error occurred, please try again." : "Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (err) {
      alert(locale === 'en' ? "Connection error" : "Bağlantı hatası");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28 relative flex justify-center w-full">
       <div className="container px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
             <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#ecbb3f]" />
                <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">{locale === 'tr' ? 'ÜCRETSİZ MUAYENE' : 'FREE CONSULTATION'}</span>
             </div>
             
             <h2 className="text-4xl lg:text-[54px] font-black leading-[1.1] mb-6 tracking-tight text-[#162f5d]">
               {locale === 'tr' ? (
                 <>
                   HEMEN ÜCRETSİZ<br />
                   <span className="font-light">RANDEVU AL</span>
                 </>
               ) : (
                 <>
                   BOOK YOUR FREE<br />
                   <span className="font-light">APPOINTMENT NOW</span>
                 </>
               )}
             </h2>

             <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-md font-medium">
               {locale === 'tr' ? 
                 'Kliniklerimizden randevu alarak; lazer göz cerrahisi, katarakt, akıllı lens veya retina alanındaki tüm ihtiyaçlarınızı kontrol ettirebilir ve planlamayı tamamen ücretsiz olarak yaptırabilirsiniz.' : 
                 'By booking an appointment at our clinics, you can have all your needs in the areas of laser eye surgery, cataracts, smart lenses, or retina checked and planned completely free of charge.'
               }
             </p>

             <div className="flex items-center gap-3 bg-[#162f5d]/5 border border-[#162f5d]/10 rounded-xl px-5 py-4 text-sm text-[#162f5d] font-bold tracking-wide leading-relaxed">
                <ShieldCheck className="text-[#ecbb3f] shrink-0" size={24} strokeWidth={2} />
                {locale === 'tr' ? 'ÖNCELİĞİMİZ SAĞLIĞINIZ ÇÜNKÜ BİZ MEGAGÖZ\'ÜZ' : 'YOUR HEALTH IS OUR PRIORITY BECAUSE WE ARE MEGAGÖZ'}
             </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#162f5d] rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/5"
          >
             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col">
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder={locale === 'tr' ? 'İsim Soyisim' : 'Full Name'} 
                        className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent text-sm"
                      />
                   </div>
                   <div className="flex flex-col">
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder={locale === 'tr' ? 'Telefon Numarası' : 'Phone Number'} 
                        className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent text-sm"
                      />
                   </div>
                </div>
                
                <div className="flex flex-col">
                   <textarea 
                     rows={5}
                     name="message"
                     placeholder={locale === 'tr' ? 'Mesajınız' : 'Your Message'} 
                     className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent resize-none text-sm"
                   ></textarea>
                </div>

                <div className="flex justify-end mt-2">
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="bg-gradient-to-r from-[#dfa932] to-[#b88924] hover:from-[#cda669] hover:to-[#dfa932] disabled:opacity-50 disabled:cursor-not-allowed text-white/90 font-bold text-sm tracking-widest uppercase rounded-lg px-8 py-4 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shrink-0"
                   >
                      {isSubmitting ? (locale === 'tr' ? 'GÖNDERİLİYOR...' : 'SENDING...') : (locale === 'tr' ? 'RANDEVU OLUŞTUR' : 'BOOK APPOINTMENT')} <ArrowRight size={18} />
                   </button>
                </div>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
