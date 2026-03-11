"use client";
import { motion } from "framer-motion";

export default function Contact({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      pre: "CONTACTO",
      title: "IMPULSEMOS TU VISIÓN",
      desc: "Productor Multimedia enfocado en resultados de alto impacto visual.",
      mail: "EMAIL",
      wa: "WHATSAPP"
    },
    en: {
      pre: "CONTACT",
      title: "DRIVE YOUR VISION",
      desc: "Multimedia Producer focused on high-impact visual results.",
      mail: "EMAIL",
      wa: "WHATSAPP"
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#D90429] text-black px-6 border-t-8 border-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-left">
        
        {/* Lado Izquierdo: Título y Descripción */}
        <div className="md:w-3/5">
          <span className="font-mono text-[12px] uppercase tracking-[0.4em] font-black mb-4 block opacity-80">
            {t[lang].pre}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black leading-[0.9] mb-6 tracking-tighter uppercase">
            {t[lang].title}
          </h2>
          <p className="font-mono text-xs md:text-sm max-w-md font-black uppercase leading-tight opacity-90">
            {t[lang].desc}
          </p>
        </div>

        {/* Lado Derecho: Botones Compactos */}
        <div className="md:w-2/5 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:items-end">
          <a 
            href="mailto:av062712@gmail.com" 
            className="border-[3px] border-black px-8 py-4 font-black text-[11px] tracking-widest hover:bg-black hover:text-[#D90429] transition-all uppercase text-center w-full md:w-64"
          >
            {t[lang].mail} 
          </a>
          <a 
            href="https://wa.me/573184362621?text=Hola Alejandro, vi tu portafolio y me gustaría agendar una reunión para un proyecto." 
            className="border-[3px] border-black px-8 py-4 font-black text-[11px] tracking-widest hover:bg-black hover:text-[#D90429] transition-all uppercase text-center w-full md:w-64"
          >
            {t[lang].wa} 
          </a>
          
          <div className="mt-4 font-mono text-[12px] font-black opacity-70 uppercase tracking-tighter">
            © 2026 ALEJANDRO VILLA // COLOMBIA
          </div>
        </div>

      </div>
    </section>
  );
}
