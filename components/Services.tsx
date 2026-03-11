"use client";
import { motion } from "framer-motion";

const CONTENT = {
  es: [
    { id: "01", title: "Estrategia de Contenidos", desc: "Planificación profesional para medios audiovisuales y redes sociales." },
    { id: "02", title: "Edición de Video Profesional", desc: "Post-producción completa con narrativa, color grading y motion graphics." },
    { id: "03", title: "Diseño de Identidad y Animación", desc: "Branding, diseño gráfico y animaciones para destacar visualmente." },
  ],
  en: [
    { id: "01", title: "Content Strategy", desc: "Professional planning for audiovisual media and social networks." },
    { id: "02", title: "Professional Video Editing", desc: "Full post-production with narrative, color grading, and motion graphics." },
    { id: "03", title: "Identity Design & Animation", desc: "Branding, graphic design, and animations to stand out visually." },
  ]
};

export default function Services({ lang = "es" }: { lang: "es" | "en" }) {
  const items = CONTENT[lang];

  return (
    <section id="method" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="grid gap-16 max-w-6xl mx-auto">
        {items.map((s) => (
          <motion.div
            key={s.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-24 group"
          >
            <span className="absolute left-0 top-0 text-6xl md:text-8xl font-bold text-[#D90429]/10 group-hover:text-[#D90429]/30 transition-colors font-serif">
              {s.id}
            </span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {s.title}
            </h3>
            <p className="text-lg text-[#F5F5F5]/60 max-w-xl leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
