"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";


// IMPORTACIÓN DE COMPONENTES SEPARADOS
import NavbarProyectos from "@/components/NavbarProyectos";
import MotionSection from "@/components/MotionSection";

// ASSETS
import portadaKanat from "@/assets/work/portada-kanat.jpg";
import portadaCanecart from "@/assets/work/portada-canecart.jpg";
import diseno1 from "@/assets/work/diseno1.jpg";
import diseno2 from "@/assets/work/diseno2.jpg";
import diseno3 from "@/assets/work/diseno3.jpg";

const TEXTS = {
  es: {
    back: "VOLVER",
    designs: "GRÁFICO",
    projects: [
      { 
        title: "SOLOMAC LABORATORY", 
        concept: "POSTER PUBLICITARIO PARA LABORATORIO TÉCNICO. ENFOQUE EN RESALTAR HERRAMIENTAS DE PRECISIÓN Y HARDWARE APPLE CON ESTÉTICA PREMIUM.",
        role: "DISEÑO VISUAL"
      },
      { 
        title: "EL NUEVO BOMBARDERO", 
        concept: "COMPOSICIÓN DEPORTIVA PARA JEISON ORTIZ (TOP 10 NACIONAL SUB-15). DISEÑO DINÁMICO QUE CELEBRA SU RÉCORD DE 37 GOLES.",
        role: "COMPOSICIÓN DIGITAL"
      },
      { 
        title: "SOLOMAC SHOWCASE", 
        concept: "DISEÑO DE VITRINA INFORMATIVA. INTEGRACIÓN DE IDENTIDAD CORPORATIVA Y PUNTOS DE CONTACTO DIGITAL PARA EL CLIENTE.",
        role: "BRANDING"
      }
    ],
    prev: "ANTERIOR",
    next: "SIGUIENTE",
    // NUEVOS TEXTOS PARA EL EPK
    epkTitle: "NÚCLEO",
    epkSubtitle: "EPK & VIDEOCLIP",
    epkConcept: "Un viaje nocturno por Bogotá que contrasta la realidad cruda del ascenso con un universo digital distorsionado. El videoclip para 'NÚCLEO' de Ghost y Nascar explora la fama, la velocidad y la pérdida del control a través de una estética Glitch Core.",
    epkRole: "OPERADOR DE CÁMARA / EDITOR / PRODUCTOR",
    watchTeaser: "VER TEASER",
    downloadEpk: "DESCARGAR EPK",
  },
  en: {
    back: "BACK",
    designs: "DESIGNS",
    projects: [
      { 
        title: "SOLOMAC LABORATORY", 
        concept: "ADVERTISING POSTER FOR TECHNICAL LAB. FOCUSED ON HIGHLIGHTING PRECISION TOOLS AND APPLE HARDWARE WITH PREMIUM AESTHETICS.",
        role: "VISUAL DESIGN"
      },
      { 
        title: "THE NEW BOMBER", 
        concept: "SPORTS COMPOSITION FOR JEISON ORTIZ (NATIONAL TOP 10 U-15). DYNAMIC DESIGN CELEBRATING HIS 37-GOAL RECORD.",
        role: "DIGITAL COMPOSITION"
      },
      { 
        title: "SOLOMAC SHOWCASE", 
        concept: "INFORMATIVE STOREFRONT DESIGN. INTEGRATION OF CORPORATE IDENTITY AND DIGITAL CONTACT POINTS FOR THE CUSTOMER.",
        role: "BRANDING"
      }
    ],
    prev: "PREV",
    next: "NEXT",
    // NUEVOS TEXTOS PARA EL EPK
    epkTitle: "NÚCLEO",
    epkSubtitle: "EPK & MUSIC VIDEO",
    epkConcept: "A nocturnal journey through Bogotá contrasting the raw reality of ascent with a distorted digital universe. The music video for 'NÚCLEO' by Ghost and Nascar explores fame, speed, and loss of control through a Glitch Core aesthetic.",
    epkRole: "CAMERA OPERATOR / EDITOR / PRODUCER",
    watchTeaser: "WATCH TEASER",
    downloadEpk: "DOWNLOAD EPK",
    bts: "BEHIND THE SCENES"
  }
};

const galeriaDiseno = [
  { id: 1, img: diseno1 },
  { id: 2, img: diseno2 },
  { id: 3, img: diseno3 },
];

export default function ProyectosPage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [index, setIndex] = useState(0);
  const t = TEXTS[lang];

  const next = () => setIndex((prev) => (prev + 1) % galeriaDiseno.length);
  const prev = () => setIndex((prev) => (prev - 1 + galeriaDiseno.length) % galeriaDiseno.length);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#D90429] overflow-x-hidden">
      
      {/* NAVBAR UNIFICADO (DESDE COMPONENTS) */}
      <NavbarProyectos 
        lang={lang} 
        setLang={setLang} 
        backText={t.back} 
      />

      <main className="max-w-7xl mx-auto px-6 space-y-3 md:space-y-60 mt-10 md:mt-20">

               
        
        {/* 01. DISEÑO GRÁFICO (TRADUCCIÓN Y RESPONSIVE) */}
<section className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
  <div className="w-full md:w-1/3 md:sticky md:top-24">
    <span className="text-[#D90429] font-serif italic text-3xl md:text-4xl block mb-2">01.</span>
    <h2 className="text-[15vw] md:text-7xl lg:text-8xl font-black uppercase leading-[0.8] mb-8 tracking-tighter text-white">
      {t.designs}
    </h2>
    
    <AnimatePresence mode="wait">
      <motion.div
        key={`${lang}-${index}`} // ESTO CORRIGE EL IDIOMA: Detecta cambio de lengua o imagen
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="border-l-2 border-[#D90429] pl-6 mt-6 md:mt-10"
      >
        <h4 className="text-white font-bold uppercase text-sm mb-2 tracking-widest">
          {t.projects[index].title}
        </h4>
        <p className="text-white/50 text-[10px] md:text-[11px] leading-relaxed mb-4 font-light uppercase tracking-wider">
          {t.projects[index].concept}
        </p>
        <div className="text-[9px] font-mono text-[#D90429] uppercase tracking-widest font-black">
           {t.projects[index].role}
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
  
  {/* VISUALIZADOR (EQUILIBRIO Y CONTRASTE) */}
  <div className="w-full md:w-2/3">
    <div className="relative w-full border border-white/5 bg-[#050505] rounded-sm p-4 md:p-12 flex justify-center items-center overflow-hidden h-[60vh] md:h-[80vh] shadow-2xl">
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full flex justify-center items-center z-10"
        >
          <Image 
            src={galeriaDiseno[index].img} 
            alt="Proyecto"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* CONTROLES TRADUCIDOS */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-6 md:gap-8 items-center bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-30">
        <button onClick={prev} className="text-white/30 hover:text-[#D90429] font-mono text-[9px] md:text-[10px] transition-all uppercase tracking-widest"> 
          {t.prev} 
        </button>
        <span className="text-white/10 text-[9px] md:text-[10px] font-mono">0{index + 1}  0{galeriaDiseno.length}</span>
        <button onClick={next} className="text-[#D90429] hover:text-white font-mono text-[9px] md:text-[10px] transition-all uppercase tracking-widest"> 
          {t.next} 
        </button>
      </div>
    </div>
  </div>
</section>



        {/* 02. DIRECCIÓN Y PRODUCCIÓN AUDIOVISUAL (TARJETAS COMPACTAS) */}
        <section id="direction" className="border-t border-white/10 pt-16 md:pt-24 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* TÍTULO COMPACTO */}
            <div className="mb-12 md:mb-16">
              <span className="text-[#D90429] font-mono text-[10px] tracking-[0.5em] uppercase font-black block mb-3">
                {lang === "es" ? "PORTAFOLIO AUDIOVISUAL" : "AUDIOVISUAL PORTFOLIO"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                {lang === "es" ? "DIRECCIÓN Y" : "DIRECTION &"}{" "}
                <span className="text-[#D90429]">
                  {lang === "es" ? "PRODUCCIÓN" : "PRODUCTION"}
                </span>
              </h2>
            </div>

            {/* GRID DE TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* TARJETA 1: NÚCLEO (DESTACADA - 2 COLUMNAS) */}
              <Link 
                href="/proyectos/nucleo"
                className="group relative md:col-span-2 h-[420px] md:h-[520px] bg-[#0a0a0a] border border-white/5 overflow-hidden rounded-2xl hover:border-[#D90429]/50 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  >
                    <source src="/videos/teaser-nucleo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
                  <span className="text-[#D90429] font-mono text-[10px] tracking-[0.4em] uppercase font-black mb-3">
                    01. EPK / VIDEOCLIP
                  </span>
                  <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-3 leading-none">
                    NÚCLEO
                  </h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                    GHOST × NASCAR — 2026
                  </p>
                  
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-xs text-[#D90429] tracking-widest uppercase font-bold">
                      VER PROYECTO
                    </span>
                    <span className="text-[#D90429] group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>

              {/* TARJETA 2: ESTA VEZ SÍ */}
              <Link 
                href="/proyectos/esta-vez-si"
                className="group relative h-[420px] md:h-[520px] bg-[#0a0a0a] border border-white/5 overflow-hidden rounded-2xl hover:border-[#D90429]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  >
                    <source src="/videos/esta-vez-si.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <span className="text-[#D90429] font-mono text-[10px] tracking-[0.4em] uppercase font-black mb-3">
                    02. CORTOMETRAJE
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
                    ESTA VEZ SÍ
                  </h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
                    2026
                  </p>
                </div>
              </Link>

              {/* TARJETA 3: OTRA VEZ (ANCHO COMPLETO) */}
              <Link 
                href="/proyectos/otra-vez"
                className="group relative md:col-span-3 h-[280px] md:h-[320px] bg-[#0a0a0a] border border-white/5 overflow-hidden rounded-2xl hover:border-[#D90429]/50 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  >
                    <source src="/videos/otra-vez.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end md:justify-center p-8 md:p-12 z-10">
                  <span className="text-[#D90429] font-mono text-[10px] tracking-[0.4em] uppercase font-black mb-3">
                    03. CORTOMETRAJE
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
                    OTRA VEZ
                  </h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">
                    2026
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>




        {/* 03. IDENTIDAD VISUAL (ESTRUCTURA EDITORIAL) */}
<section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-24 py-20">
  
  {/* COLUMNA IZQUIERDA: TEXTO Y BOTONES (JERARQUÍA Y ALINEACIÓN) */}
  <div className="w-full lg:w-[45%]">
    <span className="text-[#D90429] font-serif italic text-3xl md:text-4xl block mb-2 leading-none">
      {lang === "es" ? "Visual" : "Visual"}
    </span>
    
    {/* TÍTULO RESPONSIVO: text-[12vw] evita que la palabra se corte en móvil */}
    <h2 className="text-[12vw] md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[0.85] mb-12 tracking-tighter uppercase">
      IDENTIDAD <br /> VISUAL
    </h2>
    
    {/* BOTONES DE DESCARGA (REPETICIÓN Y EQUILIBRIO) */}
    <div className="w-full space-y-4 max-w-sm">
      <a 
        href="/docs/KANAT.pdf" 
        target="_blank" 
        className="flex justify-between items-center border border-white/10 p-6 hover:border-[#D90429] hover:bg-[#D90429]/5 transition-all group"
      >
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#D90429]">KANÁT</h4>
        </div>
      </a>

      <a 
        href="/docs/CANECART.pdf" 
        target="_blank" 
        className="flex justify-between items-center border border-white/10 p-6 hover:border-[#D90429] hover:bg-[#D90429]/5 transition-all group"
      >
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-white uppercase tracking-tighter group-hover:text-[#D90429]">CANECART</h4>
        </div>
      </a>
    </div>
  </div>

  {/* COLUMNA DERECHA: PREVIEWS (CONTRASTE Y EQUILIBRIO) */}
  <div className="w-full lg:w-[45%] flex flex-col gap-8 md:gap-10">
    <motion.div 
      whileHover={{ y: -5 }} 
      className="relative aspect-video w-full bg-[#111] border border-white/5 overflow-hidden shadow-2xl group cursor-pointer" 
      onClick={() => window.open("/docs/KANAT.pdf", "_blank")}
    >
      <Image 
        src={portadaKanat} 
        alt="Manual Kanát" 
        fill 
        className="object-cover opacity-70 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
    </motion.div>

    <motion.div 
      whileHover={{ y: -5 }} 
      className="relative aspect-video w-full bg-[#111] border border-white/5 overflow-hidden shadow-2xl group cursor-pointer" 
      onClick={() => window.open("/docs/CANECART.pdf", "_blank")}
    >
      <Image 
        src={portadaCanecart} 
        alt="Manual Canecart" 
        fill 
        className="object-cover opacity-70 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
    </motion.div>
  </div>
</section>

  <div className="w-full">
    <MotionSection lang={lang} />
  </div>

      </main>
      <Footer lang={lang} />
    </div>
  );
}
