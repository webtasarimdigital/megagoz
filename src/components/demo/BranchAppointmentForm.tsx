"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { BRANCHES, type BranchId } from "@/data/branches";
import BranchIcon from "./BranchIcon";

interface Props {
  /** Branş sayfalarında önceden seçili gelir; kurum ana sayfasında boş bırakılır */
  defaultBranch?: BranchId;
  /** Hangi sayfa/konumdan gönderildiği (bildirim ve CRM'de "kaynak" olarak görünür) */
  source: string;
  title?: [string, string];
  text?: string;
}

export default function BranchAppointmentForm({ defaultBranch, source, title, text }: Props) {
  const [branchId, setBranchId] = useState<BranchId | "">(defaultBranch ?? "");
  const [kvkk, setKvkk] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const branch = BRANCHES.find((b) => b.id === branchId);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!branchId) {
      setStatus("error");
      setError("Lütfen ilgilendiğiniz branşı seçin.");
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const payload = {
      ...data,
      source,
      branch: branch!.name,
      branchId,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).message || "Bir hata oluştu.");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setKvkk(false);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Bağlantı hatası");
    }
  };

  const [t1, t2] = title ?? ["ÜCRETSİZ ÖN GÖRÜŞME", "RANDEVU AL"];

  return (
    <section id="randevu" className="bg-white py-20 lg:py-28 relative flex justify-center w-full scroll-mt-24">
      <div className="container px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Sol: tipografi */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">
              {branch ? branch.name : "Tüm Branşlar"}
            </span>
          </div>
          <h2 className="text-4xl lg:text-[54px] font-black leading-[1.1] mb-6 tracking-tight text-[#162f5d]">
            {t1}
            <br />
            <span className="font-light">{t2}</span>
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-md font-medium">
            {text ??
              "Bilgilerinizi bırakın; ilgili branştaki hasta danışmanımız sizi arayarak uygun hekim ve randevu saatini birlikte planlasın."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="tel:4440320" className="flex items-center gap-3 bg-[#162f5d]/5 border border-[#162f5d]/10 rounded-xl px-5 py-4 text-[#162f5d] font-black tracking-wide hover:border-[#ecbb3f] transition-colors">
              <Phone className="text-[#ecbb3f]" size={20} /> 444 0 320
            </a>
            <a href="https://wa.me/905057710320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#162f5d]/5 border border-[#162f5d]/10 rounded-xl px-5 py-4 text-[#162f5d] font-black tracking-wide hover:border-[#ecbb3f] transition-colors">
              <MessageCircle className="text-[#ecbb3f]" size={20} /> WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-[#162f5d] font-bold tracking-wide">
            <ShieldCheck className="text-[#ecbb3f] shrink-0" size={22} />
            ÖNCELİĞİMİZ SAĞLIĞINIZ ÇÜNKÜ BİZ MEGAGÖZ&apos;ÜZ
          </div>
        </motion.div>

        {/* Sağ: form kartı */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#162f5d] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Branş seçimi */}
            <div>
              <p className="text-[11px] font-black tracking-[0.2em] text-white/50 uppercase mb-3">İlgilendiğiniz branş</p>
              <div className="grid grid-cols-2 gap-2.5">
                {BRANCHES.map((b) => {
                  const on = branchId === b.id;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => { setBranchId(b.id); if (status === "error") setStatus("idle"); }}
                      aria-pressed={on}
                      className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-left text-[13px] sm:text-sm font-bold transition-all border ${
                        on ? "bg-[#ecbb3f] border-[#ecbb3f] text-[#162f5d] shadow-lg shadow-[#ecbb3f]/20" : "bg-white/5 border-white/10 text-white/80 hover:border-white/30"
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${on ? "bg-[#162f5d]/10" : "bg-white/10"}`} style={on ? undefined : { color: b.accent }}>
                        <BranchIcon icon={b.icon} size={15} />
                      </span>
                      {b.shortName}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" required placeholder="İsim Soyisim" className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm" />
              <input type="tel" name="phone" required placeholder="Telefon Numarası" className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm" />
            </div>

            <div className="relative">
              <select
                name="subject"
                defaultValue=""
                key={branchId}
                disabled={!branch}
                className="appearance-none bg-white/10 text-white rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm disabled:opacity-50 [&>option]:text-[#162f5d]"
              >
                <option value="" disabled>{branch ? "Konu seçiniz" : "Önce branş seçiniz"}</option>
                {branch?.formTopics.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
            </div>

            <textarea rows={3} name="message" placeholder="Mesajınız (isteğe bağlı)" className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent resize-none text-sm" />

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input type="checkbox" checked={kvkk} onChange={(e) => setKvkk(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#ecbb3f]" />
              <span className="text-[13px] text-white/60 leading-snug">
                <a href="/kvkk" target="_blank" className="underline text-[#ecbb3f] font-bold">KVKK metnini</a> okudum ve onaylıyorum.
              </span>
            </label>

            <button
              type="submit"
              disabled={!kvkk || status === "sending"}
              className="bg-gradient-to-r from-[#dfa932] to-[#b88924] hover:from-[#cda669] hover:to-[#dfa932] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest uppercase rounded-lg px-8 py-4 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              {status === "sending" ? "GÖNDERİLİYOR..." : branch ? `${branch.shortName.toLocaleUpperCase("tr-TR")} İÇİN RANDEVU OLUŞTUR` : "RANDEVU OLUŞTUR"}
              <ArrowRight size={18} />
            </button>

            {status === "success" && (
              <div className="bg-green-400/20 border border-green-400/40 text-green-300 rounded-xl px-5 py-4 text-sm font-semibold">
                Talebiniz {branch?.name} branşına iletildi. En kısa sürede sizi arayacağız.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-400/20 border border-red-400/40 text-red-300 rounded-xl px-5 py-4 text-sm font-semibold">{error}</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
