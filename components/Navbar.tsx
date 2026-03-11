"use client";
import { useState, useEffect } from "react";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

const TEXTS = {
  es: { home: "Inicio", work: "Proyectos", method: "Método", experience: "Trayectoria", contact: "Contacto" },
  en: { home: "Home", work: "Work", method: "Method", experience: "Experience", contact: "Contact" },
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  const t = TEXTS[lang];

  return (
    // Reducimos el padding en móvil (py-4 px-6) y lo aumentamos en escritorio (md:py-6 md:px-10)
    <nav className="fixed w-full top-0 z-50 flex justify-between items-center py-4 px-6 md:py-6 md:px-10 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      
      {/* Logo: Letra más pequeña en móvil para que no choque con el botón de idioma */}
      <a href="#home" className="z-50">
        <h1 className="text-lg md:text-2xl font-serif font-bold tracking-tight text-[#D90429] hover:opacity-80 transition-opacity">
          PORTFOLIO
        </h1>
      </a>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Menú de navegación: Se mantiene oculto en móvil y aparece en tablets (md) */}
        <ul className="hidden md:flex gap-8 text-[#F5F5F5] font-medium text-[10px] uppercase tracking-[0.2em]">
          <li><a href="#home" className="hover:text-[#D90429] transition-colors">{t.home}</a></li>
          <li><a href="#work" className="hover:text-[#D90429] transition-colors">{t.work}</a></li>
          <li><a href="#method" className="hover:text-[#D90429] transition-colors">{t.method}</a></li>
          <li><a href="#experience" className="hover:text-[#D90429] transition-colors">{t.experience}</a></li>
          <li><a href="#contact" className="hover:text-[#D90429] transition-colors">{t.contact}</a></li>
        </ul>

        {/* Botón de Idioma: Siempre visible */}
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="text-[#D90429] border border-[#D90429]/40 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold hover:bg-[#D90429] hover:text-white transition-all uppercase tracking-widest"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}
