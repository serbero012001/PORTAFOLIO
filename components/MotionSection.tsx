"use client";
import { motion } from "framer-motion";

export default function MotionSection({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      title1: "GRÁFICOS EN",
      title2: "MOVIMIENTO",
      project: "CORTINA DE CIERRE",
      client: "URBASER"
    },
    en: {
      title1: "MOTION",
      title2: "GRAPHICS",
      project: "CLOSING SEQUENCE",
      client: "URBASER"
    }
  };

  return (
    <section id="motion" className="border-t border-white/10 pt-20 md:pt-40 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="w-full">
          <span className="text-[#D90429] font-serif italic text-3xl md:text-4xl block mb-2 leading-none">04.</span>
          <h2 className="text-[14vw] md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
            {t[lang].title1} <br /> 
            <span className="text-[#D90429] italic opacity-90">{t[lang].title2}</span>
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video bg-[#0A0A0A] border border-white/5 shadow-2xl group overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700">
            <source src="/videos/cortina-urbaser.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <h4 className="text-lg md:text-2xl font-serif font-bold text-white uppercase italic tracking-tight leading-none">
              {t[lang].project} <br /> 
              <span className="text-white/40 text-sm md:text-lg font-mono not-italic tracking-widest uppercase">{t[lang].client}</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
