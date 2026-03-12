"use client";
import { motion } from "framer-motion";

export default function Footer({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = {
    es: { 
      end: "FIN DE LA TRANSMISIÓN", 
      rights: "VOLVER" 
    },
    en: { 
      end: "END OF TRANSMISSION", 
      rights: "RETURN" 
    }
  };

  const current = t[lang] || t["es"];

  return (
    <footer className="w-full bg-[#050505] relative border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-8 pt-24 pb-10 flex flex-col items-center">
        
        {/* 1. TÍTULO: FUENTE MÁS LEGIBLE Y CON PRESENCIA */}
        <div className="flex flex-col items-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            className="font-mono text-[10px] tracking-[0.8em] text-white mb-6 uppercase font-bold"
          >
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[6vw] md:text-[4.5vw] font-serif font-medium italic text-white tracking-tight leading-none text-center"
          >
            {current.end}<span className="text-[#D90429] not-italic ml-1">.</span>
          </motion.h2>
        </div>

        {/* 2. BARRA DE DATOS: AJUSTE DE TAMAÑO PARA LEGIBILIDAD */}
        <div className="w-full flex justify-between items-center pt-8 border-t border-white/10">
          
          <span className="font-mono text-[15px] md:text-[20px] tracking-widest uppercase text-white/40 font-medium">
            {current.rights}
          </span>

          <div className="flex gap-10">
            {['IG', 'YT'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="font-mono text-[10px] md:text-[11px] text-white/60 hover:text-[#D90429] transition-all duration-300 tracking-[0.2em] font-bold"
              >
                {link}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* 3. LÍNEA ROJA DE CIERRE (MÁS DEFINIDA) */}
      <div className="w-full h-[2px] bg-[#D90429] shadow-[0_-2px_10px_rgba(217,4,41,0.2)]" />
    </footer>
  );
}
