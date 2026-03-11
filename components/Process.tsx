"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process({ lang }: { lang: "es" | "en" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Corregido: añadí los valores de entrada [0, 1]
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const t = {
    es: { 
      bgTitle: "PRODUCCIÓN AUDIOVISUAL",
      title: "MÉTODO DE TRABAJO", 
      desc: "Flujo de trabajo optimizado para narrativa cinematográfica.",
      steps: [
        { title: "PRE-PRODUCCIÓN", detail: "Guion literario, técnico y estrategia de impacto." },
        { title: "PRODUCCIÓN", detail: "Captura de alta fidelidad. Dirección de arte y ejecución técnica." },
        { title: "POST-PRODUCCIÓN", detail: "Montaje final, color grading y motion graphics." }
      ]
    },
    en: { 
      bgTitle: "AUDIOVISUAL PRODUCTION",
      title: "WORKFLOW METHOD", 
      desc: "Optimized workflow for cinematic storytelling.",
      steps: [
        { title: "PRE-PRODUCTION", detail: "Literary script, technical and impact strategy." },
        { title: "PRODUCTION", detail: "High-fidelity capture. Art direction and technical execution." },
        { title: "POST-PRODUCTION", detail: "Final editing, color grading and motion graphics." }
      ]
    }
  };

  return (
    <section ref={containerRef} id="method" className="relative py-40 px-6 md:px-20 bg-[#050505] overflow-hidden">
      
      {/* COMENTARIO CORREGIDO: TEXTO DE FONDO SUTIL */}
      <motion.div 
        style={{ x: xTranslation }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap select-none pointer-events-none opacity-[0.03] z-0"
      >
        <h2 className="text-[20vw] font-serif font-black text-white italic leading-none">
          {t[lang].bgTitle}
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tighter italic">
            {t[lang].title}
          </h2>
          <div className="w-20 h-1 bg-[#D90429] mb-4"></div>
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">{t[lang].desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-white/5 bg-[#080808]/50 backdrop-blur-sm">
          {t[lang].steps.map((step, i) => (
            <div key={i} className="p-12 border-r border-white/5 last:border-r-0 group hover:bg-[#D90429]/5 transition-all relative overflow-hidden">
              <span className="text-[#D90429] font-mono text-[10px] block mb-8 opacity-60 italic">
</span>

              <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter group-hover:text-[#D90429] transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-sm mb-8">
                {step.detail}
              </p>
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-[#D90429] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
