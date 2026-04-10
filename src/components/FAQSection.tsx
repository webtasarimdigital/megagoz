"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";

const FAQS = [
  {
    id: 1,
    question: "Göz muayenesi ne sıklıkla yapılmalıdır?",
    questionEn: "How often should eye exams be done?",
    answer: "Sağlıklı yetişkinlerin herhangi bir şikayeti olmasa bile yılda en az bir kez rutin göz muayenesi olması önerilir. Erken teşhis, birçok göz hastalığında tedavinin başarı oranını doğrudan etkiler.",
    answerEn: "It is recommended that healthy adults have a routine eye exam at least once a year, even without any complaints. Early diagnosis directly affects the success rate of treatment in many eye diseases."
  },
  {
    id: 2,
    question: "Lazer tedavisi (göz çizdirme) kimlere uygulanabilir?",
    questionEn: "Who is eligible for laser eye surgery?",
    answer: "18 yaşını doldurmuş, son bir yılda göz numarası değişmemiş ve kornea yapısı (kalınlığı) lazer cerrahisine uygun olan miyop, hipermetrop ve astigmat hastalarına uygulanabilmektedir.",
    answerEn: "It can be applied to patients with myopia, hypermetropia, and astigmatism who are over 18 years old, whose prescription has not changed in the past year, and whose corneal structure is suitable for laser surgery."
  },
  {
    id: 3,
    question: "Katarakt ameliyatı zor ve ağrılı bir işlem midir?",
    questionEn: "Is cataract surgery a difficult and painful procedure?",
    answer: "Hayır. Gelişmiş fakoemülsifikasyon (Fako) teknolojisi sayesinde damla anestezi altında (iğnesiz) yapılan, ağrısız ve sadece 10-15 dakika süren konforlu bir işlemdir. Aynı gün taburcu olabilirsiniz.",
    answerEn: "No. Thanks to advanced phacoemulsification technology, it is a painless and comfortable procedure performed under drop anesthesia (needle-free) that takes only 10-15 minutes. You can be discharged the same day."
  },
  {
    id: 4,
    question: "Çocuklarda ilk göz muayenesi ne zaman yapılmalıdır?",
    questionEn: "When should children have their first eye exam?",
    answer: "Çocuklarda ilk göz muayenesi yenidoğan döneminde yapılmalı, ardından 1. yaş, 3. yaş ve okul öncesi (5-6 yaş) dönemlerinde düzenli olarak tekrarlanmalıdır. Özellikle göz tembelliğinde ilk 7 yaş kritik öneme sahiptir.",
    answerEn: "Children should have their first eye exam during the newborn period, and then regular follow-ups at ages 1, 3, and pre-school (5-6 years). The first 7 years are critically important, especially for lazy eye."
  },
  {
    id: 5,
    question: "Akıllı mercek (Trifokal Lens) operasyonu ömür boyu kalıcı mıdır?",
    questionEn: "Is smart lens (Trifocal Lens) surgery permanent for life?",
    answer: "Evet, göze yerleştirilen akıllı (trifokal) lensler ömür boyu gözde kalır. Herhangi bir alerji yaratmaz ve numarası ilerleyen yıllarda değişmez. Uzak, yakın ve orta mesafede net görüş sağlar.",
    answerEn: "Yes, smart (trifocal) lenses placed in the eye remain for a lifetime. They do not cause any allergies and the prescription does not change over the years. They provide clear vision at far, near, and intermediate distances."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const locale = useLocale();

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 md:py-24 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Photo and Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col h-full justify-center"
          >
            <div className="inline-flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-[#ecbb3f]" />
               <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">
                 {locale === 'en' ? 'FAQ' : 'MERAK EDİLENLER'}
               </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-[#162f5d] tracking-tight">
              {locale === 'en' ? (
                <>Frequently Asked <br className="hidden lg:block"/><span className="text-[#ecbb3f]">Questions.</span></>
              ) : (
                <>Sıkça Sorulan <br className="hidden lg:block"/><span className="text-[#ecbb3f]">Sorular.</span></>
              )}
            </h2>
            
            <p className="text-gray-500 font-medium text-lg mb-10 leading-relaxed max-w-lg">
              {locale === 'en' 
                ? 'Read the answers to all your questions about eye health and our treatment processes, written by our expert doctors.' 
                : 'Göz sağlığınız ve tedavi süreçlerimiz hakkında kafanıza takılan tüm soruların cevaplarını uzman doktorlarımızın kaleminden okuyun.'}
            </p>

            <div className="relative w-full max-w-md aspect-square rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
               <Image 
                  src="/images/megagoz.webp"
                  alt="Megagöz SSS"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#162f5d]/60 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -left-10 bottom-10 w-48 h-48 bg-[#ecbb3f]/10 rounded-full blur-3xl -z-10 cursor-none pointer-events-none" />
          </motion.div>

          {/* Right Side: Accordion */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border-b ${openId === faq.id ? 'border-[#ecbb3f]' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left py-6 flex items-center justify-between focus:outline-none group"
                >
                  <h3 className={`text-lg md:text-xl font-bold pr-8 transition-colors duration-300 ${openId === faq.id ? 'text-[#ecbb3f]' : 'text-[#162f5d] group-hover:text-[#ecbb3f]'}`}>
                    {locale === 'en' ? faq.questionEn : faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openId === faq.id ? 'bg-[#ecbb3f] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#ecbb3f]/10 group-hover:text-[#ecbb3f]'}`}>
                    {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 font-medium leading-relaxed pb-6 pr-12">
                        {locale === 'en' ? faq.answerEn : faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
