"use client";
import { motion } from "framer-motion";
// Asegúrate de tener estos iconos en tu carpeta de assets
import pr from "@/assets/icons/premiere.svg";
import ae from "@/assets/icons/aftereffects.svg";
import ps from "@/assets/icons/photoshop.svg";
import lr from "@/assets/icons/lightroom.svg"; 
import Ai from "@/assets/icons/illustrator.svg"; 

export default function Stack({ lang }: { lang: "es" | "en" }) {
  const tools = [
    { name: "Premiere Pro", cat: "NLE", icon: pr.src },
    { name: "After Effects", cat: "VFX", icon: ae.src },
    { name: "Photoshop", cat: "GFX", icon: ps.src },
    { name: "Lightroom", cat: "COLOR", icon: lr.src },
    { name: "illustrator", cat: "VECTOR", icon: Ai.src },
  ];

  return (
    <section id="stack" className="py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      <div className="flex justify-between items-end mb-20 border-b border-[#D90429]/30 pb-4">
        <h3 className="text-xs font-mono text-[#D90429] tracking-[0.5em] uppercase">
          {lang === "es" ? "Software & Control" : "Software & Control"}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
        {tools.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(217,4,41,0.05)" }}
            className="p-10 flex flex-col gap-8 border-r border-b border-white/10 group transition-all"
          >
            <div className="flex justify-between items-start">
              <span className="text-[#D90429] font-mono text-xs">[ 0{i+1} ]</span>
              <img src={t.icon} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-serif text-white font-bold mb-2">{t.name}</h4>
              <span className="text-[#D90429] font-mono text-[9px] tracking-widest uppercase">{t.cat}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
