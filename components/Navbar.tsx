"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang, setLang }: { lang: "es" | "en", setLang: (l: "es" | "en") => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const t = {
    es: { inicio: "INICIO", proyectos: "PROYECTOS", metodo: "MÉTODO", trayectoria: "TRAYECTORIA", contacto: "CONTACTO" },
    en: { inicio: "HOME", proyectos: "PROJECTS", metodo: "METHOD", trayectoria: "TRAJECTORY", contacto: "CONTACT" }
  };

  const menuItems = [
    { name: t[lang].inicio, href: "/" },
    { name: t[lang].proyectos, href: "/proyectos" },
    { name: t[lang].metodo, href: "/#method" }, // Asegúrate de que estos IDs coincidan con tus secciones
    { name: t[lang].trayectoria, href: "/#experience" },
    { name: t[lang].contacto, href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="text-[#D90429] font-serif font-bold text-xl tracking-widest z-50 relative">
            PORTFOLIO
          </Link>

          {/* MENÚ ESCRITORIO (Oculto en móvil) */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="font-mono text-[10px] tracking-widest text-white/70 hover:text-[#D90429] transition-colors uppercase"
              >
                {item.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="w-10 h-10 border border-white/20 rounded-full font-mono text-[9px] text-white/70 hover:bg-[#D90429] hover:border-[#D90429] hover:text-white transition-all ml-4"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo móvil) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* OVERLAY DEL MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <Link 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-white hover:text-[#D90429] transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => { setLang(lang === "es" ? "en" : "es"); setIsOpen(false); }}
              className="mt-8 border border-white/20 px-8 py-3 rounded-full font-mono text-xs text-white/70 uppercase"
            >
              Cambiar a {lang === "es" ? "Inglés" : "Español"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}