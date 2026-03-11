"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import portadaKanat from "@/assets/work/portada-kanat.jpg"; 
import portadaCanecart from "@/assets/work/portada-canecart.jpg";

// 1. TUS IMPORTS (Verifica que estas rutas existan en tu carpeta assets)
import diseno1 from "@/assets/work/diseno1.jpg";
import diseno2 from "@/assets/work/diseno2.jpg";
import diseno3 from "@/assets/work/diseno3.jpg";

const TEXTS = {
  es: {
    back: "[ ← VOLVER ]",
    graphic: "Diseño",
    designs: "GRÁFICO",
    desc: "Piezas de composición visual y retoque digital avanzado.",
  },
  en: {
    back: "[ ← BACK ]",
    graphic: "Graphic",
    designs: "DESIGNS",
    desc: "Visual composition pieces and advanced digital retouching.",
  }
};

const galeriaDiseno = [
  { 
    id: 1, 
    img: diseno1, 
    title: "SOLOMAC COMMUNITY", 
    concept: "El cliente necesitaba un Poster para su local SOLOMAC.",
  },
  { 
    id: 2, 
    img: diseno2, 
    title: "PROYECTO 2", 
    concept: "Descripción del segundo proyecto gráfico.",
  },
  { 
    id: 3, 
    img: diseno3, 
    title: "PROYECTO 3", 
    concept: "Descripción del tercer proyecto gráfico.",
  }
];

export default function ProyectosPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [index, setIndex] = useState(0);
  const t = TEXTS[lang];

  const next = () => setIndex((prev) => (prev + 1) % galeriaDiseno.length);
  const prev = () => setIndex((prev) => (prev - 1 + galeriaDiseno.length) % galeriaDiseno.length);

  return (
    <div className="bg-[#050505] min-h-screen text-white pb-40 selection:bg-[#D90429]">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="p-8 sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 flex justify-between items-center">
        <Link href="/" className="text-[#D90429] font-mono text-[10px] tracking-[0.3em] border border-[#D90429]/30 px-6 py-2 hover:bg-[#D90429] hover:text-white transition-all uppercase font-bold">
          {t.back}
        </Link>
        <button 
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="text-[#D90429] font-mono text-[10px] border border-[#D90429]/30 px-4 py-2 rounded-full font-bold hover:bg-[#D90429] hover:text-white transition-all"
        >
          {lang === "es" ? "ENGLISH" : "ESPAÑOL"}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 space-y-60 mt-20">
        
        {/* 01. DISEÑO GRÁFICO */}
        <section className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky md:top-24">
            <span className="text-[#D90429] font-serif italic text-4xl block mb-2">01.</span>
            <h2 className="text-7xl font-black uppercase leading-none mb-8 tracking-tighter">{t.designs}</h2>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={galeriaDiseno[index].id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="border-l-2 border-[#D90429] pl-6 mt-10"
              >
                <h4 className="text-white font-bold uppercase text-sm mb-2">{galeriaDiseno[index].title}</h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4 font-light">{galeriaDiseno[index].concept}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="md:w-2/3 w-full">
            <div className="relative w-full border border-white/5 bg-[#0A0A0A] rounded-sm p-4 md:p-12 flex justify-center items-center overflow-hidden min-h-[600px] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={galeriaDiseno[index].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="relative flex justify-center w-full"
                >
                  <Image 
                    src={galeriaDiseno[index].img} 
                    alt={galeriaDiseno[index].title}
                    className="max-h-[75vh] w-auto object-contain shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 right-6 flex gap-6 items-center bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <button onClick={prev} className="text-white/40 hover:text-[#D90429] font-mono text-[10px] transition-all"> ANTERIOR </button>
                <span className="text-white/20 text-[10px] font-mono">{index + 1} / {galeriaDiseno.length}</span>
                <button onClick={next} className="text-[#D90429] hover:text-white font-mono text-[10px] transition-all"> SIGUIENTE </button>
              </div>
            </div>
          </div>
        </section>


        {/* 02. PRODUCCIÓN AUDIOVISUAL - FORMATO VERTICAL */}
        <section id="direction" className="border-t border-white/10 pt-40 text-center">
          <h2 className="text-7xl md:text-9xl font-black mb-4 uppercase tracking-tighter text-white leading-none">
            {lang === "es" ? "PRODUCCIÓN" : "PRODUCTION"} <br />
            <span className="text-[#D90429] opacity-90">{lang === "es" ? "AUDIOVISUAL" : "AUDIOVISUAL"}</span>
          </h2>
          <p className="text-white/40 font-bold uppercase text-[10px] tracking-[1.2em] mb-20">
            {lang === "es" ? "TRABAJOS DIRIGIDOS" : "DIRECTED WORKS"}
          </p>

          {/* Cambiamos el grid para que los videos verticales no ocupen toda la pantalla hacia abajo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto px-6">
            
            {/* Video 01 - Vertical */}
            <div className="group relative aspect-[9/16] bg-[#0a0a0a] border border-white/5 hover:border-[#D90429]/40 transition-all duration-500 shadow-2xl overflow-hidden">
                <video 
                  controls 
                  preload="auto"
                  playsInline
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/videos/esta-vez-si.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Video 02 - Vertical */}
            <div className="group relative aspect-[9/16] bg-[#0a0a0a] border border-white/5 hover:border-[#D90429]/40 transition-all duration-500 shadow-2xl overflow-hidden">
                <video 
                  controls 
                  preload="auto"
                  playsInline
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/videos/otra-vez.mp4" type="video/mp4" />
                </video>
            </div>
          </div>
        </section>

                {/* 03. IDENTIDAD VISUAL (BRANDING) - ALINEACIÓN LATERAL COMPACTA */}
        
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
            
            {/* BLOQUE IZQUIERDO: TEXTO Y BOTONES */}
            <div className="w-full md:w-[40%] flex flex-col items-start">
              <span className="text-[#D90429] font-serif italic text-4xl block mb-2 leading-none">
                {lang === "es" ? "Visual" : "Visual"}
              </span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.8] mb-12 tracking-tighter uppercase">
                IDENTIDAD <br />
                VISUAL
              </h2>
              
              <div className="w-full space-y-4 max-w-[300px]">
                <a href="/docs/KANAT.pdf" target="_blank" className="block border border-white/10 p-5 hover:border-[#D90429] hover:bg-[#D90429]/5 transition-all group">
                  <h4 className="text-xl font-bold text-white uppercase tracking-widest group-hover:text-[#D90429]">KANÁT</h4>
                </a>
                <a href="/docs/CANECART.pdf" target="_blank" className="block border border-white/10 p-5 hover:border-[#D90429] hover:bg-[#D90429]/5 transition-all group">
                  <h4 className="text-xl font-bold text-white uppercase tracking-widest group-hover:text-[#D90429]">CANECART</h4>
                </a>
              </div>
            </div>

            {/* BLOQUE DERECHO: LAS DOS PORTADAS (Una arriba de otra, al lado del texto) */}
            <div className="w-full md:w-[35%] flex flex-col gap-6">
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="relative aspect-video w-full bg-[#111] border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
                onClick={() => window.open("/docs/KANAT.pdf", "_blank")}
              >
                <Image 
                  src={portadaKanat} 
                  alt="Manual Kanát" 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" 
                />
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="relative aspect-video w-full bg-[#111] border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
                onClick={() => window.open("/docs/CANECART.pdf", "_blank")}
              >
                <Image 
                  src={portadaCanecart} 
                  alt="Manual Canecart" 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" 
                />
              </motion.div>
            </div>

          </div>


                        {/* 04. MOTION GRAPHICS - BUCLE INFINITO */}
        <section id="motion" className="py-40 text-center border-t border-white/5 bg-[#050505]">
           <h3 className="text-[#D90429] font-bold text-xs tracking-[1em] mb-12 uppercase">
             {lang === "es" ? "MUESTRA DE ANIMACIÓN" : "MOTION SHOWCASE"}
           </h3>
           
           <div className="max-w-5xl mx-auto px-6">
             <div className="relative aspect-video bg-black border border-white/10 shadow-[0_0_50px_rgba(217,4,41,0.1)] group overflow-hidden">

                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                >
                  <source src="/videos/cortinilla.mp4" type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>

                {/* Brillo decorativo en las esquinas */}
                <div className="absolute inset-0 border-[1px] border-[#D90429]/10 pointer-events-none group-hover:border-[#D90429]/30 transition-colors"></div>
             </div>
           </div>
        </section>

      </main>
    </div>
  );
}
