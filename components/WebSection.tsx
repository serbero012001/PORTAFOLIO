"use client";
import { motion } from "framer-motion";

export default function WebSection({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = {
    es: {
      num: "05.",
      title: "WEB & DESARROLLO",
      p1_title: "CATÁLOGO PROVOCACIÓN",
      p1_desc: "PLATAFORMA INTERACTIVA PARA VISUALIZACIÓN DE PRODUCTOS. DISEÑO MINIMALISTA ENFOCADO EN NAVEGACIÓN FLUIDA.",
      p1_link: "https://www.youtube.com", 
      p2_title: "SISTEMA AUTOMATIZADO",
      p2_desc: "ARQUITECTURA LÓGICA PARA GESTIÓN DE INVENTARIO Y PEDIDOS. OPTIMIZANDO OPERACIONES MEDIANTE RESPUESTA INMEDIATA.",
      status: "TRABAJANDO EN EL PROYECTO...",
      view: "VISITAR SITIO"
    },
    en: {
      num: "05.",
      title: "WEB & DEVELOPMENT",
      p1_title: "PROVOCACIÓN CATALOG",
      p1_desc: "INTERACTIVE PLATFORM FOR PRODUCT VISUALIZATION. FOCUSED ON SMOOTH NAVIGATION AND MINIMALIST AESTHETICS.",
      p1_link: "https://www.youtube.com",
      p2_title: "AUTOMATED SYSTEM",
      p2_desc: "LOGICAL ARCHITECTURE FOR INVENTORY AND ORDER MANAGEMENT. OPTIMIZING OPERATIONS THROUGH IMMEDIATE RESPONSE.",
      status: "WORKING ON PROJECT...",
      view: "VISIT SITE"
    }
  };

  const current = t[lang] || t["es"];

  return (
    <section id="web" className="py-20 md:py-40 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO DE SECCIÓN: Proporción técnica */}
        <div className="mb-12 md:mb-32">
          <span className="text-[#D90429] font-serif italic text-lg md:text-3xl block mb-2">{current.num}</span>
          <h2 className="text-[10vw] md:text-8xl lg:text-9xl font-serif font-black text-white leading-none tracking-tighter uppercase italic">
            {current.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10">
          
          {/* CARDS CON ESCALA REDUCIDA (MÁXIMO MINIMALISMO) */}
          {[
            { title: current.p1_title, desc: current.p1_desc, link: current.p1_link, isProject: false },
            { title: current.p2_title, desc: current.p2_desc, isProject: true }
          ].map((card, idx) => (
            <div key={idx} className="group border border-white/10 bg-[#080808] p-8 md:p-14 flex flex-col justify-between min-h-[360px] md:min-h-[520px]">
              <div>
                {card.isProject && (
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-1 h-1 rounded-full bg-[#D90429] animate-pulse" />
                    <span className="text-white/30 font-mono text-[7px] md:text-[8px] font-bold tracking-widest uppercase italic">
                      {current.status}
                    </span>
                  </div>
                )}
                
                {/* TÍTULO REDUCIDO: 22px en móvil es el punto dulce de la elegancia */}
                <h3 className="text-[22px] md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight max-w-[220px] md:max-w-none">
                  {card.title}
                </h3>
                
                <p className="text-white/40 text-[8px] md:text-xs leading-[2.2] max-w-[200px] md:max-w-[320px] font-medium uppercase tracking-[0.3em]">
                  {card.desc}
                </p>
              </div>

              {card.isProject ? (
                <div className="space-y-3 mt-8">
                  <div className="flex justify-between items-center text-white/10 font-mono text-[7px] uppercase tracking-[0.5em]">
                    <span className="text-[#D90429] text-[15px] font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/5 h-[1px] relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      className="absolute h-full bg-[#D90429] opacity-60" 
                    />
                  </div>
                </div>
              // Reemplaza esta parte dentro del .map
                  ) : (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-fit mt-8 group/btn">
                      <span className="text-white/40 font-mono text-[13px] tracking-[0.4em] uppercase group-hover/btn:text-[#D90429] transition-colors">
                        {current.view} 
                      </span>
                      <div className="w-6 h-[1px] bg-white/10 group-hover/btn:w-12 group-hover/btn:bg-[#D90429] transition-all" />
                    </a>
                  )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
