"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Work() {
  return (
    <section id="work" className="py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#D90429] font-mono text-xs tracking-[0.5em] mb-8 uppercase">Portfolio Showcase</span>
        
        <h2 className="text-6xl md:text-[10rem] font-serif font-bold text-white leading-none mb-12 tracking-tighter">
          MIS <br /> <span className="italic text-[#D90429]">PROYECTOS</span>
        </h2>

        <p className="text-white/50 text-xl md:text-2xl max-w-3xl leading-relaxed mb-16 font-light">
          Desde dirección de cortometrajes hasta sistemas de identidad visual complejos. 
          Cada proyecto es una pieza de ingeniería multimedia.
        </p>

        {/* Botón Masivo hacia la Landing de Proyectos */}
        <Link 
          href="/proyectos" 
          className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white border-2 border-[#D90429] rounded-full transition duration-300 ease-out shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:bg-[#D90429]"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#D90429] group-hover:translate-x-0 ease">
            EXPLORAR ARCHIVOS ↗
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-[#D90429] transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-[0.2em] text-sm">
            Ver Portafolio Completo
          </span>
          <span className="relative invisible">Ver Portafolio Completo</span>
        </Link>
      </div>
    </section>
  );
}
