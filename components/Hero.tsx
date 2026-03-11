"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import perfil from "@/assets/foto.png";

export default function Hero({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: { role: "PRODUCTOR MULTIMEDIA", title: "Narrativa Visual", sub: "Del guión a la pantalla", cta: "Explorar Archivos" },
    en: { role: "MULTIMEDIA PRODUCER", title: "Visual Storytelling", sub: "From script to screen", cta: "Explore Files" }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden px-6 md:px-20">
      <div className="absolute top-40 left-10 font-mono text-[10px] text-[#D90429]/30 uppercase tracking-[0.5em] rotate-90 origin-left">
  {t[lang].role}  
</div>


      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h2 className="text-[12px] font-mono text-[#D90429] mb-4 tracking-[0.3em] uppercase">{t[lang].role}</h2>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none mb-6">
            {t[lang].title} <br />
            <span className="italic text-[#D90429]">{t[lang].sub}</span>
          </h1>
          <a href="#work" className="inline-block mt-8 px-8 py-3 border border-[#D90429] text-[#D90429] font-mono text-[10px] uppercase tracking-widest hover:bg-[#D90429] hover:text-white transition-all">
            {t[lang].cta}
          </a>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative aspect-[3/4] w-full max-w-md ml-auto border border-white/10 p-2">
          <Image src={perfil} fill className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" alt="Alejandro" priority />
        </motion.div>
      </div>
    </section>
  );
}
