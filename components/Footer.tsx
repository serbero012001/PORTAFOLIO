"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const contactInfo = {
  email: "mailto:av062712@gmail.com",
  whatsapp: "https://wa.me/573189819353", // Tu número real con el código de país (57 para Colombia)
  instagram: "https://www.instagram.com/alejandro_29005/?hl=es-la",
  youtube: "https://www.youtube.com/@Fueradecuadro-i6f",
};

export default function Footer({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = {
    es: {
      ctaTitle: "IMPULSEMOS TU VISIÓN",
      ctaSubtitle: "PRODUCTOR MULTIMEDIA ENFOCADO EN RESULTADOS DE ALTO IMPACTO VISUAL.",
      emailBtn: "EMAIL",
      whatsappBtn: "WHATSAPP",
      end: "FIN DE LA TRANSMISIÓN",
      return: "VOLVER",
      rights: "© 2026 ALEJANDRO VILLA // COLOMBIA",
    },
    en: {
      ctaTitle: "LET'S FUEL YOUR VISION",
      ctaSubtitle: "MULTIMEDIA PRODUCER FOCUSED ON HIGH-IMPACT VISUAL RESULTS.",
      emailBtn: "EMAIL",
      whatsappBtn: "WHATSAPP",
      end: "END OF TRANSMISSION",
      return: "RETURN",
      rights: "© 2026 ALEJANDRO VILLA // COLOMBIA",
    },
  };

  const current = t[lang] || t["es"];

  const socialLinks = [
    { label: "IG", url: contactInfo.instagram },
    { label: "YT", url: contactInfo.youtube },
  ];

  return (
    <footer className="w-full bg-[#050505] relative border-t border-white/5">
      {/* Espaciado vertical reducido para que el footer sea más compacto */}
      <div className="max-w-[1400px] mx-auto px-8 pt-16 pb-8 flex flex-col">
        
        {/* SECCIÓN DE CONTACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[10vw] md:text-[4vw] font-serif text-white tracking-tight leading-none">
              {current.ctaTitle}
            </h2>
            <p className="font-mono text-[10px] md:text-[11px] tracking-widest text-white/50 mt-4 max-w-md">
              {current.ctaSubtitle}
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=av062712@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-[#D90429] text-[#D90429] hover:bg-[#D90429] hover:text-black transition-all duration-300 py-3 px-6 text-center font-mono text-xs tracking-[0.2em] font-bold"
            >
              {current.emailBtn}
            </a>
            <a 
              href={contactInfo.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group border-2 border-[#D90429] text-[#D90429] hover:bg-[#D90429] hover:text-black transition-all duration-300 py-3 px-6 text-center font-mono text-xs tracking-[0.2em] font-bold"
            >
              {current.whatsappBtn}
            </a>
          </div>
        </div>

        {/* TÍTULO FIN DE LA TRANSMISIÓN */}
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[4.5vw] font-serif font-medium text-white tracking-tight leading-none text-center"
          >
            {current.end}<span className="text-[#D90429] ml-1">.</span>
          </motion.h2>
        </div>

        {/* BARRA INFERIOR */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-4 md:gap-0">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link 
              href="/" 
              className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors font-medium"
            >
              {current.return}
            </Link>
            <span className="font-mono text-[10px] text-white/30 hidden md:block">
              {current.rights}
            </span>
          </div>

          <div className="flex gap-8 md:gap-10">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visita mi perfil de ${link.label === 'IG' ? 'Instagram' : 'YouTube'}`}
                className="font-mono text-[11px] md:text-[13px] text-white/60 hover:text-[#D90429] transition-all duration-300 tracking-[0.2em] font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <span className="font-mono text-[10px] text-white/30 md:hidden">
            {current.rights}
          </span>

        </div>
      </div>

      <div className="w-full h-[2px] bg-[#D90429] shadow-[0_-2px_10px_rgba(217,4,41,0.2)]" />
    </footer>
  );
}