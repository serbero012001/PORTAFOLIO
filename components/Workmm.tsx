"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Work({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      pre: "PORTFOLIO SHOWCASE",
      line1: "MIS",
      line2: "PROYECTOS",
      desc: "Desde dirección de cortometrajes hasta sistemas de identidad visual complejos. Cada proyecto es una pieza de ingeniería multimedia.",
      cta: "VER PORTAFOLIO COMPLETO"
    },
    en: {
      pre: "PORTFOLIO SHOWCASE",
      line1: "MY",
      line2: "PROJECTS",
      desc: "From short film direction to complex visual identity systems. Each project is a piece of multimedia engineering.",
      cta: "VIEW FULL PORTFOLIO"
    }
  };

  return (
    <section id="work" className="py-24 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* INDICADOR (REPETICIÓN) */}
        <span className="text-[#D90429] font-mono text-[9px] md:text-xs tracking-[0.5em] mb-8 md:mb-12 uppercase font-black"
        >
           {t[lang].pre}
        </span>
        
        {/* TÍTULO RESPONSIVO (JERARQUÍA Y ALINEACIÓN) */}
        <h2 className="flex flex-col items-center mb-12 md:mb-16">
          <span className="text-6xl md:text-[10rem] font-serif font-bold text-white leading-none tracking-tighter uppercase">
            {t[lang].line1}
          </span>
          {/* text-[18vw] en móvil asegura que no se rompa y ocupe el ancho justo */}
          <span className="text-[16vw] md:text-[12rem] font-serif font-black text-[#D90429] italic leading-[0.8] tracking-tighter uppercase mt-2">
            {t[lang].line2}
          </span>
        </h2>

        {/* DESCRIPCIÓN (EQUILIBRIO) */}
        <p className="text-white/50 text-sm md:text-2xl max-w-2xl leading-relaxed mb-16 font-light uppercase tracking-widest">
          {t[lang].desc}
        </p>

        {/* CTA REFINADO (SIN FLECHA Y MÁS LIGERO) */}
        <Link 
          href="/proyectos" 
          className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white border border-[#D90429]/40 rounded-full transition-all duration-500 hover:border-[#D90429] shadow-[0_0_30px_rgba(217,4,41,0.1)]"
        >
          <span className="relative z-10 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            {t[lang].cta}
          </span>
          {/* Efecto de relleno sutil al hover */}
          <div className="absolute inset-0 bg-[#D90429] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>

      {/* ELEMENTO DE DISEÑO DE FONDO (CONTRASTE) */}
      <div className="absolute -bottom-20 -right-20 text-[30vw] font-serif font-black text-white/5 italic pointer-events-none select-none hidden md:block">
        WORKS
      </div>
    </section>
  );
}
