"use client";
import { motion } from "framer-motion";

export default function Process({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: { 
      title: "MÉTODO AUDIOVISUAL", 
      desc: "Flujo de trabajo optimizado para narrativa cinematográfica.",
      steps: ["PRE-PRODUCCIÓN", "PRODUCCIÓN", "POST-PRODUCCIÓN"]
    },
    en: { 
      title: "AV WORKFLOW", 
      desc: "Optimized workflow for cinematic storytelling.",
      steps: ["PRE-PRODUCTION", "PRODUCTION", "POST-PRODUCTION"]
    }
  };

  return (
    <section id="method" className="py-40 px-6 md:px-20 bg-[#050505]">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{t[lang].title}</h2>
        <p className="text-[#D90429] font-mono text-xs tracking-widest uppercase">{t[lang].desc}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-white/10">
        {t[lang].steps.map((step, i) => (
          <div key={i} className="p-12 border-r border-white/10 last:border-r-0 group hover:bg-[#D90429]/5 transition-all">
            <span className="text-[#D90429] font-mono text-xs block mb-10">TC: 00:0{i+1}:00:00</span>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">{step}</h3>
            <div className="w-8 h-[2px] bg-[#D90429] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
