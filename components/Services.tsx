"use client";
import { motion } from "framer-motion";

const CONTENT = {
  es: [
    { id: "01", title: "Estrategia de Contenidos", desc: "Planificación profesional para medios audiovisuales y redes sociales.", tag: "ESTRATEGIA" },
    { id: "02", title: "Edición de Video Profesional", desc: "Post-producción completa con narrativa, color grading y motion graphics.", tag: "POST-PRODUCCIÓN" },
    { id: "03", title: "Diseño de Identidad y Animación", desc: "Branding, diseño gráfico y animaciones para destacar visualmente.", tag: "BRANDING" },
  ],
  en: [
    { id: "01", title: "Content Strategy", desc: "Professional planning for audiovisual media and social networks.", tag: "STRATEGY" },
    { id: "02", title: "Professional Video Editing", desc: "Full post-production with narrative, color grading, and motion graphics.", tag: "POST-PRODUCTION" },
    { id: "03", title: "Identity Design & Animation", desc: "Branding, graphic design, and animations to stand out visually.", tag: "BRANDING" },
  ]
};

export default function Services({ lang = "es" }: { lang: "es" | "en" }) {
  const items = CONTENT[lang];

  return (
    <section id="method" className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-20 md:gap-32">
          {items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-12 group"
            >
              {/* NÚMERO (CONTRASTE Y REPETICIÓN) */}
              <div className="relative">
                <span className="text-7xl md:text-8xl font-serif font-black text-[#D90429] opacity-40 group-hover:opacity-100 transition-all duration-700 select-none">
                  {s.id}
                </span>
                <div className="hidden md:block w-full h-[1px] bg-[#D90429]/30 mt-4 group-hover:bg-[#D90429] transition-all" />
              </div>

              {/* CONTENIDO (JERARQUÍA Y ALINEACIÓN) */}
              <div className="flex flex-col justify-start">
                <span className="text-[#D90429] font-mono text-[10px] tracking-[0.4em] mb-4 opacity-60">
                  {s.tag}
                </span>
                <h3 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none mb-6 tracking-tighter uppercase group-hover:italic transition-all">
                  {s.title}
                </h3>
                <p className="text-sm md:text-lg text-white/50 max-w-2xl leading-relaxed font-light uppercase tracking-wide">
                  {s.desc}
                </p>
              </div>

              {/* Decoración lateral de repetición técnica */}
              <div className="absolute -right-4 top-0 h-full w-[1px] bg-gradient-to-b from-[#D90429]/20 via-transparent to-transparent hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
