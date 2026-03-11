"use client";
import { motion } from "framer-motion";

const TEXTS = {
  es: {
    title: "Producción Audiovisual",
    steps: [
      { id: "01", step: "PRE-PRODUCCIÓN", desc: "Donde nace la narrativa. Guion literario, técnico y estrategia de impacto." },
      { id: "02", step: "PRODUCCIÓN", desc: "Captura de alta fidelidad. Dirección de arte y ejecución técnica en set." },
      { id: "03", step: "POST-PRODUCCIÓN", desc: "El montaje final. Color grading, diseño sonoro y motion graphics avanzados." },
    ]
  },
  en: {
    title: "MY PROCESS",
    steps: [
      { id: "01", step: "PRE-PRODUCTION", desc: "Where the narrative is born. Literary and technical script, impact strategy." },
      { id: "02", step: "PRODUCTION", desc: "High-fidelity capture. Art direction and technical execution on set." },
      { id: "03", step: "POST-PRODUCTION", desc: "The final cut. Color grading, sound design, and advanced motion graphics." },
    ]
  }
};

export default function Process({ lang }: { lang: "es" | "en" }) {
  const t = TEXTS[lang];

  return (
    <section id="method" className="py-40 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <h2 className="text-[10vw] font-serif font-bold text-[#D90429] leading-none mb-20 tracking-tighter opacity-20 absolute">
        {t.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-1 px-4">
        {t.steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border-l border-[#D90429] p-8 hover:bg-[#D90429]/5 transition-all group relative overflow-hidden"
          >
            <span className="text-[#D90429] font-mono text-sm mb-4 block">[{s.id}]</span>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform">
              {s.step}
            </h3>
            <p className="text-[#F5F5F5]/60 text-lg leading-relaxed font-light">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
