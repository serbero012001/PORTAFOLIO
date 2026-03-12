"use client";
import Link from "next/link";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  backText: string;
}

export default function NavbarProyectos({ lang, setLang, backText }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl px-4 py-4 md:px-12 md:py-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* IDENTIDAD (ALINEACIÓN Y JERARQUÍA) */}
        <Link href="/" className="flex flex-col group">
          <span className="text-white font-black text-sm md:text-lg tracking-[0.2em] uppercase leading-none">
            ALEJANDRO VILLA
          </span>
          <div className="flex items-center gap-2 mt-1 md:mt-2">
            <div className="w-3 md:w-5 h-[1.5px] bg-[#D90429]" />
            <span className="text-[#D90429] font-mono text-[9px] md:text-[10px] tracking-widest font-bold uppercase">
              {backText}
            </span>
          </div>
        </Link>

        {/* BOTÓN EN/ES (REPETICIÓN Y CONTRASTE) */}
        <button 
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="flex items-center justify-center w-12 h-12 md:w-auto md:h-auto md:px-6 md:py-2 border border-white/10 rounded-full font-mono text-[9px] md:text-[10px] font-black text-white/40 hover:bg-[#D90429] hover:text-white hover:border-[#D90429] transition-all uppercase"
        >
          {lang === "es" ? "EN/ES" : "ES/EN"}
        </button>

      </div>
    </nav>
  );
}
