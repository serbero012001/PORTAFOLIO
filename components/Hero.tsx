"use client";
import { motion } from "framer-motion";

export default function Hero({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      line1: "NARRATIVA",
      line2: "VISUAL",
      line3: "DEL GUIÓN A LA PANTALLA",
      cta: "EXPLORAR ARCHIVOS"
    },
    en: {
      line1: "VISUAL",
      line2: "NARRATIVE",
      line3: "FROM SCRIPT TO SCREEN",
      cta: "EXPLORE ARCHIVES"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] px-6 py-10 md:py-0 overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto">
        
        {/* CONTENEDOR DE IMAGEN (EQUILIBRIO VISUAL) */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="relative w-full flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative aspect-[3/4] w-full max-w-[300px] md:max-w-md bg-[#111] border border-white/5 overflow-hidden">
            <img 
              src="/perfil.jpg" 
              alt="Alejandro"
              className="w-full h-full object-cover  hover:opacity-100 transition-opacity duration-1000"
            />
            {/* Overlay sutil para mejorar el contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* BLOQUE DE TEXTO (JERARQUÍA Y ALINEACIÓN) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="text-left order-2 md:order-1"
        >
          <h1 className="text-[15vw] md:text-[9vw] font-serif font-black text-white leading-[0.8] tracking-tighter uppercase mb-2">
            {t[lang].line1} <br /> 
            <span className="text-white/90">{t[lang].line2}</span>
          </h1>

          <p className="text-[#D90429] font-mono text-[5vw] md:text-[1.8vw] leading-none mb-12 font-bold tracking-tight uppercase">
            {t[lang].line3}
          </p>

          <div className="relative inline-block group">
            <a 
              href="#work" 
              className="text-white font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase py-2 transition-all block"
            >
              {t[lang].cta}
            </a>

            <div className="w-12 h-[2px] bg-[#D90429] transition-all duration-500 group-hover:w-full" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
