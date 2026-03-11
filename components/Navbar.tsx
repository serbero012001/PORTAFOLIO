"use client";
import { useState, useEffect } from "react";

const TEXTS = {
  es: { home: "Inicio", work: "Proyectos", method: "Método", experience: "Trayectoria", contact: "Contacto" },
  en: { home: "Home", work: "Work", method: "Method", experience: "Experience", contact: "Contact" },
};

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  if (!mounted) return null;
  const t = TEXTS[lang];

  return (
    <nav className="fixed w-full top-0 z-50 flex justify-between items-center py-6 px-10 bg-[#050505]">
      <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#D90429]">
        Alejandro Villa
      </h1>
      <div className="flex items-center gap-6">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as "es" | "en")}
          className="bg-[#050505] border border-[#D90429] px-2 py-1 text-[#F5F5F5] rounded"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <ul className="hidden md:flex gap-6 text-[#F5F5F5] font-medium">
          <li>{t.home}</li>
          <li>{t.work}</li>
          <li>{t.method}</li>
          <li>{t.experience}</li>
          <li>{t.contact}</li>
        </ul>
      </div>
    </nav>
  );
}