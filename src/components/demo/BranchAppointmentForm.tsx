"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { getBranches, type BranchId } from "@/data/branches";
import { dt } from "./demoText";
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
  const locale = useLocale();
  const T = dt(locale);
  const BRANCHES = getBranches(locale);
  // Bildirimde personel için branş adı her zaman Türkçe gider
  const BRANCHES_TR = getBranches("tr");
  const [branchId, setBranchId] = useState<BranchId | "">(defaultBranch ?? "");
  const [kvkk, setKvkk] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const branch = BRANCHES.find((b) => b.id === branchId);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!branchId) {
      setStatus("error");
      setError(T.pleaseChooseBranch);
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const payload = {
      ...data,
      source,
      branch: BRANCHES_TR.find((b) => b.id === branchId)!.name,
      language: locale,
      branchId,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).message || T.genericError);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setKvkk(false);
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || T.genericError);
    }
  };

  const [t1, t2] = title ?? T.formTitle;

  return (
    <section id="randevu" className="bg-white py-20 lg:py-28 relative flex justify-center w-full scroll-mt-24">
      <div className="container px-6 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Sol: tipografi */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-widest text-sm uppercase">
              {branch ? branch.name : T.allBranchesLabel}
            </span>
          </div>
          <h2 className="text-4xl lg:text-[54px] font-black leading-[1.1] mb-6 tracking-tight text-[#162f5d]">
            {t1}
            <br />
            <span className="font-light">{t2}</span>
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-md font-medium">
            {text ??
              T.formText}
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
            {T.priority}
          </div>
        </motion.div>

        {/* Sağ: form kartı */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#162f5d] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Adım 1 — Branş seçimi (radyo kartları: seçilebilir olduğu ilk bakışta anlaşılsın) */}
            <fieldset>
              <legend className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#ecbb3f] text-[#162f5d] text-[12px] font-black flex items-center justify-center">1</span>
                <span className="text-[14px] font-black text-white">{T.stepChooseBranch}</span>
                {!branchId && <span className="text-[12px] text-[#ecbb3f] font-semibold animate-pulse">{T.tapToChoose}</span>}
              </legend>
              <div role="radiogroup" className="grid grid-cols-2 gap-2.5">
                {BRANCHES.map((b) => {
                  const on = branchId === b.id;
                  return (
                    <button
                      type="button"
                      role="radio"
                      aria-checked={on}
                      key={b.id}
                      onClick={() => { setBranchId(b.id); if (status === "error") setStatus("idle"); }}
                      className={`group relative flex items-center gap-2.5 rounded-xl pl-3 pr-9 py-3 min-h-[58px] text-left text-[13px] sm:text-sm font-bold leading-tight transition-all border-2 cursor-pointer active:scale-[0.98] ${
                        on
                          ? "bg-[#ecbb3f] border-[#ecbb3f] text-[#162f5d] shadow-lg shadow-[#ecbb3f]/25"
                          : "bg-white/[0.06] border-white/15 text-white hover:border-[#ecbb3f]/70 hover:bg-white/10"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${on ? "bg-[#162f5d]/10" : "bg-white/10"}`} style={on ? undefined : { color: b.accent }}>
                        <BranchIcon icon={b.icon} size={16} />
                      </span>
                      {b.shortName}
                      {/* Seçim yuvarlağı */}
                      <span
                        aria-hidden
                        className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          on ? "bg-[#162f5d] border-[#162f5d]" : "border-white/40 group-hover:border-[#ecbb3f]"
                        }`}
                      >
                        {on && (
                          <svg className="w-3 h-3 text-[#ecbb3f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Adım 2 — Bilgiler */}
            <p className="flex items-center gap-2.5 -mb-1 mt-1">
              <span className={`w-6 h-6 rounded-full text-[12px] font-black flex items-center justify-center transition-colors ${branchId ? "bg-[#ecbb3f] text-[#162f5d]" : "bg-white/15 text-white/60"}`}>2</span>
              <span className={`text-[14px] font-black ${branchId ? "text-white" : "text-white/60"}`}>{T.stepYourDetails}</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" required placeholder={T.fullName} className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm" />
              <input type="tel" name="phone" required placeholder={T.phone} className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm" />
            </div>

            <div className="relative">
              <select
                name="subject"
                defaultValue=""
                key={branchId}
                disabled={!branch}
                className="appearance-none bg-white/10 text-white rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent text-sm disabled:opacity-50 [&>option]:text-[#162f5d]"
              >
                <option value="" disabled>{branch ? T.chooseSubject : T.chooseBranchFirst}</option>
                {branch?.formTopics.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
            </div>

            <textarea rows={3} name="message" placeholder={T.message} className="bg-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 w-full outline-none focus:ring-1 focus:ring-[#ecbb3f] border border-transparent resize-none text-sm" />

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input type="checkbox" checked={kvkk} onChange={(e) => setKvkk(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#ecbb3f]" />
              <span className="text-[13px] text-white/60 leading-snug">
                <a href="/kvkk" target="_blank" className="underline text-[#ecbb3f] font-bold">{T.kvkkLink}</a> {T.kvkkRest}
              </span>
            </label>

            <button
              type="submit"
              disabled={!kvkk || status === "sending"}
              className="bg-gradient-to-r from-[#dfa932] to-[#b88924] hover:from-[#cda669] hover:to-[#dfa932] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest uppercase rounded-lg px-8 py-4 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              {status === "sending" ? T.sending : branch ? T.submitFor(branch.shortName) : T.submit}
              <ArrowRight size={18} />
            </button>

            {status === "success" && (
              <div className="bg-green-400/20 border border-green-400/40 text-green-300 rounded-xl px-5 py-4 text-sm font-semibold">
                {T.sentTo(branch?.name ?? "")}
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
