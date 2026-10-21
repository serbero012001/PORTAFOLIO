"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      line1: "NARRATIVA",
      line2: "VISUAL",
      line3: "DEL GUIÓN A LA PANTALLA",
      ctaProjects: "VER PROYECTOS"
    },
    en: {
      line1: "VISUAL",
      line2: "NARRATIVE",
      line3: "FROM SCRIPT TO SCREEN",
      ctaProjects: "VIEW PROJECTS"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] px-6 py-24 md:py-0 overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center w-full max-w-7xl mx-auto">
        
        {/* CONTENEDOR DE IMAGEN */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative w-full flex justify-center md:justify-end order-1 md:order-2 mt-10 md:mt-0"
        >
          <div className="relative aspect-[3/4] w-full max-w-[280px] md:max-w-md bg-[#111] border border-white/5 overflow-hidden">
            <img 
              src="/perfil.jpg" 
              alt="Alejandro Villa, productor audiovisual" 
              className="w-full h-full object-cover hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* BLOQUE DE TEXTO */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left order-2 md:order-1 w-full"
        >
          <h1 className="text-[clamp(2.8rem,12vw,140px)] md:text-[clamp(4rem,7vw,120px)] font-serif font-black text-white leading-[0.85] tracking-tighter uppercase mb-4">
            {t[lang].line1} <br /> 
            <span className="text-white/90">{t[lang].line2}</span>
          </h1>

          <p className="text-[#D90429] font-mono text-[clamp(0.8rem,4vw,18px)] md:text-[clamp(1rem,1.5vw,18px)] leading-tight mb-10 font-bold tracking-[0.2em] uppercase">
            {t[lang].line3}
          </p>

          {/* BOTÓN PRINCIPAL */}
          <div className="flex items-center mt-8">
            <Link 
              href="/proyectos"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#D90429] text-white font-mono text-[11px] tracking-[0.2em] font-bold uppercase overflow-hidden transition-all duration-300 hover:bg-[#b00322] shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:shadow-[0_0_30px_rgba(217,4,41,0.5)]"
            >
              <span className="relative z-10">{t[lang].ctaProjects}</span>
              <span className="ml-3 text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}