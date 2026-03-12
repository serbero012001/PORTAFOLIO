"use client";
import { motion } from "framer-motion";

export default function Experience({ lang }: { lang: "es" | "en" }) {
  const experiences = [
    {
      date: "2024 — 2025",
      company: "URBASER",
      role: lang === "es" ? "PRODUCCIÓN MULTIMEDIA IN-HOUSE" : "IN-HOUSE MULTIMEDIA PRODUCTION",
      desc: lang === "es" ? "DESARROLLO DE IDENTIDAD AUDIOVISUAL PARA LA SEDE SOACHA Y GESTIÓN DE CONTENIDOS CORPORATIVOS." : "AUDIOVISUAL IDENTITY DEVELOPMENT FOR SOACHA BRANCH AND CORPORATE CONTENT MANAGEMENT."
    },
    {
      date: "2023 — 2026",
      company: "FREELANCE",
      role: lang === "es" ? "CREATIVE VISUAL PRODUCER" : "CREATIVE VISUAL PRODUCER",
      desc: lang === "es" ? "SISTEMAS VISUALES Y CONTENIDO DINÁMICO PARA PROYECTOS INDEPENDIENTES DE ALTO IMPACTO." : "VISUAL SYSTEMS AND DYNAMIC CONTENT FOR HIGH-IMPACT INDEPENDENT PROJECTS."
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO CENTRADO Y COMPACTO (JERARQUÍA Y ALINEACIÓN) */}
        <div className="mb-20 md:mb-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tighter uppercase leading-none">
            {lang === "es" ? "TRAYECTORIA" : "EXPERIENCE"}
          </h2>
          {/* Elemento de diseño: Línea de acento minimalista */}
          <div className="w-12 h-[3px] bg-[#D90429] mt-4" />
        </div>

        {/* LISTADO TÉCNICO (EQUILIBRIO Y CONTRASTE) */}
        <div className="relative space-y-24 md:space-y-32">
          {/* Línea vertical de tiempo (Sustituye al 'History' de fondo) */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#D90429] via-white/5 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative md:pl-16 group"
            >
              {/* Punto de conexión (Solo PC) */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-[#D90429] rounded-full hidden md:block group-hover:scale-150 transition-transform" />

              <div className="flex flex-col gap-4">
                {/* FECHA CON ALTO CONTRASTE */}
                <span className="text-[#D90429] font-mono text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                  {exp.date}
                </span>

                {/* EMPRESA */}
                <h3 className="text-4xl md:text-7xl font-serif font-black text-white tracking-tighter uppercase leading-none group-hover:italic transition-all duration-500">
                  {exp.company}
                </h3>
                
                {/* ROL Y DESCRIPCIÓN */}
                <div className="max-w-2xl border-t border-white/5 pt-4 mt-2">
                  <h4 className="text-white/40 font-mono text-[9px] md:text-xs font-bold mb-4 tracking-widest uppercase">
                    {exp.role}
                  </h4>
                  <p className="text-white/60 text-xs md:text-base font-light leading-relaxed uppercase tracking-widest">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
