"use client";
import { motion } from "framer-motion";

export default function Stack({ lang }: { lang: "es" | "en" }) {
  const tools = [
    { id: "01", name: "Premiere Pro", cat: "NLE", icon: "/icons/premiere.svg" },
    { id: "02", name: "After Effects", cat: "VFX", icon: "/icons/aftereffects.svg" },
    { id: "03", name: "Photoshop", cat: "GFX", icon: "/icons/photoshop.svg" },
    { id: "04", name: "Lightroom", cat: "COLOR", icon: "/icons/lightroom.svg" },
    { id: "05", name: "Illustrator", cat: "VECTOR", icon: "/icons/illustrator.svg" },
  ];

  return (
    <section id="stack" className="py-24 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      
      {/* CABECERA (ALINEACIÓN Y JERARQUÍA) */}
      <div className="flex justify-between items-end mb-16 border-b border-[#D90429]/20 pb-6">
        <h3 className="text-[10px] md:text-xs font-mono text-[#D90429] tracking-[0.5em] uppercase font-black">
          {lang === "es" ? "// SOFTWARE & CONTROL" : "// SOFTWARE & CONTROL"}
        </h3>
        <span className="hidden md:block text-[9px] font-mono text-white/20 uppercase tracking-widest italic">
          v.2026_SYS_ACTIVE
        </span>
      </div>
      
      {/* GRID (EQUILIBRIO VISUAL) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/5">
        {tools.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: "rgba(217,4,41,0.02)" }}
            className="relative p-10 md:p-12 flex flex-col gap-12 border-r border-b border-white/5 group transition-all duration-700 overflow-hidden"
          >
            {/* ICONO FANTASMA DE FONDO (CONTRASTE SUTIL) */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 group-hover:rotate-12 transition-all duration-1000 select-none pointer-events-none">
              <img src={t.icon} className="w-44 h-44 object-contain grayscale" alt="" />
            </div>

            <div className="flex justify-between items-start relative z-10">
              <span className="text-[#D90429] font-mono text-[10px] font-black tracking-tighter">
                [ {t.id} ]
              </span>
              
              {/* ICONO PRINCIPAL CON FILTRO CORREGIDO PARA TS */}
              <motion.img 
                src={t.icon} 
                alt={t.name}
                className="w-10 h-10 md:w-12 md:h-12 transition-all duration-700"
                initial={{ filter: "grayscale(100%)", scale: 0.9 }}
                whileInView={{ filter: "grayscale(0%)", scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3 tracking-tighter uppercase leading-none group-hover:text-[#D90429] transition-colors">
                {t.name}
              </h4>
              
              {/* REPETICIÓN DE ELEMENTO TÉCNICO (LÍNEA ROJA) */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-[#D90429]" />
                <span className="text-[#D90429] font-mono text-[10px] tracking-[0.3em] uppercase font-black">
                  {t.cat}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
