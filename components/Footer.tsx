"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Importante para el botón Volver

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

  // Configuración de tus redes sociales
  const socialLinks = [
    { label: 'IG', url: 'https://www.instagram.com/alejandro_29005/?hl=es-la' }, // Reemplaza con tu link
    { label: 'YT', url: 'https://www.youtube.com/@Fueradecuadro-i6f' }     // Reemplaza con tu link
  ];

  return (
    <footer className="w-full bg-[#050505] relative border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto px-8 pt-24 pb-10 flex flex-col items-center">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[4.5vw] font-serif font-medium italic text-white tracking-tight leading-none text-center"
          >
            {current.end}<span className="text-[#D90429] not-italic ml-1">.</span>
          </motion.h2>
        </div>

        {/* BARRA DE NAVEGACIÓN INFERIOR */}
        <div className="w-full flex justify-between items-center pt-8 border-t border-white/10">
          
          {/* VOLVER A LA HOME */}
          <Link 
            href="/" 
            className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors font-medium"
          >
            {current.rights}
          </Link>

          {/* REDES SOCIALES */}
          <div className="flex gap-8 md:gap-10">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[11px] md:text-[13px] text-white/60 hover:text-[#D90429] transition-all duration-300 tracking-[0.2em] font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* LÍNEA DE CIERRE */}
      <div className="w-full h-[2px] bg-[#D90429] shadow-[0_-2px_10px_rgba(217,4,41,0.2)]" />
    </footer>
  );
}
