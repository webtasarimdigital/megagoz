"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AppointmentFormSection() {
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
                <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">ÜCRETSİZ MUAYENE</span>
             </div>
             
             <h2 className="text-4xl lg:text-[54px] font-black leading-[1.1] mb-6 tracking-tight text-[#162f5d]">
               HEMEN ÜCRETSİZ<br />
               <span className="font-light">RANDEVU AL</span>
             </h2>

             <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-md font-medium">
               Kliniklerimizden randevu alarak; lazer göz cerrahisi, katarakt, akıllı lens veya retina alanındaki tüm ihtiyaçlarınızı kontrol ettirebilir ve planlamayı tamamen ücretsiz olarak yaptırabilirsiniz.
             </p>

             <div className="flex items-center gap-3 bg-[#162f5d]/5 border border-[#162f5d]/10 rounded-xl px-5 py-4 text-sm text-[#162f5d] font-bold tracking-wide">
                <ShieldCheck className="text-[#ecbb3f]" size={22} strokeWidth={1.5} />
                ÖNCELİĞİMİZ SAĞLIĞINIZ ÇÜNKÜ BİZ MEGAGÖZ'ÜZ
             </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#243140] rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/5"
          >
             <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col">
                      <input 
                        type="text" 
                        placeholder="İsim Soyisim" 
                        className="bg-[#1a2531] text-white placeholder-gray-500 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent text-sm"
                      />
                   </div>
                   <div className="flex flex-col">
                      <input 
                        type="tel" 
                        placeholder="Telefon Numarası" 
                        className="bg-[#1a2531] text-white placeholder-gray-500 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent text-sm"
                      />
                   </div>
                </div>
                
                <div className="flex flex-col">
                   <textarea 
                     rows={5}
                     placeholder="Mesajınız" 
                     className="bg-[#1a2531] text-white placeholder-gray-500 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] transition-all border border-transparent resize-none text-sm"
                   ></textarea>
                </div>

                <div className="flex justify-end mt-2">
                   <button 
                     type="button" 
                     className="bg-gradient-to-r from-[#dfa932] to-[#b88924] hover:from-[#cda669] hover:to-[#dfa932] text-white/90 font-bold text-sm tracking-widest uppercase rounded-lg px-8 py-4 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                   >
                      RANDEVU OLUŞTUR <ArrowRight size={18} />
                   </button>
                </div>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
